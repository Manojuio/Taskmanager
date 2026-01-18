const express = require('express');
const cors = require('cors');

const authRoutes = require('./modules/auth/auth.route');
const { errorHandler } = require('./middlewares/error.middleware');
const workspaceRoutes = require('./modules/workspace/workspace.route');
const projectRoutes = require('./modules/project/project.route');
const taskRoutes = require('./modules/task/task.route');
const env = require('./modules/config/env');
const app = express();


app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

app.use('/api/auth', authRoutes); 
app.use('/api/workspaces', workspaceRoutes); 
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

app.use(errorHandler);

module.exports = app;