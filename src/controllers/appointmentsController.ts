import express, { application } from "express";
import { AppointmentsModel } from "../models/appointmentsModels";
import logger from '../utils/logger';

class AppointmentController{

    getAllAppointments = async (request: express.Request, response: express.Response)=>{
        try {
            const appointment= await AppointmentsModel.find({active:true});
            return response.status(200).json({data:appointment});
        } catch (error) {
            return response.status(400);
        }
    };
    
    getAppointmentsByIdPatient = async (request: express.Request, response: express.Response)=>{
        try {
            const {idPatient } = request.params;
            const appointment= await AppointmentsModel.find({idPatient:idPatient,  active:true});
            return response.status(200).json({data:appointment});
        } catch (error) {
            logger.error(error);
            return response.status(400);
        }
    };
    
    getAppointmentsByIdDoctor= async (request: express.Request, response: express.Response)=>{
        try {
            const {idDoctor } = request.params;
            const appointment= await AppointmentsModel.find({idDoctor:idDoctor,  active:true});
            return response.status(200).json({data:appointment});
        } catch (error) {
            logger.error(error);
            return response.status(400);
        }
    };
    
    getAppointmentsByIdClinic= async (request: express.Request, response: express.Response)=>{
        try {
            const {idClinic } = request.params;
            const appointment= await AppointmentsModel.find({idClinic:idClinic, active:true});
            return response.status(200).json({data:appointment});
        } catch (error) {
            logger.error(error);
            return response.status(400);
        }
    };

    getAppointmentsById= async (request: express.Request, response: express.Response)=>{
        try {
            const {id } = request.params
            const appointment= await AppointmentsModel.findById(id);
            return response.status(200).json({data:appointment});
        } catch (error) {
            logger.error(error);
            return response.sendStatus(400);
        }
    };
    
    createAppointment= async (request: express.Request, response: express.Response)=>{
        try {
            const {
                date,
                description,
                idPatient,
                idDoctor,
                idClinic
            } = request.body;
            const status="CREATED";
            const active=true;
            const prescription= null;
            const observations= null;
            const appointment= new AppointmentsModel({
                date,
                status,
                description,
                idPatient,
                idDoctor,
                idClinic,
                prescription,
                observations,
                active
            });
            await appointment.save();
            return response.status(201).json({message:"Appointment Created", data: appointment});
        } catch (error) {
            logger.error(error);
            return response.sendStatus(400);
        }
    };
    
    updateAppointment= async (request: express.Request, response: express.Response)=>{
        try {
            const { id} = request.params;
            const {
                date,
                description,
                idPatient,
                idDoctor,
                idClinic, 
                status,
                prescription,
                observations
            } = request.body;

            const appointment= await AppointmentsModel.findById(id);
            if(appointment){
                appointment.date=date || appointment.date;
                appointment.status=  status || appointment.status;
                appointment.description= description || appointment.description;
                appointment.idPatient=idPatient || appointment.idPatient;
                appointment.idDoctor=idDoctor || appointment.idDoctor;
                appointment.idClinic=idClinic || appointment.idClinic;
                appointment.idClinic=idClinic || appointment.idClinic;
                appointment.prescription=prescription || appointment.prescription;
                appointment.observations=observations || appointment.observations;
                await appointment.save()
                return response.status(200).json({message:"Appointment Updated", data: appointment});
            }
            return response.sendStatus(400);
        } catch (error) {
            logger.error(error);
            return response.sendStatus(400);
        }
    };
    
    deleteAppointment= async (request: express.Request, response: express.Response)=>{
        try {
            const { id} = request.params;
            const appointment= await AppointmentsModel.findById(id);
            if(appointment){
                appointment.active=false;
                await appointment.save()
                return response.status(200).json({message:"Appointment Deleted"});
            }
            return response.status(400).json({message:"Appointment not Found"});
        } catch (error) {
            logger.error(error);
            return response.sendStatus(400);
        }
    };
}

export default new AppointmentController();