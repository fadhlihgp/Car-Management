import { Model, ModelObject } from "objection";
import { RoleModel } from "./RoleModel";

export class AccountModel extends Model {
	id!: string;
	fullName!: string;
	address!: string;
	phone!: string;
	birthDate?: Date;
	createdAt!: Date;
	username!: string;
	email!: string;
	password!: string;
	pictureUrl?: string;
	roleId!: string;
	role?: RoleModel | null;

	static relationMappings = {
		accountRole: {
			relation: Model.BelongsToOneRelation,
			modelClass: RoleModel,
			join: {
				from: "account.role_id",
				to: "role.id",
			},
		},
	};
	static get tableName() {
		return "account";
	}
}

export type Account = ModelObject<AccountModel>;
