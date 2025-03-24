# Enpal Backend (NestJS)

## 📌 Prerequisites
Before running the backend, make sure you have:
- **Node.js** installed ([Download Node.js](https://nodejs.org/))
- **PostgreSQL** installed and running ([Download PostgreSQL](https://www.postgresql.org/download/))

## 📌 Installation & Setup
1. Clone the repository:
   git clone https://github.com/YOUR_USERNAME/enpal-backend.git
   cd enpal-backend

2. Install dependencies:
   npm install

3. Configure the database:
   Open PostgreSQL and run:
   CREATE DATABASE todolist;
   
Ensure the .env file contains:
    DB_HOST=localhost
    DB_PORT=5432
    DB_USER=postgres
    DB_PASS=password
    DB_NAME=todolist

4. Start the backend:
   npm run start

## 📌 API Endpoints
   Method	Endpoint	Description
   GET	    /tasks	    Fetch all tasks
   POST	/tasks	    Add a new task
   PATCH	/tasks/:id	Update a task
   DELETE	/tasks/:id	Delete a task

## 📌 Notes
   This backend was built using NestJS and TypeORM.
   Make sure PostgreSQL is running before starting the backend.