export interface CardCarDashboardProps {
    imgUrl?: string;
    name: string;
    type: string;
    price: number;
    startRent: string;
    finishRent: string;
    updatedAt: string;
    id: string;
    handleClickEdit: () => void;
}
