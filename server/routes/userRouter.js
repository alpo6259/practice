const { Router } = require('express');
const userController = require('../controllers/userController');

const userRouter = Router();

userRouter.get('/id/transactions', userController.getTransactions);

module.exports = userRouter;
