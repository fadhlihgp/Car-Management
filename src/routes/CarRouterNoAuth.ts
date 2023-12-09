import { Router } from "express";
import CarController from "../controllers/CarController";

const carRouterNoAuth = Router();
const controller = new CarController();

carRouterNoAuth.route("/no-auth/car").get(controller.getAll);
carRouterNoAuth.route("/no-auth/car/:id").get(controller.getById);

export default carRouterNoAuth;
