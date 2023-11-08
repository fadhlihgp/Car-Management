import { NextFunction } from "express";
import { CarRepository } from "./CarRepository";
import { CarModel } from "./CarModel";
import { NotFoundException } from "../../exceptions/NotFoundException";
import { CarRequestDto } from "./CarDto";
import { Repository } from "../Repositories/Repository";
const { v4: uuidv4 } = require("uuid");

const carRepo: Repository<CarModel> = new Repository(CarModel);

export class CarService {
  async getAll(): Promise<CarModel[]> {
    
    const criteria = {
      is_deleted: false
    }

    return await carRepo.findAllWithCriteria(criteria);
  }

  async getById(id: string, next: NextFunction): Promise<any> {
    const car = await carRepo.findById(id);
    if (!car) {
      throw new NotFoundException("Data mobil tidak ditemukan");
    } else {
      return car;
    }
  }

  async create(carRequest: CarRequestDto): Promise<CarModel> {
    try {
      const car: Partial<CarModel> = {
        name: carRequest.name,
        price: carRequest.price,
        size: carRequest.size,
        picture_url: carRequest.picture ?? ""
      };
      return await carRepo.save(car);
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
      carUpdate.picture_url = carRequest.picture ?? carUpdate.picture_url;
      carUpdate.updated_at = new Date();

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
