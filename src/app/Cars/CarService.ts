import { NextFunction } from "express";
import { CarRepository } from "./CarRepository";
import { CarModel } from "./CarModel";
import { NotFoundException } from "../../exceptions/NotFoundException";
import { CarRequestDto } from "./CarDto";
const { v4: uuidv4 } = require("uuid");

const carRepo = new CarRepository();

export class CarService {
  async getAll(): Promise<CarModel[]> {
    return await carRepo.getAll();
  }

  async getById(id: string, next: NextFunction): Promise<any> {
    const car = await carRepo.getById(id);
    if (!car) {
      throw new NotFoundException("Data mobil tidak ditemukan");
    } else {
      return car;
    }
  }

  async create(carRequest: CarRequestDto): Promise<CarModel> {
    try {
      const car: Partial<CarModel> = {
        id: uuidv4(),
        name: carRequest.name,
        price: carRequest.price,
        size: carRequest.size,
        picture: carRequest.picture,
        updated: new Date(),
      };
      return await carRepo.create(car);
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async update(id: string, carRequest: CarRequestDto, next: NextFunction): Promise<CarModel> {
    let carUpdate: CarModel = await this.getById(id, next);

    try {
      carUpdate.name = carRequest.name;
      carUpdate.price = carRequest.price;
      carUpdate.size = carRequest.size;
      carUpdate.picture = carRequest.picture ?? carUpdate.picture;
      carUpdate.updated = new Date();

      return await carRepo.update(id, carUpdate);
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async delete(id: string, next: NextFunction): Promise<void> {
    await this.getById(id, next);
    try {
      await carRepo.delete(id);
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}
