import {Model} from "objection";
import {AccountModel} from "./AccountModel";
import {CarModel} from "./CarModel";

export class CarLogModel extends Model {
	id!: string;
	action!: string;
	date!: Date;
	accountId!: string;
	carId!: string;

	static relationMappings = {
		account: {
			relation: Model.BelongsToOneRelation,
			modelClass: AccountModel,
			join: {
				from: "car_log.accountId",
				to: "account.id",
			},
		},
		car: {
			relation: Model.BelongsToOneRelation,
			modelClass: CarModel,
			join: {
				from: "car_log.carId",
				to: "car.id"
			}
		}
	};
	static get tableName(){
		return "car_log";
	}
}
