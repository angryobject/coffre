const fs = require('fs');
const path = require('path');
const presets = require('./presets');
const messages = require('./messages');

function copyPreset(presetName, toDir) {
  const preset = presets[presetName];

  if (!preset) {
    messages.unknownPreset(presetName);
    return;
  }

  preset.forEach(p => {
    if (typeof p === 'object') {
      copyFiles(p, toDir);
    } else {
      copyPreset(p, toDir);
    }
  });
}

function copyFiles(files, toDir) {
  Object.keys(files).forEach(key => {
    const source = path.resolve(__dirname, 'files', key);
    const dest = path.resolve(toDir, files[key]);

    if (fs.existsSync(dest)) {
      messages.fileExists(dest);
      return;
    }

    fs.createReadStream(source).pipe(fs.createWriteStream(dest));
  });
}

module.exports = (cwd, ...args) => {
  if (args.length === 0) {
    messages.usage();
    messages.useHelp();
    return;
  }

  args.forEach(arg => copyPreset(arg, cwd));
};
