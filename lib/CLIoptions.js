const optionator = require('optionator');

module.exports = optionator({
  prepend: 'lib-report [options]',
  options: [
    {
      heading: 'Other',
    },
    {
      option: 'version',
      alias: 'v',
      type: 'Boolean',
      description: 'Output the version number',
    },
  ],
});
