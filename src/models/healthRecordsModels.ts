import mongoose from "mongoose";

const HealthRecordsSchema = new mongoose.Schema({
    idPatient:{
        type:String,
        required:true
    },
    allergics:{
        type:Array,
        required:true
    },
    hight:{
        type:Number,
        required:true
    },
    wight:{
        type:Number,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    idDoctor:{
        type:Number,
        required:true
    },
    idClinic:{
        type:Number,
        required:true
    },
    lastAppointment:{
        type:String,
        required:false
    },
    observations:{
        type:String,
        required:false
    },
    active:{
        type:Boolean,
        required:true
    }
    },{
        timestamps:true 
    }
);

export const HealthRecordsModel= mongoose.model('HealthRecords',HealthRecordsSchema);