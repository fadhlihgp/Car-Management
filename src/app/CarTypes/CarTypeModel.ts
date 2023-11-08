import { Model, ModelObject } from "objection";
export class CarTypeModel extends Model {
  id!: string;
  name!: string;

  static getTable() {
    return "car_type";
  }
}

export type CarType = ModelObject<CarTypeModel>;
