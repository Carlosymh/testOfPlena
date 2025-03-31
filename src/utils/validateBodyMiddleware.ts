import { Request, Response, NextFunction } from 'express';

export const globalBodyValidation = (req: Request, res: Response, next: NextFunction) => {
    if (req.method === 'POST') {
        if (!req.body || Object.keys(req.body).length === 0) {
            res.status(400).json({ error: 'The request body cannot be empty.' });
            return; 
        }
    }
    next();
};