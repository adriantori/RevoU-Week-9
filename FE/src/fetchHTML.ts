import { renderChart } from "./renderChart.js";
const api_url = "https://adri-w8-be.up.railway.app/transaction";

export default async function fetchHTML() {
    const response = await fetch(api_url, { method: 'GET' });
    const data = await response.json();
    console.log(data);
    if (data.length !== 0) {
        const lastId = data[Object.keys(data)[Object.keys(data).length - 1]].id;
        const formOutput = document.getElementById("ulOutput") as HTMLElement
        let totalCash: number = 0;
        let totalCashIn: number = 0;
        let totalCashOut: number = 0;
        let arrAmount: number[] = [];
        let arrLabels: string[] = [];
        for (let i: number = 0; i < data.length; i++) {
            formOutput.innerHTML += `
                    <tr id=output-${data[i].id}>
                        <td>${data[i].id}</td>
                        <td>${data[i].type}</td>
                        <td>${data[i].name}</td>
                        <td>${data[i].detail}</td>
                        <td>${data[i].amount.toLocaleString()}</td>
                        <td>
                        <button type="button" class="btn btn-warning" onclick="editElement('${data[i].id}')">EDIT</button>
                        <button type="button" class="btn btn-danger" onclick="deleteElement('${data[i].id}')">DELETE</button>
                        </td>
                    </tr>
                        `;

            arrLabels.push(data[i].type)
            if (data[i].type.toLowerCase() == "cash in") {
                totalCashIn += +data[i].amount;
                totalCash += +data[i].amount;
            } else if (data[i].type.toLowerCase() == "cash out") {
                totalCashOut += +data[i].amount;
                totalCash -= +data[i].amount;
            }
            arrAmount.push(totalCash);
        }
        (document.getElementById("totalCashIn") as HTMLElement).innerHTML = totalCash.toLocaleString();
        (document.getElementById("totalCashOut") as HTMLElement).innerHTML = totalCashOut.toLocaleString();
        console.log(totalCashIn, totalCashOut);
        console.log("masuk");
        renderChart(arrLabels, arrAmount);
        return lastId;
    } else {
        return 0;
    }
}