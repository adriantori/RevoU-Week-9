# RevoU Week 8 Assignment

Creates simple financial tracker API using ExpresJS & Typescript, also connects it with Front-End.

## Assignment Information

1. Front-end is made using Bootstrap.

2. Front-end is deployed at Netlify.

3. Charts on Front-end using ChartJS.

4. Back-end is written using Typescript, ExpressJS, and NodeJS.

5. Back-end is deployed at Railways.

6. Authentication is not implemented.

## Advanced Information - Front-End

1. Click "Add Transaction" button to show Model of Input Data.
   
   1. Every input has to be filled, otherwise it will show error and user cant proceed.
   
   2. Once its submitted successfully, it will refresh the page and showed updated table and chart.
   
   3. User can now edit or delete the data.

2. When Edit is clicked, it will show Model of Edit Data.
   
   1. User has to fill everything, otherwise it will show error and user cant proceed.
   
   2. Once its submitted successfully, it will refresh the page and showed updated table and chart.

3. When delete is clicked, it will show prompt message.
   
   1. if clicked yes, it will now delete the data and refresh the page.

4. Chart will track cash total from the first data to last data.

## Advanced Information - Back-End

1. There's no Authentication, so you can use it as is.

2. If user accessed invalid API Endpoint, it will be blocked and instead return HTTP 404.

3. API Endpoint will be explained in the next point.

## API Endpoint

| HTTP Request | URL                                               | Explanation           |
|:------------:|:------------------------------------------------- | --------------------- |
| GET          | https://adri-w8-be.up.railway.app/                | Hello World           |
| GET          | https://adri-w8-be.up.railway.app/*               | Return 404            |
| GET          | https://adri-w8-be.up.railway.app/transaction/    | Get all data          |
| GET          | https://adri-w8-be.up.railway.app/transaction/:id | Get data by ID        |
| POST         | https://adri-w8-be.up.railway.app/transaction/    | Post new data         |
| PUT          | https://adri-w8-be.up.railway.app/transaction/:id | Update all data       |
| PATCH        | https://adri-w8-be.up.railway.app/transaction/:id | Update data partially |
| DELETE       | https://adri-w8-be.up.railway.app/transaction/:id | Delete data           |

## API Body

| HTTP Request | Body                                                                                                                                                                                                                                                            |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST         | {\| <br/>    "id": number,     \|<br/>\| -------------------------- \|<br/>\| <br/>    "type": string,   \|<br/>\| <br/>    "name": string,   \|<br/>\| <br/>    "detail": string, \|<br/>\| <br/>    "amount": number  \|<br/>\| <br/>}                     \| |
| PUT          | { <br/> "type": string, <br/><br/> "name": string, <br/><br/> "detail": string, <br/><br/> "amount": number<br>}<br/><br/>(data has to be filled in)                                                                                                            |
| PATCH        | { <br/>  "type": string, <br/><br/> "name": string, <br/><br/> "detail": string, <br/><br/> "amount": number<br>}<br/><br/>(partial data is OK)                                                                                                                 |

### Deploy Link

Front-end: https://adriantori-w8.netlify.app

Back-end: https://adri-w8-be.up.railway.app/