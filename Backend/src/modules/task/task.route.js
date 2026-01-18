const express = require('express');
const {
    createTaskController,
    updateTaskStatusController
} = require('./task.controller');
const  authMiddleware  = require('../../middlewares/auth.middleware');

const router = express.Router();

router.post('/', authMiddleware, createTaskController);
router.patch('/:taskId/status', authMiddleware, updateTaskStatusController);

module.exports = router;