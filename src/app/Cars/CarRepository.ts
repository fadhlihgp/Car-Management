import { CarModel } from "./CarModel";
import {Repository} from "../Repositories/Repository";

export class CarRepository extends Repository<CarModel>{
    async getById(id: string): Promise<CarModel | null > {
        const car =  await CarModel.query().findById(id).withGraphFetched("[carBrand(selectName), createdBy(selectFullName)]").modifiers({selectName(builder) {
            builder.select("name")
            },
        selectFullName(builder) {
            builder.select("fullName")
        }});

        return car || null;
    }
}
