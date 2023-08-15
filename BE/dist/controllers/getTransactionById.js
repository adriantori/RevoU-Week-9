"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
exports.router = (0, express_1.Router)();
const model_1 = __importDefault(require("../models/model"));
//get transaction by id
const getTransactionById = (req, res) => {
    const currTransaction = model_1.default;
    let success = false;
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
exports.default = getTransactionById;
