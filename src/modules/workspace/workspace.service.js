const Workspace = require('./workspace.model');


const createWorkspace = async (userId, name) => {
    const workspace = await Workspace.create({
        name,
        owner:userId,
        admins:[],
        members:[]
    });
    return workspace;
}

const addAdmin = async (workspaceId, ownerId, adminId) => {
    const workspace = await Workspace.findById(workspaceId);
    if (!workspace) {
        throw new Error('Workspace not found');
    }
    if (workspace.owner.toString() !== ownerId) {
        throw new Error('Only owner can add admins');
    }
    if(workspace.admins.includes(adminId)){
        throw new Error('User is already an admin');
    }
    workspace.admins.push(adminId);
    await workspace.save();
    return workspace;
}

const addMember = async (workspaceId, userId, memberId) => {
    const workspace = await Workspace.findById(workspaceId);
    if (!workspace) {
        throw new Error('Workspace not found');
    }
    const isOwner = workspace.owner.toString() === userId;
    const isAdmin = workspace.admins.includes(userId);
    if(!isOwner && !isAdmin){
        throw new Error('Only owner or admins can add members');
    }
    if(workspace.members.includes(memberId)){
        throw new Error('User is already a member');
    }
    workspace.members.push(memberId);
    await workspace.save();
    return workspace;
}

const removeMember = async (workspaceId, ownerId, memberId) => {
    const workspace = await Workspace.findById(workspaceId);
    if (!workspace) {
        throw new Error('Workspace not found');
    }
    if(workspace.owner.toString() !== ownerId){
        throw new Error('Only owner can remove members');
    }
    workspace.admins = workspace.admins.filter(id => id.toString() !== memberId);
    workspace.members = workspace.members.filter(id => id.toString() !== memberId);
    await workspace.save();
    return workspace;
};

const listUserWorkspaces = async (userId) => {
    const workspaces = await Workspace.find({
        $or: [
            { owner: userId },
            { admins: userId},
            { members: userId } 
        ]});
    return workspaces;
}

module.exports ={
    createWorkspace,
    addAdmin,
    addMember,
    removeMember,
    listUserWorkspaces
};