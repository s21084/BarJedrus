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

export type User = {
    id?: number;
    code: string;
};