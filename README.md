# 📝 Notes App

A full-stack **Notes Management Application** built using **React.js** for the frontend, **Django REST Framework** for the backend, and **PostgreSQL** for persistent storage. The app provides secure user authentication and a sleek UI for managing personal notes effectively.

---


## 🔧 Tech Stack

| Layer      | Technology         |
|------------|--------------------|
| Frontend   | React.js, CSS      |
| Backend    | Django, Django REST Framework |
| Database   | PostgreSQL         |
| Deployment | Choreo (WSO2)      |

---

## ✨ Key Features

- 🔐 User Authentication (Register, Login, Logout)
- 📝 Create, View, and Delete Notes
- 🔔 Notification-based feedback system (no browser alerts)
- 📱 Responsive and clean user interface
- ⚙️ RESTful API integration with secure token-based auth
- 📦 PostgreSQL-backed data persistence

---

## 📁 Project Structure

```bash
notes-app/
│
├── backend/                # Django project (API & business logic)
│   ├── api/                # Django app with models, views, serializers
│   ├── notes_project/      # Project settings and URLs
│   ├── manage.py
│   └── requirements.txt
│
├── frontend/               # React application
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable components (Note, Form, Notification)
│   │   ├── pages/          # Page-level components (Login, Register, Home)
│   │   ├── styles/         # CSS files
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
└── README.md


🛠️ Getting Started

1. Clone the Repository

git clone https://github.com/your-username/notes-app.git
cd notes-app


2. Backend Setup (Django)

cd backend
python -m venv venv
source venv/bin/activate      # On Windows: venv\Scripts\activate
pip install -r requirements.txt

# Configure PostgreSQL settings in notes_project/settings.py

python manage.py migrate
python manage.py runserver


3. Frontend Setup (React)

cd frontend
npm install
npm run dev


### 🔐 Environment Variables

Backend (.env)
Make sure the following variables are configured correctly:

SECRET_KEY=your_secret_key
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_PORT=your_db_port



