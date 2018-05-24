const presets = require('./presets');
const messages = require('./messages');

function listPresets() {
  messages.usage();
  messages.listPresets();
}

function listFiles(preset) {
  if (!presets[preset]) {
    messages.unknownPreset(preset);
    return;
  }

  messages.listFiles(preset);
}

module.exports = arg => {
  if (arg) {
    listFiles(arg);
  } else {
    listPresets();
  }
};
