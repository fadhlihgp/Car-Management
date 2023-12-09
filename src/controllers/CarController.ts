import { Request, Response, NextFunction } from "express";
import { CarRequestDto } from "../dtos/CarDto";
import { CarService } from "../services/CarService";
import { JwtHandler } from "../security/JwtHandler";

const carService = new CarService();
const jwtHandler = new JwtHandler();
class CarController {
  async getAll(req: Request, res: Response, _next: NextFunction): Promise<void> {
    const { name = "", size = "", availability = "" } = req.query || {};
    try {
      // jwtHandler.getTokenValue(req);
      let cars = await carService.getAll(name.toString(), size.toString(), availability.toString());
      res.status(200).json({
        message: "Berhasil mendapatkan data mobil",
        data: cars,
      });
    } catch (err) {
      _next(err);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id } = req.params;
    try {
      // jwtHandler.getTokenValue(req);
      const result = await carService.getById(id);
      res.status(200).json({
        message: "Berhasil mendapatkan data mobil",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    const body: CarRequestDto = req.body;
    try {
      const tokenValue = jwtHandler.getTokenValue(req);
      res.status(201).json({
        message: "Data berhasil disimpan",
        data: await carService.create(body, tokenValue.AccountId, tokenValue.RoleId),
      });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id } = req.params;
    try {
      const tokenValue = jwtHandler.getTokenValue(req);
      const body: CarRequestDto = req.body;
      res.status(200).json({
        message: "Data berhasil disimpan",
        data: await carService.update(id, body, tokenValue.AccountId, tokenValue.RoleId),
      });
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id } = req.params;
    try {
      const tokenValue = jwtHandler.getTokenValue(req);
      await carService.delete(id, tokenValue.AccountId, tokenValue.RoleId);
      res.status(200).json({
        message: "Data berhasil dihapus",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default CarController;
