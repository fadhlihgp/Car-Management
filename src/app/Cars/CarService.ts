import { CarModel } from "./CarModel";
import { NotFoundException } from "../../exceptions/NotFoundException";
import { CarRequestDto } from "./CarDto";
import { Repository } from "../Repositories/Repository";

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
      is_deleted: false
    }

    let filterParams = [
      {filterName: name, isEmpty: !name, condition: (car: CarModel) => searchPattern.test(car.name)},
      {filterName: size, isEmpty: !size, condition: (car: CarModel) => car.size.toUpperCase() === size?.toString().toUpperCase()},
      {filterName: availability, isEmpty: !availability, condition: (car: CarModel) => car.availability === isAvailable}
    ]

    let cars = await this.carRepo.findAllWithCriteriaAndJoin(criteria,["carBrand", "carTransmission" ,"carType"]);
    for (const filter of filterParams) {
      if (!filter.isEmpty) {
        cars = cars.filter(filter.condition)
      }
    }

    return cars;
  }

  async getById(id: string): Promise<CarModel> {
    const criteria = {
      id: id,
      is_deleted: false
    }

    const car = await this.carRepo.findWithJoin( criteria , ["carType", "carBrand", "carTransmission"])
    if (!car) {
      throw new NotFoundException("Data mobil tidak ditemukan");
    } else {
      return car;
    }
  }

  async create(carRequest: CarRequestDto): Promise<CarModel> {
    let reqTime = carRequest.available_at;
    reqTime?.setHours(reqTime.getHours() + 7);
    
    try {
      const car: Partial<CarModel> = {
        name: carRequest.name,
        price: carRequest.price,
        size: carRequest.size,
        picture_url: carRequest.picture_url ?? "",
        year: carRequest.year,
        availability: carRequest.availability,
        capacity: carRequest.capacity,
        description: carRequest.description,
        available_at: reqTime ?? currTime,
        updated_at: currTime,
        car_brand_id: carRequest.car_brand_id,
        car_transmission_id: carRequest.car_transmission_id,
        car_type_id: carRequest.car_type_id
      };

      return await this.carRepo.save(car);
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async update(id: string, carRequest: CarRequestDto): Promise<CarModel> {
    let carUpdate: CarModel = await this.getById(id);

    try {
      carUpdate.name = carRequest.name;
      carUpdate.price = carRequest.price;
      carUpdate.size = carRequest.size;
      carUpdate.updated_at = currTime;
      carUpdate.year = carRequest.year;
      carUpdate.availability = carRequest.availability;
      carUpdate.capacity = carRequest.capacity;
      carUpdate.description = carRequest.description;
      carUpdate.available_at = carRequest.available_at;
      carUpdate.picture_url = carRequest.picture_url ?? carUpdate.picture_url;
      carUpdate.car_brand_id = carRequest.car_brand_id ?? carUpdate.car_brand_id;
      carUpdate.car_transmission_id = carRequest.car_transmission_id ?? carUpdate.car_transmission_id;
      carUpdate.car_type_id = carRequest.car_type_id ?? carUpdate.car_type_id

      return await this.carRepo.update(id, carUpdate);
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  // hard delete 
  async delete(id: string): Promise<void> {
    let findCar = await this.getById(id);
    try {
      await this.carRepo.delete(id)
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  // soft delete
  // async delete(id: string): Promise<void> {
  //   let findCar = await this.getById(id);
  //   findCar.is_deleted = true;
  //   try {
  //     await this.carRepo.update(id, findCar);
  //   } catch (error) {
  //     throw new Error(`${error}`);
  //   }
  // }
}
