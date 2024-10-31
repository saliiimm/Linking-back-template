const express = require('express');
const userController = require('../controllers/UserController');
const authenticateToken = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', authenticateToken, userController.getUsers);
router.post('/', userController.createUser);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
