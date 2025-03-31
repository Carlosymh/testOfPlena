import * as dotenv from 'dotenv';
import express from 'express';
import { connectToDatabase, disconnectFromDatabase } from './db/database';
import router from './routes';
import { globalBodyValidation } from "./utils/validateBodyMiddleware";
import logger from './utils/logger'; 
dotenv.config();
const port=process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(globalBodyValidation);

const main = async () => {
    await connectToDatabase();
};
main().catch((error) => {
    logger.error('Error en la aplicación:', error);
});
app.use('/',router);
app.listen(port,()=>{
    logger.info(`Servidor escuchando en http://localhost:${port}`);
});

export default app