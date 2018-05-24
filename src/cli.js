#!/usr/bin/env node

const args = process.argv.slice(2);
const cwd = process.cwd();

if (args[0] === '--help') {
  require('./help')(...args.slice(1));
} else {
  require('./index')(cwd, ...args);
}
