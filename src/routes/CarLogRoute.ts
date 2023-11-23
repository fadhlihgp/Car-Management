import {Router} from "express";
import {CarLogController} from "../controllers/CarLogController";

const carLogRoute = Router();
const controller = new CarLogController();

carLogRoute.route("/car-log").get(controller.getAll);
export default carLogRoute
