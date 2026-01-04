const {
    createProject,
    deleteProject,
    listProjectByworkspace
} = require('./project.service');

const createProjectController = async (req, res, next) => {
    try{
        const { workspaceId, name, description } = req.body;
        const userId = req.user.id;
        const project = await createProject(workspaceId, userId, name, description);
        res.status(201).json(project);
    }
    catch (error) {
        next(error);
    }
};

const deleteProjectController = async (req, res, next) => {
    try{
        const { projectId } = req.params;
        const userId = req.user.id;
        const project = await deleteProject(projectId, userId);
        res.status(200).json(project);
    }
    catch (error) {
        next(error);
    }
};
const listUserprojectsbyworkspaceController = async (req, res, next) => {
    try {
        const { workspaceId } = req.params;
        const userId = req.user.id;
        const projects = await listProjectByworkspace(userId, workspaceId);
        res.status(200).json(projects);
    }catch (error) {
        next(error);
    }
}
module.exports = {
    createProjectController,
    deleteProjectController,
    listUserprojectsbyworkspaceController
};