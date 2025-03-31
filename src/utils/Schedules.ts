import * as dotenv from 'dotenv';
dotenv.config();
import * as fs from 'fs';
import { SchedulesData, UnifiedSlot, Schedule, SlotDate, Slot } from '../models/schedulesModels';
import logger from '../utils/logger';


const filePath=process.env.SQUEDULES_FILE_PATH;
export function unifySchedules(): Record<string, UnifiedSlot[]> {
    try {
        if( !filePath){
            return {};
        }
        const data: SchedulesData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        const unifiedSchedules: Record<string, UnifiedSlot[]> = {};

        data.schedules.forEach((schedule) => {
            schedule.slotdates.forEach((slotDate) => {
                if (slotDate.slots) {
                    const dateTime = slotDate.slots.map(slot => slot.dateTime);

                    slotDate.slots.forEach((slot) => {
                        const dateTime = slot.dateTime; 

                        if (!unifiedSchedules[dateTime]) {
                            unifiedSchedules[dateTime] = [];
                        }

                        unifiedSchedules[dateTime].push({
                            dateTime: dateTime,
                            sourceEvent: slot.sourceEvent,
                            idDoctor: schedule.idDoctor,
                            idClinic: schedule.idClinic
                        });
                    });
                }
            });
        });

        return unifiedSchedules;
    } catch (error) {
        logger.error('Error al procesar el archivo JSON:', error);
        return {}; 
    }
}
export default unifySchedules;