import mongoose from "mongoose";

const AppointmentsSchema = new mongoose.Schema({
    date:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    idPatient:{
        type:String,
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
    prescription:{
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

export const AppointmentsModel= mongoose.model('Appointments',AppointmentsSchema);