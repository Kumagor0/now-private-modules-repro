const tmp = require('@kespa/test-private-module');

module.exports = (req, res) => {
  res.end(tmp());
};
