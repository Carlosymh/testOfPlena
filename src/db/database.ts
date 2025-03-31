import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import logger from '../utils/logger'; 
dotenv.config();
const MONGODB_URI =process.env.MONGODB_URI; 

/**
 * Establishes a connection to the MongoDB database.
 * If the connection is successful, it logs a success message.
 * If an error occurs, it logs the error and exits the process.
 */
export const connectToDatabase = async () => {
    if (!MONGODB_URI) {
        process.exit(1);
    }
    try {
        await mongoose.connect(MONGODB_URI);
        logger.info('Conectado a MongoDB');
    } catch (error) {
        logger.error('Error conectando a MongoDB:', error);
        process.exit(1); // Exit the process with an error code
    }
};

/**
 * Disconnects from the MongoDB database.
 * If the disconnection is successful, it logs a success message.
 * If an error occurs, it logs the error.
 */
export const disconnectFromDatabase = async () => {
    try {
        await mongoose.disconnect();
        logger.info('Desconectado de MongoDB');
    } catch (error) {
        logger.error('Error desconectando de MongoDB:', error);
    }
};