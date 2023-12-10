import { Router } from "express";
import CarController from "../controllers/CarController";

const carRouter = Router()
const controller = new CarController();

carRouter.route("/car").get(controller.getAll).post(controller.create)
carRouter.route('/car/:id').put(controller.update).get(controller.getById);
carRouter.route('/car/delete/:id').put(controller.delete);

export default carRouter;
