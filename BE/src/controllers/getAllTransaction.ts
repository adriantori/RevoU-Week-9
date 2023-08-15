import { Request, Response, Router } from "express";
export const router = Router();
import transactions from "../models/model";


//get all transaction
const getAllTransaction = (req: Request, res: Response) => {
    res.status(200).send(transactions);
};

export default getAllTransaction;
