import { Router } from "express";

import helloWorld from "../controllers/helloWorld.js"
import getAllTransaction from "../controllers/getAllTransaction";
import postTransaction from "../controllers/postTransaction";
import getTransactionById from "../controllers/getTransactionById";
import deleteTransaction from "../controllers/deleteTransaction";
import putTransaction from "../controllers/putTransaction";
import patchTransaction from "../controllers/patchTransaction";
import pageNotFound from "../controllers/pageNotFound";
import getAllUsers from "../controllers/getAllUsers.js";
import authSignIn from "../controllers/authSignIn.js";
import authSignUp from "../controllers/authSignUp.js";
import getTransactionByUserId from "../controllers/getTransactionByUserId.js";

export const router = Router();

//hello
router.get('/', helloWorld);

//getAllTransaction
router.get('/transaction', getAllTransaction);

//push transaction
router.post('/transaction', postTransaction);

//get transaction by id
router.get('/transaction/:id', getTransactionById);

//delete transaction by id
router.delete('/transaction/:id', deleteTransaction);

//put by id
router.put('/transaction/:id', putTransaction);

//patch by id
router.patch('/transaction/:id', patchTransaction);

//get all users
router.get('/users', getAllUsers);

//get transaction by user ID
router.get('/user/:id', getTransactionByUserId)

//login user
router.post('/user/signin', authSignIn);

//register user
router.post('/user/signup', authSignUp);

//page not found
router.get("*", pageNotFound);