# Full Stack Login & Signup Application

A simple **full-stack authentication system** built using **React (frontend)** and **Node.js with Express (backend)**.
Users can create an account, log in securely, and access a protected welcome page.

---

## 🚀 Features

- User Signup (Create account)
- User Login authentication
- Password hashing with **bcrypt**
- **JWT authentication token**
- Protected routes
- Logout functionality
- Simple responsive UI with CSS

---

## 🛠 Technologies Used

### Frontend

- React.js
- React Router DOM
- Axios
- CSS

### Backend

- Node.js
- Express.js

### Security

- bcryptjs (password hashing)
- JSON Web Token (JWT)

---

## 📂 Project Structure

login-project
│
├── backend
│ ├── controllers
│ ├── routes
│ ├── server.js
│ └── users.js
│
└── frontend
├── src
│ ├── components
│ ├── pages
│ ├── services
│ ├── App.js
│ └── index.js

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/login-project.git
cd login-project
```

### 2️⃣ Start Backend

```bash
cd backend
npm install
node server.js
```

Backend runs at:

```
http://localhost:5000
```

---

### 3️⃣ Start Frontend

Open another terminal.

```bash
cd frontend
npm install
npm start
```

Frontend runs at:

```
http://localhost:3000
```

---

## 🔄 Application Flow

Signup → Create account
Login → Authenticate user
JWT Token generated
Protected Route allows access
Welcome page displayed

---

## 📌 Future Improvements

- Add MongoDB database
- Email verification
- Password validation rules
- Token refresh system
- Deploy to cloud

---

## 👨‍💻 Author

Developed as a **full-stack learning project** using React and Node.js.
