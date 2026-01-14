#  Digital Bookshelf API — Mongoose Models and Schemas

##  Overview
The Digital Bookshelf API is a RESTful backend service built with Express and MongoDB using Mongoose. It allows a local library to manage its book inventory by creating, reading, updating, and deleting book records. This project focuses on building a clean backend architecture using models and routes without a frontend interface.

##  Workplace Context
A local library is modernizing its book tracking system and needs a backend service to manage its collection digitally. As a backend developer, you were tasked with creating an API that librarians can use to maintain accurate and up-to-date book records. This API serves as the foundation for a future full-stack application.

##  Learning Objectives
By completing this lab, you demonstrated the ability to:

* Define a Mongoose schema with proper data types and validation rules
* Compile schemas into reusable Mongoose models
* Build a full CRUD (Create, Read, Update, Delete) API using Express
* Organize an application using modular routes and models
* Interact with a MongoDB database using Mongoose model methods
* Handle incoming request data using req.body and req.params
* Configure environment variables securely using dotenv

##  Description

This lab focuses on building a backend-only REST API for managing books. The application uses:

* Express to handle HTTP requests and routing
* Mongoose to model application data and interact with MongoDB
* MongoDB Atlas as the cloud-hosted database
* The API supports all five core CRUD operations and follows RESTful conventions.

##  Resources

* Express Documentation — https://expressjs.com/
* Mongoose Documentation — https://mongoosejs.com/
* MongoDB Atlas — https://www.mongodb.com/atlas
* Dotenv — https://www.npmjs.com/package/dotenv


##  Getting Started

##  Requirements

*  Node.js v24+
*  npm
*  MongoDB Atlas account
*  A code editor (VS Code recommended)

##  OS Compatibility

This lab works on:

*  Windows
*  macOS
*  Linux

##  Installation

1. Clone the repository:

git clone [<repository-url>](https://github.com/KaeTheDev/digital-bookshelf-api.git)

2. Navigate into the project folder:

cd digital-bookshelf-api

##  Setup

1. Install dependencies:

npm install

2. Create a .env file in the root directory and add your MongoDB connection string:
PORT=3000
MONGO_URI=your_mongodb_atlas_connection_string

3. Start the server:

node server.js 

The server will run at:
http://localhost:3000


## API Endpoints
Method

Endpoint

Description

POST

/

Create a new book

GET

/

Retrieve all books

GET

/:id

Retrieve a book by ID

PUT

/:id

Update a book by ID

DELETE

/:id

Delete a book by ID


##  Project Structure
digital-bookshelf-api/
├── db/
│   └── connection.js
├── models/
│   └── Book.js
├── routes/
│   └── bookRoutes.js
├── server.js
├── .env
├── .gitignore
├── package.json