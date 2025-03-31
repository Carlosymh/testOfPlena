import express from "express";
import AppointmentController from "../controllers/appointmentsController";
import ScheduleController from "../controllers/schedulesController";
import HealthRecordsController from "../controllers/healthRecordsController";
import PatientsController from "../controllers/patientsController";
import logger from '../utils/logger';


const router = express.Router();

router.get("/getAllAppointments", (req, res, next) => {
    logger.info('Endpoint /getAllAppointments Called');
    AppointmentController.getAllAppointments(req, res).catch(next);
});

router.get("/getAppointmentsByIdPatient/:idPatient", (req, res, next) => {
    logger.info('Endpoint /getAppointmentsByIdPatient Called');
    AppointmentController.getAppointmentsByIdPatient(req, res).catch(next);
});

router.get("/getAppointmentsByIdDoctor/:idDoctor", (req, res, next) => {
    logger.info('Endpoint /getAppointmentsByIdDoctor Called');
    AppointmentController.getAppointmentsByIdDoctor(req, res).catch(next);
});

router.get("/getAppointmentsByIdClinic/:idClinic", (req, res, next) => {
    logger.info('Endpoint /getAppointmentsByIdClinic Called');
    AppointmentController.getAppointmentsByIdClinic(req, res).catch(next);
});

router.get("/getAppointmentsById/:id", (req, res, next) => {
    logger.info('Endpoint /getAppointmentsById Called');
    AppointmentController.getAppointmentsById(req, res).catch(next);
});

router.post("/createAppointment", (req, res, next) => {
    logger.info('Endpoint /createAppointment Called');
    AppointmentController.createAppointment(req, res).catch(next);
});

router.put("/updateAppointment/:id", (req, res, next) => {
    logger.info('Endpoint /updateAppointment Called');
    AppointmentController.updateAppointment(req, res).catch(next);
});

router.delete("/deleteAppointment/:id", (req, res, next) => {
    logger.info('Endpoint /deleteAppointment Called');
    AppointmentController.deleteAppointment(req, res).catch(next);
});


router.get("/doctors/availability", (req, res, next) => {
    logger.info('Endpoint /doctors/availability Called');
    ScheduleController.getSchedules(req, res).catch(next);
});

router.get("/getAllHealthRecords", (req, res, next) => {
    logger.info('Endpoint /getAllHealthRecords Called');
    HealthRecordsController.getAllHealthRecords(req, res).catch(next);
});

router.get("/getHealthRecordsByIdPatient/:idPatient", (req, res, next) => {
    logger.info('Endpoint /getHealthRecordsByIdPatient Called');
    HealthRecordsController.getHealthRecordsByIdPatient(req, res).catch(next);
});

router.get("/getHealthRecordsByIdDoctor/:idDoctor", (req, res, next) => {
    logger.info('Endpoint /getHealthRecordsByIdDoctor Called');
    HealthRecordsController.getHealthRecordsByIdDoctor(req, res).catch(next);
});

router.get("/getHealthRecordsByIdClinic/:idClinic", (req, res, next) => {
    logger.info('Endpoint /getHealthRecordsByIdClinic Called');
    HealthRecordsController.getHealthRecordsByIdClinic(req, res).catch(next);
});

router.get("/getHealthRecordsById/:id", (req, res, next) => {
    logger.info('Endpoint /getHealthRecordsById Called');
    HealthRecordsController.getHealthRecordsById(req, res).catch(next);
});

router.post("/createHealthRecords", (req, res, next) => {
    logger.info('Endpoint /createHealthRecords Called');
    HealthRecordsController.createHealthRecords(req, res).catch(next);
});

router.put("/updateHealthRecords/:id", (req, res, next) => {
    logger.info('Endpoint /updateHealthRecords Called');
    HealthRecordsController.updateHealthRecords(req, res).catch(next);
});

router.delete("/deleteHealthRecords/:id", (req, res, next) => {
    logger.info('Endpoint /deleteHealthRecords Called');
    HealthRecordsController.deleteHealthRecords(req, res).catch(next);
});

router.get("/getAllPatients", (req, res, next) => {
    logger.info('Endpoint /getAllPatients Called');
    PatientsController.getAllPatients(req, res).catch(next);
});

router.get("/getPatientsById/:id", (req, res, next) => {
    logger.info('Endpoint /getPatientsById Called');
    PatientsController.getPatientsById(req, res).catch(next);
});

router.post("/createPatients", (req, res, next) => {
    logger.info('Endpoint /createPatients Called');
    PatientsController.createPatients(req, res).catch(next);
});

router.put("/updatePatients/:id", (req, res, next) => {
    logger.info('Endpoint /updatePatients Called');
    PatientsController.updatePatients(req, res).catch(next);
});

router.delete("/deletePatients/:id", (req, res, next) => {
    logger.info('Endpoint /deletePatients Called');
    PatientsController.deletePatients(req, res).catch(next);
});
export default router;