import express, { application } from "express";
import  { PatientsModel }  from "../models/patientsModels";
import logger from '../utils/logger';

class PatientsController{

    getAllPatients = async (request: express.Request, response: express.Response)=>{
        try {
            const patients= await PatientsModel.find({active:true});
            return response.status(200).json({data:patients});
        } catch (error) {
            logger.error(error);
            return response.status(400);
        }
    };

    getPatientsById= async (request: express.Request, response: express.Response)=>{
        try {
            const {id } = request.params
            const patients= await PatientsModel.findById(id);
            return response.status(200).json({data:patients});
        } catch (error) {
            logger.error(error);
            return response.sendStatus(400);
        }
    };
    
    createPatients= async (request: express.Request, response: express.Response)=>{
        try {
            const {
                firstName,
                lastName,
                phoneNumber,
                email,
                birthday
            } = request.body;
            const active=true;
            const patients= new PatientsModel({
                firstName,
                lastName,
                phoneNumber,
                email,
                birthday,
                active
            });
            await patients.save();
            return response.status(201).json({message:"Patients Created", data: patients});
        } catch (error) {
            logger.error(error);
            return response.sendStatus(400);
        }
    };
    
    updatePatients= async (request: express.Request, response: express.Response)=>{
        try {
            const { id} = request.params;
            const {
                firstName,
                lastName,
                phoneNumber,
                email,
                birthday,
                active
            } = request.body;

            const patients= await PatientsModel.findById(id);
            if(patients){
                patients.firstName=firstName || patients.firstName;
                patients.lastName=  lastName || patients.lastName;
                patients.phoneNumber= phoneNumber || patients.phoneNumber;
                patients.email=email || patients.email;
                patients.birthday=birthday || patients.birthday;
                patients.active=active || patients.active;
                await patients.save()
                return response.status(200).json({message:"Patients Updated", data: patients});
            }
            return response.sendStatus(400);
        } catch (error) {
            logger.error(error);
            return response.sendStatus(400);
        }
    };
    
    deletePatients= async (request: express.Request, response: express.Response)=>{
        try {
            const { id} = request.params;
            const patients= await PatientsModel.findById(id);
            if(patients){
                patients.active=false;
                await patients.save()
                return response.status(200).json({message:"Patients Deleted"});
            }
            return response.status(400).json({message:"Patients not Found"});
        } catch (error) {
            logger.error(error);
            return response.sendStatus(400);
        }
    };
}

export default new PatientsController();