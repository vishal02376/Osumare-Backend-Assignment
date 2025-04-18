# User Management RESTful API

A basic RESTful API built with **Node.js** and **Express.js** that allows users to perform CRUD operations (Create, Read, Update, Delete) on a list of users. Data is stored **in-memory** (not in a database).



---

## 🛠 Features

- Create a new user
- Get all users
- Get user by ID
- Update user by ID
- Delete user by ID
- Validations for required fields
- Uniqueness check for Email, Mobile, Roll No

---

## 🚀 How to Run the Project

📁 Folder Structure

backend/
├── controllers/
│   ├── createUser.js
│   ├── deleteUser.js
│   ├── getAllUsers.js
│   ├── getUserById.js
│   └── updateUser.js
├── routes/
│   └── userRoutes.js
├── dataStore.js
├── index.js
└── README.md




1. Clone this repository:
   ```bash
   git clone https://github.com/vishal02376/https://github.com/vishal02376/Osumare-Backend-Assignment.git



   
How to Start the Project (Step-by-Step)
📁 1. Navigate to the project directory:
bash
Copy
Edit
cd your-project-folder-name
Replace your-project-folder-name with your actual folder name.





📦 2. Install required dependencies:
bash
Copy
Edit
npm install
This will install all necessary packages like express.







🟢 3. Start the server:
bash
Copy
Edit
node index.js
If everything is set up correctly, you will see this in terminal:

pgsql
Copy
Edit
Server is running on port 3000






🌐 4. Open your browser or Thunder Client/Postman and test the APIs:













📮 Full List of API Endpoints

Method	Endpoint	Description
GET	http://localhost:3000/api/users	Get list of all users
GET	http://localhost:3000/api/users/:id	Get a specific user by ID
POST	http://localhost:3000/api/users	Create a new user
PUT	http://localhost:3000/api/users/:id	Update existing user by ID
DELETE	http://localhost:3000/api/users/:id	Delete user by ID












✅ Example of each:
➕ Create a new user
POST http://localhost:3000/api/users



{
  "name": "Vishal",
  "email": "vishal@example.com",

  "mobile": "1234567890",
  "rollNo": "101"
}





![Screenshot (151)](https://github.com/user-attachments/assets/3041b5e0-f4b9-4a28-b21a-1f3c612b0290)








📥 Get all users

GET http://localhost:3000/api/users






![Screenshot (153)](https://github.com/user-attachments/assets/b176d93b-92b6-40af-8fdf-68d98e68ece3)





✏️ Update user by ID


PUT http://localhost:3000/api/users/1





![Screenshot (154)](https://github.com/user-attachments/assets/cc344648-f1c8-4e26-95da-5465001b3504)



❌ Delete user by ID


DELETE http://localhost:3000/api/users/1




![Screenshot (155)](https://github.com/user-attachments/assets/7ff173d8-e8b6-46ba-a09d-6cc9dfe874d8)



🙏 Credits

Developed by Vishal Kumar

As part of Backend Assignment for Osumare Marketing Solutions













