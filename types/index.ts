export type EventType = {
    id?: string;
    name: string;
    decoration?: string;
    vege?: number;
    nonvege?: number;
    prePay?: number;
    payment?: number;
    notes?: string;
};

export type DishType = {
    id?: string;
    name: string;
    price: number;
};

export type UserType = {
    id?: string;
    code: string;
};

export type InfoType = {
    id?: string;
    openHour: string;
    closeHour: string;
    bonusInfo?: string;
};