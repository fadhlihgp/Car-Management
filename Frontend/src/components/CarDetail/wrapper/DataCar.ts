export interface CarType {
    id: string
    name: string
}

export interface CarTransmission {
    id: string
    name: string
}

export interface DataCar {
    id: string
    price: number
    pictureUrl: string
    year: number
    name: string
    carType: CarType
    carTransmission: CarTransmission
    capacity: number
}
