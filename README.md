# 🤖 Smart Public Issue Tracking and Reporting System (SPITARS)

## 📌 Project Overview

The Smart Public Issue Tracking and Reporting System (SPITARS) is a web-based complaint management system that enables citizens to report public issues online. Users can register, submit complaints with images, track complaint status, and provide feedback after resolution. The system also includes an AI-powered chatbot using Google Gemini API to assist users.

---

## 🎯 Objectives

- Enable citizens to report public issues online.
- Reduce manual complaint handling.
- Provide real-time complaint status tracking.
- Allow administrators to manage complaints efficiently.
- Improve user experience with an AI Assistant.
- Prioritize complaints intelligently based on area type.

---

## ✨ Features

- 👤 User Registration & Login
- 🔐 Admin Login
- 📝 Complaint Submission
- 📷 Image Upload
- 📍 Location-Based Complaint Reporting
- 🏫 Area Type Selection
- ⚡ Intelligent Priority Prediction
- 📊 Complaint Status Tracking
- 💬 Community Feedback
- 🤖 AI Chatbot using Google Gemini API

---

## 🛠️ Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### AI Technology
- Google Gemini API (Generative AI)

### Other Tools
- VS Code
- GitHub
- MongoDB Compass
- Postman (for API testing)

---

## 📂 Project Structure

```
SPITARS
│
├── frontend
│   ├── index.html
│   ├── register.html
│   ├── user-login.html
│   ├── admin-login.html
│   ├── complaint.html
│   ├── user-dashboard.html
│   ├── admin-dashboard.html
│   ├── chatbot.html
│   ├── style.css
│   ├── chatbot.css
│   ├── script.js
│   └── chatbot.js
│
├── backend
│   ├── config
│   ├── models
│   ├── routes
│   ├── uploads
│   ├── .env
│   ├── package.json
│   └── server.js
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/SPITARS.git
```

### Install Backend Packages

```bash
cd backend
npm install
```

### Create .env File

```
GEMINI_API_KEY=YOUR_API_KEY
PORT=5000
```

### Run Backend

```bash
node server.js
```

### Open Frontend

Open `index.html` using Live Server or your browser.

---

## 🤖 AI Chatbot

The AI chatbot is powered by **Google Gemini API**.

### Capabilities

- Answers user questions.
- Guides users in complaint registration.
- Explains project features.
- Provides information about complaint tracking.
- Helps users understand Intelligent Priority Prediction.

---

## 📊 Intelligent Priority Prediction

The system assigns complaint priority based on the selected area type.

| Area Type | Priority |
|-----------|----------|
| School Area | 🔴 High |
| Hospital Area | 🔴 High |
| Public Place | 🟡 Medium |
| Residential Area | 🟢 Low |

---

## 📸 Screenshots

Add screenshots of:

- Home Page
- User Registration
- User Login
- Complaint Form
- User Dashboard
- Admin Dashboard
- AI Chatbot
- Community Feedback

---

## 🚀 Future Enhancements

- Duplicate Complaint Detection
- GPS Location Tracking
- Email & SMS Notifications
- Mobile Application
- Government Portal Integration

---

## 👨‍💻 Developed By

**Pradeepa B**

B.Tech Artificial Intelligence and Data Science

VSB Engineering College, Karur

---

## 📄 License

This project is developed for academic purposes.
