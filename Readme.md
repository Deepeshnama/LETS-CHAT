# Let's Chat

## Introduction
"Let's Chat" is a real-time messaging application that allows users to communicate via individual and group chats. The app features secure user authentication, instant messaging with message tagging and media sharing, and allows users to switch between dark and light themes. The application offers a seamless chat experience with the ability to filter inappropriate content using AI.

## Project Type
*Fullstack*

This is a Fullstack application using React for the frontend and Node.js with Express.js for the backend. The app also uses MongoDB for data storage and Socket.IO for real-time messaging.

## Deployed App
- *Frontend*: [https://tubular-sherbet-2da23d.netlify.app/]
- *Backend*: [https://deployapi-ub0q.onrender.com]
- *Database*: [mongodb+srv://admin:Deepesh123@cluster0.vvyu3.mongodb.net/jio]

## Directory Structure
```bash
my-app/
├─ backend/
│  ├─ server.js          # Main backend server file
│  ├─ models/            # MongoDB models for user, chat, and messages
│  ├─ controllers/
│  ├─ routes/        # Backend logic for API endpoints
├─ frontend/
│  ├─ src/
│  │  ├─ components/     # Reusable UI components (buttons, inputs, etc.)
│  │  ├─ App.js          # Main React component to render app UI
│  ├─ public/
├─ .env                   # Environment variables for sensitive data
├─ package.json         
└─ README.md              