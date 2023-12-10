import { Model, ModelObject } from "objection";

export class RoleModel extends Model {
  id!: string;
  name!: string;

  static get tableName() {
    return "role";
  }
}

export type Role = ModelObject<RoleModel>
