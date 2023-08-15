"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const getAllUsers = (req, res) => {
    var con = mysql_1.default.createConnection({
        host: process.env.SQL_HOST,
        user: process.env.SQL_USER,
        password: process.env.SQL_PASS,
        database: process.env.SQL_DB
    });
    con.connect(function (err) {
        if (err) {
            res.status(400).send(err);
        }
        else {
            con.query("SELECT * FROM user", function (err, result, fields) {
                if (err) {
                    res.status(404).send(err);
                }
                else {
                    return res.status(200).send(result);
                }
            });
        }
        ;
    });
};
exports.default = getAllUsers;
