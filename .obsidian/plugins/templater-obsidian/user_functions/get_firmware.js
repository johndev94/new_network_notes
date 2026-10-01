// get_firmware.js
module.exports = async (model) => {
  const { execSync } = require("child_process");
  const script = "C:/Users/Admin/Documents/draytek_fw_scraper.py";
  try {
    const cmd = `python "${script}" "${model}"`;
    return execSync(cmd).toString();
  } catch (e) {
    return `Error running Python script: ${e.message}`;
  }
};