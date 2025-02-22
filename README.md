Patient Appointment and Prescription Management System

Overview

The Patient Appointment and Prescription Management System is a React-based web application designed to streamline appointment scheduling and prescription management. It provides a seamless interface for both patients and doctors to manage healthcare interactions efficiently.


---

Features

✅ Patient Registration & Login (Secure authentication)
✅ Appointment Booking & Scheduling (Easy appointment management)
✅ Doctor Dashboard (Manage patients & prescriptions)
✅ Prescription Management (Doctors can issue and track prescriptions)
✅ Real-Time Notifications (Stay updated on appointment changes)
✅ Role-Based Access Control (Different features for patients & doctors)


---

Tech Stack

Frontend: React, Redux (if used), TailwindCSS/Bootstrap

Backend: Node.js with Express.js (if applicable)

Database: MongoDB / PostgreSQL / MySQL (depending on your setup)

Authentication: JWT / Firebase Auth / OAuth



---

Installation

1️⃣ Clone the repository:

git clone https://github.com/soumyasubhadarshini/Patient-Appointment-and-Prescription-Management-System.git
cd Patient-Appointment-and-Prescription-Management-System

2️⃣ Install dependencies for the client:

cd client
npm install

3️⃣ Run the React application:

npm start

4️⃣ (If backend exists) Install dependencies for the server:

cd ../server
npm install

5️⃣ Start the backend server:

npm run dev


---

API Documentation

If the project includes a backend, here are some example API endpoints:

Authentication APIs

🔹 Register a user:

POST /api/auth/register

Request Body:

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword"
}

Response:

{
  "message": "User registered successfully",
  "token": "your-jwt-token"
}

🔹 Login user:

POST /api/auth/login

Request Body:

{
  "email": "john@example.com",
  "password": "securepassword"
}

Response:

{
  "message": "Login successful",
  "token": "your-jwt-token"
}

Appointment APIs

🔹 Book an appointment:

POST /api/appointments/book

Request Body:

{
  "patientId": "12345",
  "doctorId": "67890",
  "date": "2025-02-25",
  "time": "10:00 AM"
}

Response:

{
  "message": "Appointment booked successfully",
  "appointmentId": "abcdef"
}

🔹 Get doctor’s appointments:

GET /api/appointments/doctor/67890

Response:

[
  {
    "appointmentId": "abcdef",
    "patientName": "John Doe",
    "date": "2025-02-25",
    "time": "10:00 AM"
  }
]


---

Deployment

Frontend Deployment (React)

Deploy to Vercel (Recommended)

1. Install Vercel CLI:

npm install -g vercel


2. Deploy your project:

vercel



Deploy to Netlify

1. Install Netlify CLI:

npm install -g netlify-cli


2. Deploy your project:

netlify deploy --prod



Backend Deployment (If using Node.js & Express)

Deploy to Render

1. Push your backend code to GitHub.


2. Go to Render, create a new web service.


3. Connect your GitHub repository and deploy.



Deploy to Railway

1. Sign up at Railway.app.


2. Create a new project and connect your GitHub repo.


3. Set environment variables and deploy.




---

Contributing

🚀 Contributions are welcome! Feel free to fork the repository, create a new branch, and submit a pull request.


---

License

📜 This project is licensed under the MIT License.
