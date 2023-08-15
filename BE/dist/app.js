"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
//routes
const router_1 = require("./routes/router");
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3333;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use("/", router_1.router);
app.listen(port, () => console.log(`API available on http://localhost:${port}`));
exports.default = app;
