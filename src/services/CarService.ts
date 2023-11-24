import {CarModel} from "../models/CarModel";
import {NotFoundException} from "../exceptions/NotFoundException";
import {CarRequestDto} from "../dtos/CarDto";
import {Repository} from "../repositories/Repository";
import executeTransactionAsync from "../repositories/ExecuteTransactionAsync";
import {parsingTime} from "../helpers/ParsingTime";
import {UnauthorizedException} from "../exceptions/UnauthorizedException";
import {Modifiers} from "objection";
import {CarLogService} from "./CarLogService";
import {CarLogModel} from "../models/CarLogModel";

const { v4: uuidv4 } = require("uuid");

export class CarService {
  private carRepo: Repository<CarModel>;
  private carLogService: CarLogService;

  constructor() {
    this.carRepo = new Repository(CarModel);
    this.carLogService = new CarLogService();
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

    let cars = await this.carRepo.findAllWithCriteriaAndJoin(criteria, [
      "carBrand",
      "carTransmission",
      "carType",
      "createdBy(selectUser)",
      "updatedBy(selectUser)",
      "deletedBy(selectUser)",
    ], this.carModifiers());
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

    const car = await this.carRepo.findWithJoin(criteria, [
      "carBrand",
      "carTransmission",
      "carType",
      "createdBy(selectUser)",
      "updatedBy(selectUser)",
      "deletedBy(selectUser)",
    ], this.carModifiers());
    if (!car) {
      throw new NotFoundException("Data mobil tidak ditemukan");
    } else {
      return car;
    }
  }

  async create(carRequest: CarRequestDto, accountId: string, roleId: string): Promise<CarModel> {
    if (roleId == "3") throw new UnauthorizedException("Akses ditolak");

    let availableTime = parsingTime(new Date());
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

      const carLog: Partial<CarLogModel> = {
        id: uuidv4(),
        action: "Create",
        carId: car.id,
        accountId: accountId,
        date: parsingTime(new Date())
      }
      const carSave =  await this.carRepo.save(car);
      await this.carLogService.createCarLog(carLog);
      return carSave;
    });
    return result;
  }

  async update(id: string, carRequest: CarRequestDto, accountId: string, roleId: string): Promise<CarModel> {
    if (roleId == "3") throw new UnauthorizedException("Akses ditolak");

    return await executeTransactionAsync(async () => {
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

      const carLog: Partial<CarLogModel> = {
        id: uuidv4(),
        action: "Update",
        carId: carUpdate.id,
        accountId: accountId,
        date: parsingTime(new Date())
      }
      await this.carLogService.createCarLog(carLog);
      return await this.carRepo.update(id, carUpdate);
    });
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
    findCar.deletedById = accountId;
    const carLog: Partial<CarLogModel> = {
      id: uuidv4(),
      action: "Delete",
      carId: findCar.id,
      accountId: accountId,
      date: parsingTime(new Date())
    }
    await executeTransactionAsync(async () => {
      await this.carLogService.createCarLog(carLog);
      await this.carRepo.update(id, findCar);
    });
  }

  private carModifiers(): Modifiers {
    return {
      selectName(builder) {
        builder.select("name")
      },
      selectUser(builder) {
        builder.select("id", "fullName", "username")
      }
    }
  }
}
