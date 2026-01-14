# TeamSync - Real-Time Collaboration Platform

A modern real-time collaboration platform that combines chat and video calls within structured workspaces and channels.

## Features

- 🔐 **Authentication** - JWT-based signup/login
- 🏢 **Workspaces** - Create and manage team workspaces
- 📺 **Channels** - Organize conversations by topic
- 💬 **Real-Time Chat** - Instant messaging with Socket.IO
- 📹 **Video Calls** - WebRTC peer-to-peer video calls (4-6 users)
- 👥 **Presence** - Online/offline status tracking

## Tech Stack

### Backend
- Node.js + Express
- Socket.IO (real-time communication)
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs (password hashing)

### Frontend
- React (Vite)
- Tailwind CSS
- Socket.IO Client
- WebRTC APIs
- Axios (HTTP client)
- React Router DOM

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (running locally or remote instance)
- npm or yarn

## Installation

### 1. Clone the repository
```bash
git clone <repository-url>
cd rise
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create `.env` file:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/teamsync
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### 3. Frontend Setup
```bash
cd frontend
npm install
```

Create `.env` file:
```env
VITE_API_URL=http://localhost:3000
VITE_SOCKET_URL=http://localhost:3000
```

## Running the Application

### Start MongoDB
Make sure MongoDB is running on your system:
```bash
# macOS/Linux
mongod

# Windows (if installed as service)
net start MongoDB
```

### Start Backend Server
```bash
cd backend
npm run dev
```
Server runs on http://localhost:3000

### Start Frontend
```bash
cd frontend
npm run dev
```
Frontend runs on http://localhost:5173

## Project Structure

```
rise/
├── backend/
│   ├── src/
│   │   ├── config/         # Configuration files
│   │   ├── controllers/    # Route controllers
│   │   ├── middlewares/    # Custom middleware
│   │   ├── models/         # Database models
│   │   └── routes/         # API routes
│   ├── server.js           # Main server file
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/     # React components
    │   ├── contexts/       # React contexts
    │   ├── lib/           # Utilities (API, Socket)
    │   ├── pages/         # Page components
    │   └── App.jsx        # Main app component
    └── package.json
```

## Development Status

✅ Project setup complete
⏳ Database models - In progress
⏳ Authentication - Pending
⏳ Workspace management - Pending
⏳ Real-time chat - Pending
⏳ Video calls - Pending

## Contributing

This is a learning/development project. Feel free to contribute!

## License

MIT
