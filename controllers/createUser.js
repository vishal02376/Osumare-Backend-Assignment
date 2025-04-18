const { users } = require('./dataStore');

const createUser = (req, res) => {
  //  extract each field from the users
  const name = req.body.name;
  const email = req.body.email;
  const mobile = req.body.mobile;
  const rollNo = req.body.rollNo;

  // Validation for empty fields
  if (!name || !email || !mobile || !rollNo) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Check if email already exists
  const sameEmail = users.some(user => user.email === email);
  if (sameEmail) {
    return res.status(400).json({ error: `Email ${email} is already used` });
  }

  // Check if mobile already exists
  const sameMobileNo = users.some(user => user.mobile === mobile);
  if (sameMobileNo) {
    return res.status(400).json({ error: `Mobile ${mobile} number is already used` });
  }

  // Check if roll number already exists
  const sameollNo = users.some(user => user.rollNo === rollNo);
  if (sameollNo) {
    return res.status(400).json({ error: `Roll ${rollNo} number is already used` });
  }

  // Create new user object
  const newUser = {
    id: users.length + 1,
    name: name,
    email: email,
    mobile: mobile,
    rollNo: rollNo
  };

  // Add user to in-memory array
  users.push(newUser);

  // Return newly created user
  return res.status(201).json(newUser);
};

module.exports = createUser;
