var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { renderChart } from "./renderChart.js";
const api_url = "https://adri-w8-be.up.railway.app/transaction";
export default function fetchHTML() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(api_url, { method: 'GET' });
        const data = yield response.json();
        console.log(data);
        if (data.length !== 0) {
            const lastId = data[Object.keys(data)[Object.keys(data).length - 1]].id;
            const formOutput = document.getElementById("ulOutput");
            let totalCash = 0;
            let totalCashIn = 0;
            let totalCashOut = 0;
            let arrAmount = [];
            let arrLabels = [];
            for (let i = 0; i < data.length; i++) {
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
                arrLabels.push(data[i].type);
                if (data[i].type.toLowerCase() == "cash in") {
                    totalCashIn += +data[i].amount;
                    totalCash += +data[i].amount;
                }
                else if (data[i].type.toLowerCase() == "cash out") {
                    totalCashOut += +data[i].amount;
                    totalCash -= +data[i].amount;
                }
                arrAmount.push(totalCash);
            }
            document.getElementById("totalCashIn").innerHTML = totalCash.toLocaleString();
            document.getElementById("totalCashOut").innerHTML = totalCashOut.toLocaleString();
            console.log(totalCashIn, totalCashOut);
            console.log("masuk");
            renderChart(arrLabels, arrAmount);
            return lastId;
        }
        else {
            return 0;
        }
    });
}
