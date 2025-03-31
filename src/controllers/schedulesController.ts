import express from "express";
import { unifySchedules } from "../utils/Schedules"
import logger from '../utils/logger';

class ScheduleController{
    getSchedules = async (request: express.Request, response: express.Response)=>{
        try {
            const results= await unifySchedules();
            return response.status(200).json({data:results})
        } catch (error) {
            logger.error(error)
            return response.sendStatus(400);
            
        }
    };
}

export default new ScheduleController();