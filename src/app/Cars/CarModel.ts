import { Model, ModelObject } from "objection";

export class CarModel extends Model {
    id!: string;
    name!: string;
    price!: number;
    size!: string;
    picture!: string;
    updated!: Date

    static get tableName() {
        return "car";
    }
}

export type Car = ModelObject<CarModel>;