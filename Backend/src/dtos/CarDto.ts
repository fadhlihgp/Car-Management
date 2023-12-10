export interface CarRequestDto {
    name: string;
    price: number;
    year: number;
    size: string;
    availability: boolean;
    availableAt?: Date;
    capacity: number;
    description?: string;
    pictureUrl?: string;
    carTransmissionId?: string;
    carBrandId?: string;
    carTypeId?: string;
}

// export interface CarResponseDto {
//     id: string;
//     name: string;
//     price: number;
//     year?: number;
//     size: string;
//     availability: boolean;
//     availableAt?: Date;
//     capacity: number;
//     description?: string;
//     pictureUrl?: string;
//     carTransmission: string;
//     carBrand: string;
//     carType: string;
//     createdAt: Date;
//     createdBy: string;
//     updatedAt: Date;
//     updatedBy: string;
//     isDeleted: boolean;
//     deletedAt?: Date;
//     deletedBy?: string;
// }
