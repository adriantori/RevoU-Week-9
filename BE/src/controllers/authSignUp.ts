import { Request, Response } from "express";
import users from "../models/user";

const authSignUp = (req: Request, res: Response) => {
    res.status(200).send(users);
};

export default authSignUp;