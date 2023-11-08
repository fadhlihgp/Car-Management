import { NotFoundException } from "../../exceptions/NotFoundException";
import { Repository } from "../Repositories/Repository";
import { CarTypeReqDto } from "./CarTypeDto";
import { CarTypeModel } from "./CarTypeModel";

export class CarTypeService {
    private carTypeRepo: Repository<CarTypeModel>;
    constructor() {
        this.carTypeRepo = new Repository(CarTypeModel);
    }

    async getAll(): Promise<CarTypeModel[]> {
        return await this.carTypeRepo.findAll();
    }

    async getById(id: string): Promise<CarTypeModel> {
        const carBrand = await this.carTypeRepo.findById(id);
        if (!carBrand) throw new NotFoundException("Data car brand tidak ditemukan");
        return carBrand;
    }

    async create(carBrandReq: CarTypeReqDto): Promise<CarTypeModel> {
        const brand: Partial<CarTypeModel> = {
            name: carBrandReq.name
        }
        return await this.carTypeRepo.save(brand);
    }

    async update(id: string, carBrandReq: CarTypeReqDto): Promise<CarTypeModel> {
        let carBrand = await this.getById(id);
        carBrand.name = carBrandReq.name;
        return await this.carTypeRepo.update(id, carBrand);
    }
}