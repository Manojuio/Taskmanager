const Task = require('./task.model');
const Project = require('../project/project.model');
const Workspace = require('../workspace/workspace.model');

const createTask = async (userId, projectId, title, description="") => {
    const project = await Project.findById(projectId);
    if (!project) {
        throw new Error('Project not found');
    }
    const workspace = await Workspace.findById(project.workspace);
    if(!workspace) throw new Error('Workspace not found');

    const isMember = 
        workspace.owner.toString() === userId ||
        workspace.admins.includes(userId) ||
        workspace.members.includes(userId);

    if (!isMember) {
        throw new Error('User is not a member of the workspace');
    }
    const task = await Task.create(
        {
            title,
            description,
            project: projectId,
            createdBy: userId
        }
    );
    return task;

};

const updateTaskStatus = async (userId, taskId, status) => {
    const task = await Task.findById(taskId);
    if (!task) {
        throw new Error('Task not found');
    }
    const project = await Project.findById(task.project);
    const workspace = await Workspace.findById(project.workspace);

    const isOwnerOrAdmin = 
        workspace.owner.toString() === userId ||
        workspace.admins.includes(userId);

    const isAssignee = task.assignedTo && task.assignedTo.toString() === userId;

    if (!isOwnerOrAdmin && !isAssignee) {
        throw new Error('User is not authorized to update this task');
    }
    task.status = status;
    await task.save();
    return task;
}
module.exports = {
    createTask,
    updateTaskStatus
};