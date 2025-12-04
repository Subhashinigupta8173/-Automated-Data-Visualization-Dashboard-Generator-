Subhashini Gupta(Leader),Kuldeep Garg, Sohm Kundu, Anshu Kumari, Krishna

📊 Automated Data Visualization & Dashboard Generator
Upload → Analyze → Visualize — Instantly
This project is a full‑stack web application that automates data analysis.
Users can upload Excel/CSV files, and the system automatically:

✔ Detects column types
✔ Processes the data
✔ Generates charts
✔ Displays an interactive dashboard
✔ Allows filtering and exploration

Built for hackathons, business users & fast insights.

🚀 Features
✅ 1. Upload Data
Upload Excel (.xlsx) or CSV files

Backend converts to structured JSON

Supports large datasets

Error handling for invalid files

✅ 2. Automated Data Processing
Smart type detection:

Numerical → Bar/Line charts

Categorical → Pie/Bar charts

Dates → Line (time‑series) charts

Cleans missing data

Aggregations (Sum, Count, Avg)

✅ 3. Auto‑Generated Visualizations
Line charts

Column/Bar charts

Pie/Donut charts

Real‑time filters refresh all charts

Clean responsive dashboard (React)

✅ 4. User Authentication (Local MongoDB)
Signup / Login (JWT)

Password hashing using bcrypt

Local MongoDB (No cloud database)

✅ 5. Fully Modular Backend
Controllers

Services

Routes

Models

Local DB connection

🗂️ Project Structure
/backend
   /controllers
       analyzeController.js
       uploadController.js
       visualizeController.js
       authController.js
   /routes
       analyzeRoutes.js
       uploadRoutes.js
       visualizeRoutes.js
       authRoutes.js
   /services
       dataTypeInference.js
       chartGenerator.js
       analysisService.js
   /models
       User.js
       UploadedData.js
   /config
       db.js
   server.js

/frontend
   /src
      /components
         FileUpload.jsx
         ChartDisplay.jsx
         Navbar.jsx
         Dashboard.jsx
      /pages
         Login.jsx
         Signup.jsx
         Home.jsx
   App.js
   index.js
🛠️ Tech Stack
Frontend
React.js

Recharts / Chart.js

Axios

CSS / Tailwind

Backend
Node.js

Express.js

Multer (File upload)

XLSX / csv-parser (File parsing)

Mongoose (Local MongoDB)

JWT / bcrypt

Database
MongoDB Local Setup (NOT cloud)

🧑‍🤝‍🧑 Team Roles (Final)
⭐ Subhashini – Backend Developer
File upload (Multer)

Parsing CSV/Excel

Visualization controllers

Data handling logic

README creation

Backend testing

⭐ Kuldeep – Authentication + DB Setup
MongoDB setup

User model

Login / Signup APIs

Password hashing

JWT authentication



⭐ Krishna – Backend Architecture + Support
Folder structure

Routing

Analysis service

Type inference logic

Team coordination

⭐ Soham – Frontend Developer + GitHub Manager
UI pages & styling

API integration

GitHub PR merging & repo handling

⭐ Anshu – Frontend Components
Reusable UI components

Chart components

Upload UI

Page layouts

🔧 Installation & Setup
1. Clone the Repository
git clone https://github.com/Subhashinigupta8173/-Automated-Data-Visualization-Dashboard-Generator-.git
cd Automated-Data-Visualization-Dashboard-Generator
⚙️ Backend Setup
2. Install Backend Dependencies
cd backend
npm install
3. Start Local MongoDB
On Windows:
Install MongoDB Community Server

Start MongoDB service:

net start MongoDB
Default local URL:
mongodb://127.0.0.1:27017/dashboard
4. Start Backend
npm run dev
Backend runs on:
👉 http://localhost:5000

🎨 Frontend Setup
1. Open frontend folder
cd ../frontend
npm install
2. Start Frontend
npm start
Frontend runs on:
👉 http://localhost:3000

🧪 API Endpoints
Upload Data
POST /api/upload
Form-data → file

Analyze Data
POST /api/analyze
Get Visualizations
GET /api/visualize/:fileId
Auth
POST /api/auth/signup
POST /api/auth/login
🐞 Error Handling
Invalid file upload

Wrong format

Missing fields

Authentication failures

Large file handling

🎯 Future Enhancements
Drag-drop dashboard editor

ML-based insight generation

Real-time collaboration

Export dashboard as PDF

🏆 Conclusion
This tool enables instant insights from raw data with zero manual effort.
A fast, clean, automated pipeline:

Upload → Analyze → Visualize — Done.
