export type EventType = {
    id?: number;
    name: string;
    decoration?: string;
    vege?: number;
    nonvege?: number;
    prePay?: number;
    payment?: number;
    notes?: string;
};

export type DishType = {
    id?: number;
    name: string;
    price: number;
};

export type UserType = {
    id?: number;
    code: string;
};

export type InfoType = {
    id?: number;
    openHour: string;
    closeHour: string;
    bonusInfo?: string;
};