# PrepForge

> A full-stack MERN platform for organizing and tracking placement preparation.

🔗 **Live Demo:** https://prepforge-tau.vercel.app/

## 📌 About

**PrepForge** is a placement preparation and progress-tracking platform built with the MERN stack. It provides students with a centralized workspace to organize subjects, topics, DSA questions, notes, tasks, bookmarks, and preparation progress.

Instead of managing preparation across multiple platforms, PrepForge brings the core placement-preparation workflow into one application.

## ✨ Features

* 🔐 **Authentication** — Secure user signup, login, and protected routes
* 📚 **Subjects & Topics** — Organize preparation in a structured hierarchy
* 💻 **DSA Tracker** — Track questions and preparation status topic-wise
* 📝 **Notes** — Create, update, and manage personal preparation notes
* 📅 **Planner** — Create and manage preparation tasks
* 📊 **Progress Tracking** — Monitor preparation progress across subjects
* 🔖 **Bookmarks** — Save important questions and resources for later
* 📈 **Dashboard** — Centralized overview of preparation activity and progress

## 🛠️ Tech Stack

**Frontend**

* React.js
* JavaScript
* HTML5
* Tailwind CSS

**Backend**

* Node.js
* Express.js
* REST APIs
* JWT Authentication

**Database**

* MongoDB

**Tools & Deployment**

* Git & GitHub
* VS Code
* Vercel

## 🏗️ Architecture

```text
React.js Frontend
       │
       │ REST API
       ▼
Node.js + Express.js
       │
       ▼
    MongoDB
```

The project follows a client-server architecture with separate frontend and backend applications.

## 📂 Project Structure

```text
PrepForge/
├── client/          # React frontend
├── server/          # Node.js + Express backend
├── README.md
└── LICENSE
```

## 🔒 Backend Highlights

* JWT-based authentication
* Protected API routes
* User ownership/authorization checks
* Input validation
* MongoDB data modeling
* RESTful API design
* Centralized error handling
* Consistent HTTP status codes

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd prepforge
```

### 2. Install dependencies

```bash
cd client
npm install

cd ../server
npm install
```

### 3. Configure environment variables

Create a `.env` file inside the `server` directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

### 4. Run the application

Start the backend:

```bash
cd server
npm run dev
```

Start the frontend in another terminal:

```bash
cd client
npm run dev
```

## 🔮 Future Improvements

* Advanced preparation analytics
* Improved personalization
* Interview preparation modules
* More detailed progress insights
* Additional placement resources

## 👨‍💻 Developer

**Priyanshu Singh**
Computer Science & Engineering
Thapar Institute of Engineering and Technology

## 📄 License

This project is licensed under the MIT License.
