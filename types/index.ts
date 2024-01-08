export type EventType = {
    id?: string;
    name: string;
    decoration?: string;
    vegeCount?: number;
    meatCount?: number;
    prePay?: number;
    priceFull?: number;
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

export type SubscriberType = {
    id?: string;
};