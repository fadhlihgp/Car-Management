import { Router } from "express";
import { AuthController } from "./AuthController";

const authRouter = Router()
const authController = new AuthController()

authRouter.route("/auth/login").post(authController.login);
authRouter.route("/auth/register-customer").post(authController.registerCustomer);
authRouter.route("/auth/register-admin").post(authController.registerAdmin);
authRouter.route("/auth/getCurrentUser").get(authController.getCurrentUser);
export default authRouter;