"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mySqlQuery_1 = __importDefault(require("./mySqlQuery"));
//put by id
const putTransaction = (req, res) => {
    if (req.body.type == null || req.body.amount == null || req.body.user_id == null) {
        res.status(406).send("One of the field cannot empty");
    }
    else {
        const { type, amount, user_id } = req.body;
        (() => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const query = `
                    UPDATE revou_w9.\`transaction\`
                    SET user_id=${user_id}, \`type\`='${type}', amount=${amount}
                    WHERE id=${req.params.id};
                `;
                const response = yield (0, mySqlQuery_1.default)(query);
                if (response.affectedRows !== 0) {
                    res.status(response.statusCode).send(`id: ${req.params.id}`);
                }
                else {
                    res.status(404).send("Transaction not found");
                }
            }
            catch (error) {
                res.send(error);
            }
        }))();
    }
};
exports.default = putTransaction;
