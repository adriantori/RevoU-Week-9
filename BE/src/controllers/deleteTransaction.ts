import { Request, Response, Router } from "express";
export const router = Router();
import transactions from "../models/model";

//delete transaction by id
const deleteTransaction = (req: Request, res: Response) => {
    const currTransaction = transactions;
    let success: boolean = false;
    for (let i = 0; i < currTransaction.length; i++) {
        if (currTransaction[i].id == +req.params.id) {
            const currentData = currTransaction[i];
            currTransaction.splice(i, 1);
            success = true;
            res.status(200).json({
                message: "success deleting data", currentData
            });
        }
    }

    if (success == false) {
        res.status(404).send("Error: Data not found");
    }
};

export default deleteTransaction;
