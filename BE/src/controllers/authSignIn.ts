import { Request, Response } from "express";
import users from "../models/user";

const authSignIn = (req: Request, res: Response) => {
    res.status(200).send(users);
};

export default authSignIn;