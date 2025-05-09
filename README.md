# 🌦️ Weather App

A **simple, mobile-friendly weather application** built using **React (Vite)** for the frontend and **Node.js (Express)** for the backend. It fetches real-time weather data using the OpenWeatherMap API and allows users to view and filter historical weather records stored in **MongoDB**.

---

## ✨ Features

- 🔍 **City-Based Weather Search** — Get current weather data by selecting from predefined cities.
- 🧾 **Weather Data Storage** — Save weather results in MongoDB for historical analysis.
- 📅 **Historical View with Filters** — Filter past weather data by city and date (max 30-day range).
- 🚫 **Robust Error Handling** — Handles API failures and invalid input gracefully.
- 📱 **Fully Responsive Design** — Clean, mobile-first UI using Tailwind CSS.

---

## 🧱 Tech Stack

### Frontend
- ✅ React + Vite
- 🎨 Tailwind CSS
- 📡 Axios (API communication)

### Backend
- 🔧 Node.js + Express
- 🌱 MongoDB + Mongoose
- 🛠️ Dotenv (for environment variables)
- 🌍 Axios (for OpenWeatherMap API requests)

---

## 🤖 AI-Assisted Development

Development was accelerated using AI for:
- 🔧 **Frontend Layouts** with Tailwind CSS
- 🛣️ **Backend API Structure & Routing**
- 📊 **MongoDB Query Optimization** for historical filters

---

## ⚙️ Prerequisites

- Node.js & npm installed
- MongoDB (local or via MongoDB Atlas)
- Git

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/CalypsoJeff/WeatherApp.git
cd weather-app
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the `server/` folder:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/weatherDB
OPENWEATHER_API_KEY=your_openweather_api_key_here
```

Start the backend server:

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

---

## ✅ Final Notes

- Make sure your MongoDB server is running (or MongoDB Atlas is connected).
- Replace `your_openweather_api_key_here` in the `.env` file with your actual API key from OpenWeatherMap.
- The application will be accessible at `http://localhost:5173` (or whatever port Vite is configured to).

---

## 📬 Feedback & Contributions

Feel free to fork this project, submit pull requests, or open issues. Suggestions are always welcome!
