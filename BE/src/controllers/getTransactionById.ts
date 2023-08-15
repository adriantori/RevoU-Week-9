import { Request, Response, Router } from "express";
export const router = Router();
import transactions from "../models/model";

//get transaction by id
const getTransactionById = (req: Request, res: Response) => {
    const currTransaction = transactions;
    let success: boolean = false;
    for (let i = 0; i < currTransaction.length; i++) {
        if (currTransaction[i].id == +req.params.id) {
            res.status(200).send(currTransaction[i]);
            success = true;
        }
    }

    if (success == false) {
        res.status(404).send("Error: Data not found");
    }
};

export default getTransactionById;
