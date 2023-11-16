import { CarModel } from "./CarModel";
import { NotFoundException } from "../../exceptions/NotFoundException";
import { CarRequestDto } from "./CarDto";
import { Repository } from "../Repositories/Repository";
import executeTransactionAsync from "../Repositories/ExecuteTransactionAsync";
import { parsingTime } from "../../helpers/ParsingTime";
import { UnauthorizedException } from "../../exceptions/UnauthorizedException";
const { v4: uuidv4 } = require("uuid");

let currTime = new Date();
currTime.setHours(currTime.getHours() + 7);
export class CarService {
  private carRepo: Repository<CarModel>;

  constructor() {
    this.carRepo = new Repository(CarModel);
  }

  async getAll(name?: string, size?: string, availability?: string): Promise<CarModel[]> {
    const searchPattern = new RegExp(name?.toString() || "", "i");
    const isAvailable = availability?.toLowerCase() == "true";

    const criteria = {
      isDeleted: false,
    };

    let filterParams = [
      { filterName: name, isEmpty: !name, condition: (car: CarModel) => searchPattern.test(car.name) },
      {
        filterName: size,
        isEmpty: !size,
        condition: (car: CarModel) => car.size.toUpperCase() === size?.toString().toUpperCase(),
      },
      {
        filterName: availability,
        isEmpty: !availability,
        condition: (car: CarModel) => car.availability === isAvailable,
      },
    ];

    let cars = await this.carRepo.findAllWithCriteriaAndJoin(criteria, ["carBrand", "carTransmission", "carType", "createdBy", "editedBy", "deletedBy"]);
    for (const filter of filterParams) {
      if (!filter.isEmpty) {
        cars = cars.filter(filter.condition);
      }
    }

    return cars;
  }

  async getById(id: string): Promise<CarModel> {
    const criteria = {
      id: id,
      isDeleted: false,
    };

    const car = await this.carRepo.findWithJoin(criteria, ["carBrand", "carTransmission", "carType", "createdBy", "editedBy", "deletedBy"]);
    if (!car) {
      throw new NotFoundException("Data mobil tidak ditemukan");
    } else {
      return car;
    }
  }

  async create(carRequest: CarRequestDto, accountId: string, roleId: string): Promise<CarModel> {
    if (roleId == "3") throw new UnauthorizedException("Akses ditolak");

    let availableTime = currTime;
    if (carRequest.availableAt) {
      availableTime = new Date(carRequest.availableAt);
      availableTime.setHours(availableTime.getHours() + 7);
    }
    const result = await executeTransactionAsync(async () => {
      const car: Partial<CarModel> = {
        id: uuidv4(),
        name: carRequest.name,
        price: carRequest.price,
        size: carRequest.size,
        pictureUrl: carRequest.pictureUrl ?? "",
        year: carRequest.year,
        availability: carRequest.availability,
        capacity: carRequest.capacity,
        description: carRequest.description,
        availableAt: availableTime,
        createdAt: parsingTime(new Date()),
        createdById: accountId,
        updatedAt: parsingTime(new Date()),
        updatedById: accountId,
        carBrandId: carRequest.carBrandId,
        carTransmissionId: carRequest.carTransmissionId,
        carTypeId: carRequest.carTypeId,
      };

      return await this.carRepo.save(car);
    });
    return result;
  }

  async update(id: string, carRequest: CarRequestDto, accountId: string, roleId: string): Promise<CarModel> {
    if (roleId == "3") throw new UnauthorizedException("Akses ditolak");
    
    const result = await executeTransactionAsync(async () => {
      let carUpdate: CarModel = await this.getById(id);
      carUpdate.name = carRequest.name;
      carUpdate.price = carRequest.price;
      carUpdate.size = carRequest.size;
      carUpdate.updatedAt = parsingTime(new Date());
      carUpdate.updatedById = accountId;
      carUpdate.year = carRequest.year;
      carUpdate.availability = carRequest.availability;
      carUpdate.capacity = carRequest.capacity;
      carUpdate.description = carRequest.description;
      carUpdate.availableAt = carRequest.availableAt;
      carUpdate.pictureUrl = carRequest.pictureUrl ?? carUpdate.pictureUrl;
      carUpdate.carBrandId = carRequest.carBrandId ?? carUpdate.carBrandId;
      carUpdate.carTransmissionId = carRequest.carTransmissionId ?? carUpdate.carTransmissionId;
      carUpdate.carTypeId = carRequest.carTypeId ?? carUpdate.carTypeId;

      return await this.carRepo.update(id, carUpdate);
    });
    return result;
  }

  // hard delete
  // async delete(id: string): Promise<void> {
  //   await executeTransactionAsync(async () => {
  //     await this.getById(id);
  //     await this.carRepo.delete(id);
  //   });
  // }

  // soft delete
  async delete(id: string, accountId: string, roleId: string): Promise<void> {
    if (roleId == "3") throw new UnauthorizedException("Akses ditolak");
    
    let findCar = await this.getById(id);
    findCar.isDeleted = true;
    findCar.deletedAt = parsingTime(new Date());
    findCar.deteledById = accountId;
    try {
      await this.carRepo.update(id, findCar);
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}
