import { Request, Response, Router } from "express";
export const router = Router();
import transactions from "../models/model";

//put by id
const putTransaction = (req: Request, res: Response) => {
    const currTransaction = transactions;
    let success: boolean = false;
    for (let i = 0; i < currTransaction.length; i++) {
        if (currTransaction[i].id == +req.params.id) {

            if (req.body.type == null || req.body.name == null || req.body.detail == null || req.body.amount == null) {
                res.status(406).send("Error: All field must be filled in");
            } else {
                const currentData = currTransaction[i];
                currTransaction[i].type = req.body.type;
                currTransaction[i].name = req.body.name;
                currTransaction[i].detail = req.body.detail;
                currTransaction[i].amount = req.body.amount;
                success = true;
                res.status(200).json({
                    message: "success updating data", currentData
                });
            }
        }
    }

    if (success == false) {
        res.status(404).send("Error: ID not found");
    }
};

export default putTransaction;
