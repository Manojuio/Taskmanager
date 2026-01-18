const {
    createWorkspace,
    addAdmin,
    addMember,
    removeMember,
    listUserWorkspaces
} = require('./workspace.service'); 

const createWorkspacecontroller = async (req, res, next) => {
    try{

        console.log("Request Body:", req.user); // Debugging line
        const { name }= req.body;
        const userId = req.user.id;
        console.log("Creating workspace for user ID:", userId); // Debugging line
        const workspace = await createWorkspace(userId, name);
        res.status(201).json(workspace);
    } catch (error) {
        next(error);
    }
}

const addAdmincontroller = async (req,res,next)=>{
    try{
        const { workspaceId, adminId } = req.body;
        const ownerId = req.user.id;
        const workspace = await addAdmin(workspaceId, ownerId, adminId);
        res.status(200).json(workspace);
    } catch (error) {
        next(error);
    }
}

const addMembercontroller = async (req,res,next)=>{
    try{
        const { workspaceId, memberId } = req.body;
        const userId = req.user.id;
        const workspace = await addMember(workspaceId, userId, memberId);
        res.status(200).json(workspace);
    } catch (error) {
        next(error);
    }
}
const removeMembercontroller = async (req,res,next)=>{
    try{
        const { workspaceId, memberId } = req.body; 
        const ownerId = req.user.id;
        const workspace = await removeMember(workspaceId, ownerId, memberId);
        res.status(200).json(workspace);
    } catch (error) {
        next(error);
    }
}

const listUserWorkspacesController = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const workspaces = await listUserWorkspaces(userId);
        res.status(200).json(workspaces);
    } catch (error) {
        next(error);
    }
};
module.exports = {
    createWorkspacecontroller,
    addAdmincontroller,
    addMembercontroller,
    removeMembercontroller,
    listUserWorkspacesController
};