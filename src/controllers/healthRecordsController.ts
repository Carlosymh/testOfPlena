import express, { application } from "express";
import  { HealthRecordsModel }  from "../models/healthRecordsModels";
import logger from '../utils/logger';

class HealthRecordsController{

    getAllHealthRecords = async (request: express.Request, response: express.Response)=>{
        try {
            const healthRecords= await HealthRecordsModel.find({active:true});
            return response.status(200).json({data:healthRecords});
        } catch (error) {
            logger.error(error);
            return response.status(400);
        }
    };
    
    getHealthRecordsByIdPatient = async (request: express.Request, response: express.Response)=>{
        try {
            const {idPatient } = request.params;
            const healthRecords= await HealthRecordsModel.find({idPatient:idPatient,  active:true});
            return response.status(200).json({data:healthRecords});
        } catch (error) {
            logger.error(error);
            return response.status(400);
        }
    };
    
    getHealthRecordsByIdDoctor= async (request: express.Request, response: express.Response)=>{
        try {
            const {idDoctor } = request.params;
            const healthRecords= await HealthRecordsModel.find({idDoctor:idDoctor,  active:true});
            return response.status(200).json({data:healthRecords});
        } catch (error) {
            logger.error(error);
            return response.status(400);
        }
    };
    
    getHealthRecordsByIdClinic= async (request: express.Request, response: express.Response)=>{
        try {
            const {idClinic } = request.params;
            const healthRecords= await HealthRecordsModel.find({idClinic:idClinic, active:true});
            return response.status(200).json({data:healthRecords});
        } catch (error) {
            logger.error(error);
            return response.status(400);
        }
    };

    getHealthRecordsById= async (request: express.Request, response: express.Response)=>{
        try {
            const {id } = request.params
            const healthRecords= await HealthRecordsModel.findById(id);
            return response.status(200).json({data:healthRecords});
        } catch (error) {
            logger.error(error);
            return response.sendStatus(400);
        }
    };
    
    createHealthRecords= async (request: express.Request, response: express.Response)=>{
        try {
            const {
                idPatient,
                allergics,
                hight,
                wight,
                age,
                idDoctor,
                idClinic,
                lastAppointment
            } = request.body;
            const active=true;
            const observations= null;
            const healthRecords= new HealthRecordsModel({
                idPatient,
                allergics,
                hight,
                wight,
                age,
                idDoctor,
                idClinic,
                lastAppointment,
                observations,
                active
            });
            await healthRecords.save();
            return response.status(201).json({message:"healthRecords Created", data: healthRecords});
        } catch (error) {
            logger.error(error);
            return response.sendStatus(400);
        }
    };
    
    updateHealthRecords= async (request: express.Request, response: express.Response)=>{
        try {
            const { id} = request.params;
            const {
                idPatient,
                allergics,
                hight,
                wight,
                age,
                idDoctor,
                idClinic,
                lastAppointment,
                observations,
                active
            } = request.body;

            const healthRecords= await HealthRecordsModel.findById(id);
            if(healthRecords){
                healthRecords.idPatient=idPatient || healthRecords.idPatient;
                healthRecords.allergics=  allergics || healthRecords.allergics;
                healthRecords.hight= hight || healthRecords.hight;
                healthRecords.wight=wight || healthRecords.wight;
                healthRecords.age=age || healthRecords.age;
                healthRecords.idDoctor=idDoctor || healthRecords.idDoctor;
                healthRecords.idClinic=idClinic || healthRecords.idClinic;
                healthRecords.lastAppointment=lastAppointment || healthRecords.lastAppointment;
                healthRecords.observations=observations || healthRecords.observations;
                healthRecords.active=active || healthRecords.active;
                await healthRecords.save()
                return response.status(200).json({message:"healthRecords Updated", data: healthRecords});
            }
            return response.sendStatus(400);
        } catch (error) {
            logger.error(error);
            return response.sendStatus(400);
        }
    };
    
    deleteHealthRecords= async (request: express.Request, response: express.Response)=>{
        try {
            const { id} = request.params;
            const healthRecords= await HealthRecordsModel.findById(id);
            if(healthRecords){
                healthRecords.active=false;
                await healthRecords.save()
                return response.status(200).json({message:"healthRecords Deleted"});
            }
            return response.status(400).json({message:"healthRecords not Found"});
        } catch (error) {
            logger.error(error);
            return response.sendStatus(400);
        }
    };
}

export default new HealthRecordsController();