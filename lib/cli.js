const cli = {
  async execute(args) {
    process.stdout.write(`execute\nargs: ${args}`);

    return 0;
  }
};

module.exports = cli;
