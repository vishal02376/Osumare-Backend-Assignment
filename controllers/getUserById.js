const dataStore = require('./dataStore');

// This function gets a single user by ID
const getUserById = (req, res) => {

  const userId = req.params.id;


  let foundUser = null;

  for (let i = 0; i < dataStore.users.length; i++) {
    if (dataStore.users[i].id == userId) {
      foundUser = dataStore.users[i];
      break;
    }
  }


  if (!foundUser) {
    return res.status(404).json({ error: 'User not found' });
  }


  return res.status(200).json(foundUser);
};

module.exports = getUserById;

