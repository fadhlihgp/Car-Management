import { Request, Response, NextFunction } from "express";
import { CarModel } from "./CarModel";

export class CarRepository {

    async getAll(size?: string, name?: string): Promise<CarModel[]> {
        return await CarModel.query();
    }

    async getById(id: string): Promise<CarModel | undefined> {
        return await CarModel.query().findById(id);
    }

    async filterBySize(size: string): Promise<CarModel[]> {
        return await CarModel.query().where('size', 'like', `%${size}%`).select();
    }

    async filterByName(name: string): Promise<CarModel[]> {
        return await CarModel.query().where('name', 'like', `%${name}%`).select();
    }

    async create(car: Partial<CarModel>): Promise<CarModel> {
        return await CarModel.query().insert(car);
    }

    async update(id: string, car: Partial<CarModel>): Promise<CarModel> {
        const updatedCar = await CarModel.query().patchAndFetchById(id, car);
        return updatedCar;
    }

    async delete(id: string): Promise<void> {
        await CarModel.query().deleteById(id);
    }
}