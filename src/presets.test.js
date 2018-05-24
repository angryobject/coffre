const presets = require('./presets');
const fs = require('fs');

Object.keys(presets).forEach(testPresetFiles);

function testPresetFiles(presetName) {
  test(`${presetName} files`, () => {
    presets[presetName].forEach(f => {
      if (typeof f !== 'object') {
        expect(presets[f]).toBeDefined();
        return;
      }

      Object.keys(f).forEach(source => {
        expect(fs.existsSync(__dirname + `/files/${source}`)).toBe(true);
      });
    });
  });
}
