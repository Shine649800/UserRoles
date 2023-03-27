var express = require('express');
var router = express.Router();
const pageController = require('../controllers/pageController');
const userController = require('../controllers/userController');
const redirectGuest = require('../middleware/redirectGuest');

router.get('/', redirectGuest, pageController.renderDashboard)
router.get('/accounting', redirectGuest,pageController.renderAccounting);
router.get('/marketing', redirectGuest,pageController.renderMarketing);
router.get('/sales',redirectGuest,pageController.renderSales);
router.get('/hr', redirectGuest,pageController.renderHR);
router.get('/profile', redirectGuest,pageController.viewProfile);

router.get('/register', userController.renderRegistrationForm);
router.post('/register', userController.registerUser);
router.get('/login', userController.renderLoginForm);

router.post('/login', userController.loginUser);
router.get('/logout', userController.logout);
module.exports = router;