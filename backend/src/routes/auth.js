import express from 'express';
import {
  signup,
  login,
  getMe,
  updateProfile,
  logout,
} from '../controllers/authController.js';
import { authenticate } from '../middlewares/auth.js';
import {
  validateSignup,
  validateLogin,
  validateProfileUpdate,
} from '../middlewares/validation.js';

const router = express.Router();

// Public routes
router.post('/signup', validateSignup, signup);
router.post('/login', validateLogin, login);

// Protected routes (require authentication)
router.get('/me', authenticate, getMe);
router.put('/profile', authenticate, validateProfileUpdate, updateProfile);
router.post('/logout', authenticate, logout);

export default router;
