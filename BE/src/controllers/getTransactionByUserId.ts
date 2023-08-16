import { Request, Response, Router } from "express";
import mySqlQuery from "./mySqlQuery";

//get transaction by id
const getTransactionByUserId = (req: Request, res: Response) => {

    (async () => {
        try {
            console.log(req.params.id)
            const query = `
            SELECT u.id, u.name, u.address,
                (
                    SELECT
                        SUM(CASE WHEN t.type = 'income' THEN t.amount ELSE -t.amount END) AS net_amount
                    FROM \`transaction\` t
                    WHERE t.user_id = u.id
                ) AS balance,
                (
                    SELECT SUM(t.amount)
                    FROM \`transaction\` t
                    WHERE t.user_id = u.id AND t.\`type\` = 'expense'
                ) AS expense
            FROM \`user\` u
            WHERE u.id = ${req.params.id};
            `;
            const response = await mySqlQuery(query);
            res.status(response.statusCode).send(response.result);
        } catch (error) {
            res.send(error);
        }
    })();

};

export default getTransactionByUserId;
