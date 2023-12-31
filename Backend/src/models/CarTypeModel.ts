import { Model, ModelObject } from "objection";
import { CarModel } from "./CarModel";
export class CarTypeModel extends Model {
	id!: string;
	name!: string;

	static get tableName() {
		return "car_type";
	}

}

export type CarType = ModelObject<CarTypeModel>;
