"""Read DrayTek UK/Ireland firmware metadata without downloading firmware."""
import argparse
from html import unescape
from html.parser import HTMLParser
import re
import sys
from urllib.error import HTTPError, URLError
from urllib.parse import urljoin
from urllib.request import Request, urlopen


class Links(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
        self.active = None

    def handle_starttag(self, tag, attrs):
        if tag == 'a':
            self.active = [dict(attrs).get('href', ''), '']

    def handle_data(self, data):
        if self.active is not None:
            self.active[1] += data

    def handle_endtag(self, tag):
        if tag == 'a' and self.active is not None:
            self.links.append(tuple(self.active))
            self.active = None


def plain(value):
    value = re.sub(r'<br\s*/?>', ' | ', value, flags=re.I)
    return ' '.join(unescape(re.sub(r'<[^>]+>', ' ', value)).split())


def normalize(model):
    model = re.sub(r'^\s*(?:draytek\s*)?(?:vigor\s*)?', '', model, flags=re.I).strip()
    if not re.fullmatch(r'\d{3,5}[a-zA-Z0-9+]*', model):
        raise ValueError('Use a router model such as 2866, Vigor 2866ax, or 3912S.')
    return model


def parse_page(html, model, url):
    table = re.search(r'<table\b[^>]*>(?:(?!</table>).)*Firmware Information(?:(?!</table>).)*</table>', html, re.I | re.S)
    if not table:
        raise ValueError('No firmware information table found. Check the source page manually.')
    rows = {}
    for row in re.findall(r'<tr\b[^>]*>(.*?)</tr>', table[0], re.I | re.S):
        cells = re.findall(r'<td\b[^>]*>(.*?)</td>', row, re.I | re.S)
        if len(cells) >= 2:
            rows[plain(cells[0]).lower()] = cells[1]
    supported = plain(rows.get('supported models', ''))
    models = re.findall(r'Vigor\s*(\d{3,5}[a-zA-Z0-9+]*)', supported, re.I)
    if model.lower() not in [item.lower() for item in models]:
        raise ValueError(f'Model {model} is not listed on this page. Supported models: {supported or "not provided"}')
    links = Links()
    links.feed(rows.get('current version', ''))
    if not links.links or not re.search(r'\d+\.\d+', links.links[0][1]):
        raise ValueError('The current firmware version could not be read.')
    output = [f'Model: Vigor {model}', 'Region: UK / Ireland',
              f'Current version: {plain(links.links[0][1])}',
              f'Release date: {plain(rows.get("release date", "Not provided"))}',
              f'Supported models: {supported}', f'Source: {url}']
    for href, title in links.links:
        output.append(f'{plain(title)}: {urljoin(url, href)}')
    downloads = Links()
    downloads.feed(html)
    seen = set()
    for href, title in downloads.links:
        title = plain(title)
        if 'firmware' in title.lower() and re.search(r'\d+\.\d+', title) and ('download.send' in href or '/send/' in href):
            if title not in seen:
                output.append(f'{title}: {urljoin(url, href)}')
                seen.add(title)
    output.append('Check the release notes for model compatibility and upgrade instructions.')
    return '\n'.join(output)


def lookup(model):
    model = normalize(model)
    family = re.match(r'\d+', model)[0]
    url = f'https://www.draytek.co.uk/support/downloads/vigor-{family}'
    request = Request(url, headers={'User-Agent': 'ObsidianFirmwareLookup/1.0', 'Accept': 'text/html'})
    with urlopen(request, timeout=20) as response:
        html = response.read(2_000_000).decode(response.headers.get_content_charset() or 'utf-8', errors='replace')
    return parse_page(html, model, url)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('model')
    args = parser.parse_args()
    try:
        print(lookup(args.model))
    except (ValueError, HTTPError, URLError, TimeoutError, OSError) as error:
        print(f'Firmware lookup failed: {error}', file=sys.stderr)
        return 1
    return 0


if __name__ == '__main__':
    sys.exit(main())
