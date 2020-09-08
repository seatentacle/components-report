const CLIOptions = require('./CLIoptions');

const cli = {
  async execute(args) {
    let options;

    try {
      options = CLIOptions.parse(args);
    } catch (error) {
      process.stdout.write(error);
      return 2;
    }

    if (options.version) {
      const { version } = require('../package.json');
      process.stdout.write(`${version}\n`);

      return 0;
    }

    return 0;
  }
};

module.exports = cli;
