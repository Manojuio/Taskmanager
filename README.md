
# Taskmanager – Full Stack Application

A full-stack task and project management application with authentication, workspaces, projects, and tasks.

Built to practice real-world backend + frontend integration.

---

## Features

### Backend
- JWT-based authentication
- Workspace management with role-based access
- Projects inside workspaces
- Task management with status flow: `todo → in_progress → done`
- Protected REST APIs
- Modular Express architecture

### Frontend
- React (Vite)
- Axios for API communication
- Authentication forms (login / register)
- UI-driven task and project management
- Environment-based configuration

---

## Tech Stack

| Layer | Technology |
|------|-----------|
| Frontend | React, Vite, Axios |
| Backend | Node.js, Express.js |
| Database | MongoDB (Mongoose) |
| Auth | JWT |
| Tools | npm |

---

## Project Structure
Taskmanager/ ├── backend/ │   ├── src/ │   │   ├── modules/ │   │   ├── middlewares/ │   │   ├── config/ │   │   ├── app.js │   │   └── server.js │   ├── package.json │   └── .env │ ├── frontend/ │   ├── src/ │   ├── index.html │   ├── vite.config.js │   └── package.json │ └── README.md
Copy code

---

## Prerequisites

- Node.js (v18+)
- MongoDB (local or Atlas)
- npm

---

## Setup & Run

### 1. Clone Repository

```bash
git clone https://github.com/Manojuio/Taskmanager.git
cd Taskmanager
2. Backend Setup
Copy code
Bash
cd backend
npm install
Create .env file:
Copy code
Env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Start backend:
Copy code
Bash
npm start
Backend URL:
Copy code

http://localhost:5000
3. Frontend Setup
Copy code
Bash
cd ../frontend
npm install
npm run dev
Frontend URL:
Copy code

http://localhost:5173
Application Flow (Frontend Driven)
User registers or logs in via UI
JWT token is stored on the client
User creates a workspace
User creates projects inside workspace
User creates and manages tasks via UI
Frontend communicates with backend APIs securely
Frontend ↔ Backend Integration
Frontend uses Axios to communicate with backend:
Copy code

http://localhost:5000/api
Example:
Copy code
Js
axios.get("http://localhost:5000/api/tasks");
CORS is enabled on the backend to allow frontend requests.
API Overview (Used Internally by Frontend)
Auth
POST /api/auth/register
POST /api/auth/login
Workspaces
POST /api/workspaces
GET /api/workspaces
Projects
POST /api/projects
GET /api/projects/workspace/:workspaceId
DELETE /api/projects/:projectId
Tasks
POST /api/tasks
PATCH /api/tasks/:taskId/status
All protected routes require:
Copy code

Authorization: Bearer <JWT_TOKEN>
Future Improvements
Task assignment to users
Task comments
Real-time updates (Socket.io)
Pagination & filtering
API documentation (Swagger)
Deployment (Render / Vercel)
License
For learning and demonstration purposes.
Author
Manoj
Computer Science student
Focused on full-stack development
Copy code

---

### Final reality check

Now the README **matches the architecture**.  
Next non-negotiables if you want this to matter:

1. `.env.example`
2. Screenshots of UI
3. Deployed URL

Skip those → still a student project.  
Do those → internship-ready.

