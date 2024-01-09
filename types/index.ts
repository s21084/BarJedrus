export type EventType = {
    id?: string;
    name: string;
    date: Date;
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
    priceForPiece: number;
    priceForWeight: number;
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
export type ScheduleType = {
    id?: string;
    startHour: Date;
    endHour: Date;
    userId: number;
    weekDayNumber: number;
};
