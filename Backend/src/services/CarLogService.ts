import {Repository} from "../repositories/Repository";
import {CarLogModel} from "../models/CarLogModel";
import {Modifiers} from "objection";
import {UnauthorizedException} from "../exceptions/UnauthorizedException";

export class CarLogService {
	private carLogRepo: Repository<CarLogModel>;
	constructor() {
		this.carLogRepo = new Repository(CarLogModel);
	}

	async createCarLog(carLogModel:Partial<CarLogModel>): Promise<void> {
		await this.carLogRepo.save(carLogModel);
	}

	async getAllCarLogs(roleId: string): Promise<CarLogModel[]> {
		if (roleId === "3") throw new UnauthorizedException("Akses ditolak");
		return await this.carLogRepo.findAllWithJoin(["account(selectAccount)", "car(selectCar)"], this.carLogModifiers());
	}

	private carLogModifiers(): Modifiers {
		return {
			selectAccount(builder) {
				builder.select("id", "fullName", "username", "email", "roleId");
			},
			selectCar(builder) {
				builder.select("id", "name", "price", "year", "capacity");
			}
		};
	}
}
