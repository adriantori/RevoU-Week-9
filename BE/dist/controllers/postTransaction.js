"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
exports.router = (0, express_1.Router)();
const model_1 = __importDefault(require("../models/model"));
//push transaction
const postTransaction = (req, res) => {
    const input = req.body;
    console.log(input);
    if (req.body.id == null || req.body.type == null || req.body.name == null || req.body.detail == null || req.body.amount == null) {
        res.status(406).send("One of the field cannot empty");
    }
    else {
        model_1.default.push(input);
        res.status(200).json({
            message: "Transaction success",
            input,
        });
    }
};
exports.default = postTransaction;
