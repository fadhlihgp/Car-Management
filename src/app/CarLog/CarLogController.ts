import { Request, Response, NextFunction } from "express";
import {CarLogService} from "./CarLogService";
import JwtHandler from "../../security/JwtHandler";

const carLogService = new CarLogService();
const jwtHandler = new JwtHandler();
export class CarLogController {

    async getAll(req: Request, res: Response, next: NextFunction): Promise<void>{
        try {
            const carLogs = await carLogService.getAllCarLogs(jwtHandler.getTokenValue(req).RoleId);
            res.status(200).json({
                message: "Berhasil mendapatkan data car log",
                data: carLogs
            })
        } catch (err) {
            next(err);
        }
    }
}
