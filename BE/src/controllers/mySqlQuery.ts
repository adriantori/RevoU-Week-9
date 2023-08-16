import mysql from 'mysql';

interface QueryResponse {
    error?: string;
    statusCode: number;
    result?: string;
    resultId?:number;
    affectedRows?: number;
}

export default function mySqlQuery(query: string): Promise<QueryResponse> {
    return new Promise((resolve, reject) => {
        const con = mysql.createConnection({
            host: process.env.SQL_HOST,
            user: process.env.SQL_USER,
            password: process.env.SQL_PASS,
            database: process.env.SQL_DB
        });

        con.connect((err) => {
            if (err) {
                reject({ error: err, statusCode: 400 });
            } else {
                con.query(query, (err, result, fields) => {
                    if (err) {
                        reject({ error: err, statusCode: 404 });
                    } else {
                        resolve({ result: result, statusCode: 200, resultId: result.insertId, affectedRows: result.affectedRows });
                    }
                });
            }
        });

        con.on('error', (err) => {
            reject({ error: err, statusCode: 503 });
        });
    });
}
