jest.mock('./index');
jest.mock('./help');
jest.mock('process');

process.cwd = () => __dirname;

beforeEach(() => {
  jest.resetModules();
  jest.clearAllMocks();
});

test('calls index with correct arguments', () => {
  const coffre = require('./index');

  process.argv = ['node', 'cli.js', 'git', 'editor'];
  require('./cli');

  expect(coffre).toHaveBeenCalledWith(__dirname, 'git', 'editor');
});

test('runs help if --help is passed', () => {
  const coffre = require('./index');
  const help = require('./help');

  process.argv = ['node', 'cli.js', '--help'];
  require('./cli');

  expect(coffre).not.toHaveBeenCalled();
  expect(help).toHaveBeenCalled();
});

test('passes one following argument to help', () => {
  const coffre = require('./index');
  const help = require('./help');

  process.argv = ['node', 'cli.js', '--help', 'git', 'editor'];
  require('./cli');

  expect(coffre).not.toHaveBeenCalled();
  expect(help).toHaveBeenCalledWith('git', 'editor');
});
