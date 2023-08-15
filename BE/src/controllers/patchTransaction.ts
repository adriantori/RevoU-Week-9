import { Request, Response, Router } from "express";
export const router = Router();
import transactions from "../models/model";

//patch by id
const patchTransaction = (req: Request, res: Response) => {
    const currTransaction = transactions;
    let success: boolean = false;
    for (let i = 0; i < currTransaction.length; i++) {
        if (currTransaction[i].id == +req.params.id) {
            const currentData = currTransaction[i];
            if (req.body.id) { currTransaction[i].id = req.body.id };
            if (req.body.type) { currTransaction[i].type = req.body.type };
            if (req.body.name) { currTransaction[i].name = req.body.name };
            if (req.body.detail) { currTransaction[i].detail = req.body.detail };
            if (req.body.amount) { currTransaction[i].amount = req.body.amount };
            success = true;
            res.status(200).json({
                message: "success updating data", currentData
            });
        }
    }

    if (success == false) {
        res.status(404).send("Error: ID not found");
    }
};

export default patchTransaction;
