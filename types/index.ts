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
    id: string;
    email: string;
    isAdmin: boolean;
    isVerified: boolean;
    personId: number;
};


export type InfoType = {
    id?: string;
    openHour: string;
    closeHour: string;
    bonusInfo?: string;
};

export type SubscriberType = {
    id?: string;
    lastMonthPayed: string;
    dishType: Boolean;
    countOfDish?: string;
    onPlace: Boolean;
    notes?: string;
    personId: number;
};
export type ScheduleType = {
    id?: string;
    startHour: Date;
    endHour: Date;
    userId: number;
    weekDayNumber: number;
};
