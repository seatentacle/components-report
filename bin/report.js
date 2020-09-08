#!/usr/bin/env node

const cli = require('../lib/cli');
const { version } = require('../package.json');

function onFatalError (error) {
  process.exitCode = 2;

  console.error(`Component-report version: ${version}\n\n${error}`);
}

(async function main () {
  process.on('uncaughtException', onFatalError);
  process.on('unhandledRejection', onFatalError);

  process.exitCode = await cli.execute(process.argv);
}()).catch(onFatalError);
