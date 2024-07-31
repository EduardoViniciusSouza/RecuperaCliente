import { Request, Response, NextFunction } from "express";

const apiKeyMiddleware = (req: Request, res:Response, next: NextFunction) => {
    const apiKey = req.headers['x-api-key'] as string;
    if (!apiKey || apiKey !== process.env.API_KEY) {
        return res.status(401).json({error: 'Unauthorized'})
    }
    next();
 }

 export default apiKeyMiddleware;