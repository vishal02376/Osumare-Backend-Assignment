const dataStore = require('./dataStore');

// This function is delete user data by the id
const deleteUser = (req, res) => {


  const userId = req.params.id;




  let userIndex = false;
  for (let i = 0; i < dataStore.users.length; i++) {
       if (dataStore.users[i].id == userId) {
           userIndex = i;
      break;
    }
  }


  if (userIndex === false) {
    return res.status(404).json({ error: 'User not found' });
  }


  dataStore.users.splice(userIndex, 1);

  // Send success response
  return res.status(200).json({ message: 'User deleted successfully' });
};

module.exports = deleteUser;
