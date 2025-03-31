import mongoose from "mongoose";

const PatientsSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    birthday:{
        type:String,
        required:true
    },
    active:{
        type:Boolean,
        required:true
    }
    },{
        timestamps:true 
    }
);

export const PatientsModel= mongoose.model('Patients',PatientsSchema);