import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

//routes
import { router } from "./routes/router";
import cors from 'cors';
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3333;

app.use(cors());

app.use(bodyParser.json());

app.use(cookieParser());

app.use("/", router);


app.listen(port, () =>
  console.log(`API available on http://localhost:${port}`)
);

export default app;