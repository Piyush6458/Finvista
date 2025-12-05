import express from 'express';
import userAuth from '../middleware/userAuth.js';
import { getUserData, monthlyBudget, updateMonthlyBudget } from '../controllers/usercontroller.js';

const userRouter = express.Router();

/**
 * @swagger
 * /api/user/get-data:
 *   get:
 *     summary: Get user data
 *     description: Get the data of the currently logged in user.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User data retrieved successfully
 *       500:
 *         description: Server error
 */
userRouter.get('/get-data', userAuth, getUserData);

/**
 * @swagger
 * /api/user/get-monthly-budget:
 *   get:
 *     summary: Get monthly budget
 *     description: Get the monthly budget of the currently logged in user.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Monthly budget retrieved successfully
 *       500:
 *         description: Server error
 */
userRouter.get('/get-monthly-budget',userAuth,monthlyBudget);

/**
 * @swagger
 * /api/user/update-monthly-budget:
 *   post:
 *     summary: Update monthly budget
 *     description: Update the monthly budget of the currently logged in user.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               monthlyBudget:
 *                 type: number
 *     responses:
 *       200:
 *         description: Monthly budget updated successfully
 *       500:
 *         description: Server error
 */
userRouter.post('/update-monthly-budget',userAuth,updateMonthlyBudget);

export default userRouter;