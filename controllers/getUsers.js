let { users } = require("./dataStore");

module.exports = (req, res) => {
  res.status(200).json(users);
};
