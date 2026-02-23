# 🤫 Anonymous Confession Wall

A full-stack web application that allows users to share anonymous confessions securely. Users can post confessions, react to others' posts, and engage through comments — all while maintaining anonymity.


## ✨ Features

- **Anonymous Confessions**: Share your thoughts without revealing your identity
- **Secret Code Protection**: Each confession is protected by a secret code for editing/deleting
- **Google Authentication**: Secure login via Google OAuth 2.0
- **Reactions**: Express yourself with like, dislike, love, and laugh reactions
- **Comments**: Engage with confessions through the comment system
- **Dark Mode**: Toggle between light and dark themes for comfortable viewing
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern UI library
- **Vite** - Next-generation frontend build tool
- **TailwindCSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Passport.js** - Authentication middleware (Google OAuth 2.0)
- **Express Session** - Session management

## 📁 Project Structure

```
ANONYMOUS-CONFESSION-WALL/
├── backend/
│   ├── models/
│   │   └── confession.js      # Confession & Comment schemas
│   ├── routes/
│   │   └── confessionRoutes.js # API endpoints
│   ├── server.js              # Express server setup
│   ├── package.json
│   └── .env                   # Environment variables
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ConfessionCard.jsx   # Individual confession display
│   │   │   ├── ConfessionForm.jsx   # Create new confession
│   │   │   ├── Footer.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Navbar.jsx
│   │   ├── configs/
│   │   │   └── api.js         # API configuration
│   │   ├── context/
│   │   │   ├── AuthContext.jsx    # Authentication state
│   │   │   └── ThemeContext.jsx   # Dark mode state
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- Google Cloud Console account (for OAuth credentials)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/anonymous-confession-wall.git
   cd anonymous-confession-wall
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   ```

3. **Configure Environment Variables**
   
   Create a `.env` file in the `backend` directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   SESSION_SECRET=your_session_secret
   PORT=5000
   ```

4. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm start
   ```
   The server will run on `http://localhost:5000`

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

## 🔑 Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to **APIs & Services** > **Credentials**
4. Click **Create Credentials** > **OAuth 2.0 Client IDs**
5. Set the application type to **Web application**
6. Add authorized redirect URI: `http://localhost:5000/auth/google/callback`
7. Copy the Client ID and Client Secret to your `.env` file

## 📡 API Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/confessions` | Get all confessions | No |
| POST | `/confessions` | Create a new confession | Yes |
| PUT | `/confessions/:id` | Edit a confession | Yes |
| DELETE | `/confessions/:id` | Delete a confession | Yes |
| POST | `/confessions/:id/react` | Add reaction to a confession | Yes |
| POST | `/confessions/:id/comments` | Add comment to a confession | Yes |
| GET | `/auth/google` | Initiate Google OAuth | No |
| GET | `/auth/google/callback` | OAuth callback | No |
| GET | `/auth/user` | Get current user | No |
| POST | `/auth/logout` | Logout user | Yes |

## 🎨 Screenshots

*Coming soon...*

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 👤 Pramod Pandit

Made with ❤️ for anonymous expression