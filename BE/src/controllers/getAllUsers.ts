import { Request, Response } from "express";
import mysql from "mysql";
import dotenv from "dotenv"

dotenv.config();

const getAllUsers = (req: Request, res: Response) => {
    var con = mysql.createConnection({
        host: process.env.SQL_HOST,
        user: process.env.SQL_USER,
        password: process.env.SQL_PASS,
        database: process.env.SQL_DB
    });

    con.connect(function(err){
        if(err){
            res.status(400).send(err)
        }else{
            con.query("SELECT * FROM user", function(err, result, fields){
                if(err){
                    res.status(404).send(err)
                }else{
                    return res.status(200).send(result);
                }
            });
        };
    });
};

export default getAllUsers;