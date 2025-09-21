Contact Book App 📓
This is a full-stack contact management application built with the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to create, view, update, and delete contacts with a simple, clean user interface.

Features ✨
Create Contacts: Add new contacts with their name, email, and phone number.
View Contacts: Display a list of all contacts. The list is paginated to handle a large number of contacts efficiently.
Delete Contacts: Remove contacts from the database.
Pagination: Browse through contacts in manageable pages.
Responsive Design: The UI is built with basic CSS to be functional across different devices.

Tech Stack 🚀
Frontend
React: A JavaScript library for building the user interface.
Axios: A promise-based HTTP client for making API calls to the backend.

Backend
Node.js: The JavaScript runtime environment.
Express.js: A web framework for building the REST API.
Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js.

Database
MongoDB Atlas: A cloud-based NoSQL database service used to store contact data.

Getting Started 💻
Prerequisites
Node.js (v18 or higher)
MongoDB Atlas account
npm (v9 or higher) or yarn

1. Backend Setup
Navigate to the backend directory.
cd backend
Install the required packages.
npm install
Create a .env file in the backend directory.
MONGO_URI=mongodb+srv://<username>:<password>@<your-cluster-name>.mongodb.net/<your-database-name>?retryWrites=true&w=majority
PORT=5000
Replace <username>, <password>, <your-cluster-name>, and <your-database-name> with your MongoDB Atlas credentials and cluster information. Make sure to whitelist your IP address in the MongoDB Atlas dashboard.

Start the backend server.
npm start
The server will run on http://localhost:5000.

2. Frontend Setup
Open a new terminal and navigate to the frontend directory.
cd frontend/proj-frontend
Install the required packages.
npm install
If you encounter a Module not found error, consider using an older, stable version of Axios.

npm install axios@0.27.2
Start the React development server.
npm start
The app will open in your browser at http://localhost:3000.

API Endpoints 🌐
The backend provides the following RESTful API endpoints:

Endpoint	Method	Description
/api/contacts	GET	Retrieves all contacts with pagination.
/api/contacts	POST	Creates a new contact.
/api/contacts/:id	PUT	Updates an existing contact.
/api/contacts/:id	DELETE	Deletes a contact
