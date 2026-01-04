const express = require('express');
const authMiddleware = require('../../middlewares/auth.middleware');
const {
    createWorkspacecontroller,
    addAdmincontroller,
    addMembercontroller,
    removeMembercontroller,
    listUserWorkspacesController
} = require('./workspace.controller');

const router = express.Router();    

router.post('/', authMiddleware, createWorkspacecontroller);
router.post('/:workspaceId/admins', authMiddleware, addAdmincontroller);
router.post('/:workspaceId/members', authMiddleware, addMembercontroller);
router.delete('/:workspaceId/members', authMiddleware, removeMembercontroller);
router.get('/', authMiddleware, listUserWorkspacesController);

module.exports = router;