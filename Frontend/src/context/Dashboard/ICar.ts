import {ICarType} from "./ICarType";

export interface ICar {
    id: string
    name: string
    price: number
    carType: ICarType
    createdAt: string
    updatedAt: string
    startRent: string
    finishRent: string
    pictureUrl: string
}
