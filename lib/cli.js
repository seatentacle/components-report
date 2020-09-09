const CLIOptions = require('./CLIoptions');
const { version } = require('../package.json');

const cli = {
  async execute(args) {
    let options;

    try {
      options = CLIOptions.parse(args);
    } catch (error) {
      console.error(error);
      return 2;
    }

    switch (true) {
      case options.help:
        console.log(CLIOptions.generateHelp());
        return 0;
      case options.version:
        console.log(`v${version}`);
        return 0;
    }

    return 0;
  }
};

module.exports = cli;
