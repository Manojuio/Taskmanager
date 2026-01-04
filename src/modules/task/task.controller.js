const {
    createTask,
    updateTaskStatus
} = require('./task.service');
const createTaskController = async (req, res, next) => {
    try{
        const { projectId, title, description } = req.body;
        const userId = req.user.id;
        const task = await createTask(
            userId, 
            projectId, 
            title, 
            description);
        res.status(201).json(task);
    } catch (error) {
        next(error);
    }
}

const updateTaskStatusController = async (req, res, next) => {
    try{
        const { taskId } = req.params;
        const { status } = req.body;
        const userId = req.user.id;
        const task = await updateTaskStatus(userId, taskId, status);
        res.status(200).json(task);
    } catch (error) {
        next(error);
    }
}       
module.exports = {
    createTaskController,
    updateTaskStatusController
};