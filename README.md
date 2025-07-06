Sure! Here’s a *short and clean README*:

---

# 🚀 Employee Manager (MERN)

A simple full-stack *Employee Management System* using:

* *MongoDB*
* *Express.js*
* *React.js*
* *Node.js*

---

## ⚙ Setup

### Backend

bash
cd backend
npm install


✅ Create backend/.env:


PORT=4000
MONGODB_URI=your_mongodb_connection_string


Run:

bash
node index.js


---

### Frontend

bash
cd frontend
npm install


✅ Create frontend/.env:


REACT_APP_BASE_URL=http://localhost:4000/api/v1


Run:

bash
npm start


---

## 🌐 API

| Method | Route                   | Action             |
| ------ | ----------------------- | ------------------ |
| POST   | /api/v1/createUser      | Add employee       |
| GET    | /api/v1/getUsers        | Get all employees  |
| GET    | /api/v1/getUsers/\:id   | Get employee by ID |
| PUT    | /api/v1/updateUser/\:id | Update employee    |
| DELETE | /api/v1/deleteUser/\:id | Delete employee    |

---

✅ *CORS enabled*
✅ *MongoDB + REST API + React UI*

---
