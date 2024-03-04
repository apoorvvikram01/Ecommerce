import express from 'express';
import {registerController,loginController,testController} from "../controllers/authController.js";
import {isAdmin, requireSignIn} from "../middlewares/authMiddleware.js"
//router object
const router = express.Router();

//routing 
//Register || Method (Post)
export  const authRoutes = router.post('/register',registerController);

//Login || Method (Post)
export const loginRoutes = router.post('/login',loginController);

//test route
router.get('/test',requireSignIn,isAdmin, testController);

export default router

