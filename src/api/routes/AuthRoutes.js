const express = require('express');
const authControllers = require('../controllers/AuthControllers');

const router = express.Router();

router.post('/register', authControllers.register);
router.post('/login', authControllers.login);

module.exports = router;
