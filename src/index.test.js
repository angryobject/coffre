const coffre = require('./index');
const presets = require('./presets');
const fs = require('fs');

const stream = { pipe: jest.fn() };
const readStream = jest.fn(() => stream);
const writeStream = jest.fn(() => stream);
const exists = jest.fn(() => false);

fs.createReadStream = readStream;
fs.createWriteStream = writeStream;
fs.existsSync = exists;

beforeEach(() => {
  jest.clearAllMocks();
});

const tested = {};

function testPreset(presetName) {
  if (tested[presetName]) return;

  presets[presetName].forEach(f => {
    if (typeof f !== 'object' && !tested[f]) {
      testPreset(f);
    }
  });

  test(`${presetName} files`, () => {
    coffre(__dirname, presetName);

    let i = 0;

    presets[presetName].forEach(f => {
      if (typeof f !== 'object') {
        i += tested[f];
        return;
      }

      Object.keys(f).forEach(source => {
        const dest = f[source];
        const sourcePath = __dirname + `/files/${source}`;
        const destPath = __dirname + `/${dest}`;

        expect(readStream.mock.calls[i][0]).toBe(sourcePath);
        expect(writeStream.mock.calls[i][0]).toBe(destPath);

        i++;
      });

      expect(stream.pipe).toHaveBeenCalledTimes(i);
    });

    tested[presetName] = i;
  });
}

Object.keys(presets).forEach(testPreset);

test('if file exists', () => {
  const numFiles = Object.keys(presets.package[0]).length;
  fs.existsSync.mockReturnValueOnce(true);

  coffre(__dirname, 'package');

  expect(readStream).toHaveBeenCalledTimes(numFiles - 1);
  expect(writeStream).toHaveBeenCalledTimes(numFiles - 1);
});
