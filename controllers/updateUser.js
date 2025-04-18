const dataStore = require('./dataStore');

// This function updates user data by id
const updateUser = (req, res) => {
 
  const userId = req.params.id;

 
  const name = req.body.name;
  const email = req.body.email;
  const mobile = req.body.mobile;
  const rollNo = req.body.rollNo;


  if (!name || !email || !mobile || !rollNo) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Search for the user with the given id
  let userUpdated = null;
  for (let i = 0; i < dataStore.users.length; i++) {
    if (dataStore.users[i].id == userId) {
      userUpdated = dataStore.users[i];
      break;
    }
  }

  // user is not found, return error
  if (!userUpdated) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Update the users information
  userUpdated.name = name;
  userUpdated.email = email;
  userUpdated.mobile = mobile;
  userUpdated.rollNo = rollNo;


  return res.status(200).json(userUpdated);
};

module.exports = updateUser;
