"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
exports.router = (0, express_1.Router)();
const model_1 = __importDefault(require("../models/model"));
//delete transaction by id
const deleteTransaction = (req, res) => {
    const currTransaction = model_1.default;
    let success = false;
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
exports.default = deleteTransaction;
