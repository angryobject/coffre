const presets = require('./presets');

module.exports = {
  usage() {
    process.stdout.write('\nUsage: coffre [preset] [dir]\n');
  },

  unknownPreset(preset) {
    process.stdout.write(`\nUnknown preset name '${preset}'.\n`);
    this.useHelp();
  },

  useHelp() {
    process.stdout.write("\nUse 'coffre --help' to list avaliable presets.\n");
  },

  fileExists(file) {
    process.stdout.write(`\nFile already exists ${file}.\n`);
  },

  listPresets() {
    process.stdout.write(
      `\nPresets:\n\n${Object.keys(presets)
        .map(k => `• ${k}\n`)
        .join(
          ''
        )}\nUse 'coffre --help [preset]' to list files included in preset\n`
    );
  },

  listFiles(preset) {
    const printFiles = files =>
      files
        .map(f => {
          if (typeof f !== 'object') return printFiles(presets[f]);

          return Object.values(f)
            .map(v => `${v}\n`)
            .join('');
        })
        .join('');

    process.stdout.write(
      `\nFiles included in '${preset}' preset:\n\n${printFiles(
        presets[preset]
      )}`
    );
  },
};
