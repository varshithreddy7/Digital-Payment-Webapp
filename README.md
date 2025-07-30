# PayTM Clone

A digital wallet application I built while learning full-stack web development. This project lets users sign up, manage their account balance, and transfer money to other users securely.

## About This Project

I created this during my web development journey to practice building a complete MERN stack application. The goal was to understand how payment systems work and implement secure user authentication, database transactions, and a clean user interface.

## What It Does

- **User Registration & Login**: Create an account and sign in securely
- **Dashboard**: View your current balance and account details
- **Send Money**: Transfer money to other users by searching their name
- **User Search**: Find other users to send money to
- **Secure Transactions**: All transfers are protected with proper validation

## 🚀 Features

- **User Authentication**: Secure signup and signin with JWT tokens
- **Password Security**: Bcrypt hashing for password protection
- **Dynamic Dashboard**: Real-time balance and user information
- **Money Transfer**: Secure transfer between users with transaction validation
- **User Search**: Case-insensitive search functionality
- **Responsive Design**: Beautiful UI with Tailwind CSS
- **Protected Routes**: Private routes for authenticated users
- **Landing Page**: Professional welcome page with modern design

## Tech Stack

I used the MERN stack for this project:

**Frontend:**
- React for the user interface
- Tailwind CSS for styling (makes it look clean!)
- React Router for navigation
- Axios for API calls
- Vite as the build tool

**Backend:**
- Node.js and Express.js for the server
- MongoDB with Mongoose for the database
- JWT for user authentication
- bcrypt for password hashing
- Zod for input validation

## 📁 Project Structure

```
paytm/
├── backend/
│   ├── routes/
│   │   ├── user.js
│   │   ├── account.js
│   │   └── index.js
│   ├── config.js
│   ├── db.js
│   ├── middleware.js
│   ├── index.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Appbar.jsx
│   │   │   ├── Balance.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Users.jsx
│   │   │   └── ...
│   │   ├── pages/
│   │   │   ├── Landing.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── Signin.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── SendMoney.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
└── README.md
```

## How to Run This Project

### What You'll Need
- Node.js installed on your computer
- A MongoDB Atlas account (it's free!) or local MongoDB
- Basic knowledge of terminal/command prompt

### Getting Started

1. **Clone this repository**
   ```bash
   git clone https://github.com/varshithreddy/paytm-clone.git
   cd paytm-clone
   ```

2. **Install dependencies**
   ```bash
   npm run install-deps
   ```
   This installs all the packages for both frontend and backend.

3. **Set up your database**
   - The project is already configured with my MongoDB Atlas database
   - If you want to use your own database, update the connection string in `backend/.env`

4. **Start the application**
   ```bash
   npm run dev
   ```
   This starts both the React frontend and Express backend.

5. **Open your browser**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000

### Running in Production

```bash
npm run build  # Build the frontend
npm start      # Start the backend server
```

## 🔐 API Endpoints

### User Routes
- `POST /api/v1/user/signup` - Create new user account
- `POST /api/v1/user/signin` - User login
- `GET /api/v1/user/me` - Get current user info
- `PUT /api/v1/user/` - Update user information
- `GET /api/v1/user/bulk` - Search users

### Account Routes
- `GET /api/v1/account/balance` - Get user balance
- `POST /api/v1/account/transfer` - Transfer money between accounts

## Things I Learned

- How to build a full-stack MERN application from scratch
- Securing APIs with JWT and middleware
- The importance of environment variables for configuration
- How to structure a React project with components and pages
- Using Tailwind CSS for rapid UI development

## Future Improvements

- Add more payment options
- Implement transaction history
- Write unit and integration tests

## Get in Touch

If you have any questions or feedback, feel free to reach out!

- **GitHub**: [@varshithreddy](https://github.com/varshithreddy)

Thanks for checking out my project! ⭐
