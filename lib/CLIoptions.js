const optionator = require('optionator');

module.exports = optionator({
  prepend: 'lib-report [options]',
  options: [
    {
      heading: 'Other',
    },
    {
      option: 'help',
      alias: 'h',
      type: 'Boolean',
      description: 'Display help',
    },
    {
      option: 'version',
      alias: 'v',
      type: 'Boolean',
      description: 'Output the version number',
    },
  ],
});
