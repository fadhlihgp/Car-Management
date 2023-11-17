import { Request, Response, NextFunction } from "express";
import { CarRequestDto } from "./CarDto";
import { CarService } from "./CarService";
import { JwtHandler } from "../../security/JwtHandler";

const carService = new CarService();
const jwtHandler = new JwtHandler();
class CarController {
  // private jwtHandler: JwtHandler;

  constructor() {
    // jwtHandler = new JwtHandler();
  }

  async getAll(req: Request, res: Response, _next: NextFunction): Promise<void> {
    const { name = "", size = "", availability = "" } = req.query || {};

    let cars = await carService.getAll(name.toString(), size.toString(), availability.toString());
    res.status(200).json({
      message: "Berhasil mendapatkan data mobil",
      data: cars,
    });
  }

  async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id } = req.params;
    try {
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
    const tokenValue = jwtHandler.getTokenValue(req);
    try {
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
    const tokenValue = jwtHandler.getTokenValue(req);
    try {
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
    const tokenValue = jwtHandler.getTokenValue(req);
    try {
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
