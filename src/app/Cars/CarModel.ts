import { Model, ModelObject } from "objection";
import { CarBrandModel } from "./../CarBrands/CarBrandModel";
import CarTransmissionModel from "../CarTransamissions/CarTransmissionModel";
import { CarTypeModel } from "../CarTypes/CarTypeModel";
import { AccountModel } from "../Auth/AccountModel";

export class CarModel extends Model {
  id!: string;
  name!: string;
  price!: number;
  year?: number;
  size!: string;
  availability?: boolean;
  capacity!: number;
  description?: string;
  pictureUrl!: string;
  availableAt?: Date;
  createdAt!: Date;
  createdById!: string;
  updatedAt!: Date;
  updatedById!: string;
  isDeleted!: boolean;
  deletedAt?: Date;
  deteledById?: string;
  carBrandId?: string;
  carTransmissionId?: string;
  carTypeId?: string;

  static relationMappings = {
    carBrand: {
      relation: Model.BelongsToOneRelation,
      modelClass: CarBrandModel,
      join: {
        from: "car.carBrandId",
        to: "car_brand.id",
      },
    },
    carTransmission: {
      relation: Model.BelongsToOneRelation,
      modelClass: CarTransmissionModel,
      join: {
        from: "car.carTransmissionId",
        to: "car_transmission.id",
      },
    },
    carType: {
      relation: Model.BelongsToOneRelation,
      modelClass: CarTypeModel,
      join: {
        from: "car.carTypeId",
        to: "car_type.id",
      },
    },
    createdBy: {
      relation: Model.BelongsToOneRelation,
      modelClass: AccountModel,
      join: {
        from: "car.createdById",
        to: "account.id"
      }
    },
    updatedBy: {
      relation: Model.BelongsToOneRelation,
      modelClass: AccountModel,
      join: {
        from: "car.updatedById",
        to: "account.id"
      }
    },
    deletedBy: {
      relation: Model.BelongsToOneRelation,
      modelClass: AccountModel,
      join: {
        from: "car.deletedById",
        to: "account.id"
      }
    }
  };

  static get tableName() {
    return "car";
  }
}

export type Car = ModelObject<CarModel>;
