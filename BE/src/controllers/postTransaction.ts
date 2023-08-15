import { Request, Response, Router } from "express";
export const router = Router();
import transactions from "../models/model";

//push transaction
const postTransaction = (req: Request, res: Response) => {
    const input = req.body;
    console.log(input);
    if (req.body.id == null || req.body.type == null || req.body.name == null || req.body.detail == null || req.body.amount == null) {
        res.status(406).send("One of the field cannot empty");
    } else {
        transactions.push(input);
        res.status(200).json({
            message: "Transaction success",
            input,
        });
    }
};

export default postTransaction;
