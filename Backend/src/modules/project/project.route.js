const express = require('express');

const authMiddleware = require('../../middlewares/auth.middleware');
const {
    createProjectController,
    listUserprojectsbyworkspaceController,
    deleteProjectController
} = require('./project.controller');
const router = express.Router();

router.post('/', authMiddleware, createProjectController);
router.delete('/:projectId', authMiddleware, deleteProjectController);
router.get('/workspace/:workspaceId', authMiddleware, listUserprojectsbyworkspaceController);

module.exports = router;