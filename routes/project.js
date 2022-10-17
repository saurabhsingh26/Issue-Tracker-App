const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project_controller');

router.post('/create', projectController.createProject);
router.get('/:id', projectController.viewProject);
router.post('/:id', projectController.createIssue);

module.exports = router;
