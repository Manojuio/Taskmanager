const Project = require('./project.model');
const Workspace = require('../workspace/workspace.model');



const listProjectByworkspace = async (userId,workspaceId) => {
    const workspace = await Workspace.findById(workspaceId);
    if (!workspace) {
        throw new Error('Workspace not found');
    }
    const isMember = workspace.members.includes(userId) 
    || workspace.admins.includes(userId) 
    || workspace.owner.toString() === userId;
    if(!isMember){
        throw new Error('Only workspace members can view projects');
    }
    const projects = await Project.find({ workspace: workspaceId });
    return projects;
}



const createProject = async (workspaceId, userId, name, description) => {
    const workspace = await Workspace.findById(workspaceId);
    if (!workspace) {
        throw new Error('Workspace not found');
    }
    const isOwner = workspace.owner.toString() === userId;
    const isAdmin = workspace.admins.includes(userId);

    if(!isOwner && !isAdmin){
        throw new Error('Only owner or admins can create projects');
    }
   
    const project = await Project.create({ name, description, workspace: workspaceId, createdBy: userId });
    return project;
};

const  deleteProject = async (projectId, userId) => {
    const project = await Project.findById(projectId);
    if (!project) {
        throw new Error('Project not found');
    }
    const workspace = await Workspace.findById(project.workspace);
    if (!workspace) {
        throw new Error('Workspace not found');
    }
    const isOwner = workspace.owner.toString() === userId;
    const isAdmin = workspace.admins.includes(userId);
    if(!isOwner && !isAdmin){
        throw new Error('Only owner or admins can delete projects');
    }
    await project.deleteOne();
    return { message: 'Project deleted successfully' };
}

module.exports = {
    createProject,
    deleteProject,
    listProjectByworkspace
};