# Real-Time Collaboration & Task Management Backend

A backend-heavy system for managing workspaces, projects, and tasks with authentication, role-based access control, and clean backend architecture.

---

## Features

### Authentication
- User registration and login
- JWT-based authentication
- Protected routes using middleware

### Workspace Management
- Create workspaces
- Ownership model (Owner, Admin, Member)
- List workspaces a user belongs to

### Project Management
- Projects inside workspaces
- Only Owner/Admin can create or delete projects
- List projects by workspace

### Task Management
- Tasks inside projects
- Status flow: `todo → in_progress → done`
- Only workspace members can create tasks
- Only assignee or Owner/Admin can update task status

---

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Thunder Client for testing

---

## Project Structure
src/
├── modules/
│ ├── auth/
│ ├── workspace/
│ ├── project/
│ ├── task/
│ └── utils/
├── middlewares/
├── config/
├── app.js
└── server.js


---

## Roles & Permissions

- **Owner**
  - Full control over workspace
  - Manage admins, members, and projects
- **Admin**
  - Manage projects and tasks
- **Member**
  - Create and update assigned tasks

> Ownership and roles are enforced server-side using JWT.  


---

## API Endpoints

### Auth

POST /api/auth/register
POST /api/auth/login


### Workspaces


POST /api/workspaces
GET /api/workspaces


### Projects


POST /api/projects
GET /api/projects/workspace/:workspaceId
DELETE /api/projects/:projectId


### Tasks


POST /api/tasks
PATCH /api/tasks/:taskId/status


All protected routes require:


Authorization: Bearer <JWT_TOKEN>


---

## Environment Variables

Create a `.env` file:



PORT=3000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret


---

## Testing

APIs are tested using Thunder Client in the following order:
1. Register
2. Login
3. Create workspace
4. Create project
5. Create task
6. Update task status

---

## Future Improvements

- Task assignment
- Task comments
- Real-time updates with Socket.io
- Pagination and filtering
- Deployment

---

## Author

Manoj

---

## License

For learning and demonstration purposes.

