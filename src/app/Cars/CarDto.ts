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