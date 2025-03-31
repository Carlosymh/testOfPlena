export interface Slot {
    sourceEvent: string;
    dateTime: string;
}

export interface SlotDate {
    date: string;
    slots?: Slot[];
}

export interface Schedule {
    slotdates: SlotDate[];
    idDoctor: string;
    idClinic: string;
}

export interface SchedulesData {
    schedules: Schedule[];
}

export interface UnifiedSlot {
    dateTime: string;
    sourceEvent: string;
    idDoctor: string;
    idClinic: string;
}