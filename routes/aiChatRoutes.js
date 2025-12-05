// server/routes/aiChatRoutes.js

import express from 'express';
import { chatWithAI, getAIChatSuggestions, getChatLimits, getChatHistory, getDailyInsight } from '../controllers/aiChatController.js';

import userAuth from '../middleware/userAuth.js';
import { getUserData } from '../controllers/usercontroller.js';
const Chatrouter = express.Router();

/**
 * @swagger
 * /api/userchat/chat:
 *   post:
 *     summary: Chat with AI
 *     description: Send a message to the AI and get a response.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *     responses:
 *       200:
 *         description: AI response retrieved successfully
 *       500:
 *         description: Server error
 */
Chatrouter.post('/chat', userAuth, chatWithAI);

/**
 * @swagger
 * /api/userchat/suggestions:
 *   get:
 *     summary: Get AI chat suggestions
 *     description: Get a list of suggested prompts for the AI chat.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Suggestions retrieved successfully
 *       500:
 *         description: Server error
 */
Chatrouter.get('/suggestions', userAuth, getAIChatSuggestions);

/**
 * @swagger
 * /api/userchat/limits:
 *   get:
 *     summary: Get chat limits
 *     description: Get the user's chat limits.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Chat limits retrieved successfully
 *       500:
 *         description: Server error
 */
Chatrouter.get('/limits',userAuth,getChatLimits);

/**
 * @swagger
 * /api/userchat/history:
 *   get:
 *     summary: Get chat history
 *     description: Get the user's chat history.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Chat history retrieved successfully
 *       500:
 *         description: Server error
 */
Chatrouter.get("/history", userAuth, getChatHistory);

/**
 * @swagger
 * /api/userchat/get-daily-insight:
 *   get:
 *     summary: Get daily insight
 *     description: Get a daily financial insight for the user.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Daily insight retrieved successfully
 *       500:
 *         description: Server error
 */
Chatrouter.get('/get-daily-insight', userAuth, getDailyInsight);

export default Chatrouter;