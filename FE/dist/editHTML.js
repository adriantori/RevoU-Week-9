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
function editElement(outputId) {
    return __awaiter(this, void 0, void 0, function* () {
        const api_url = `https://adri-w9-be.up.railway.app/transaction/${outputId}`;
        const response = yield fetch(api_url, { method: 'GET' });
        const data = yield response.json();
        document.getElementById('idEdit').value = data.id;
        document.getElementById('cashToggleEdit').value = data.type;
        document.getElementById('nameEdit').value = data.name;
        document.getElementById('detailEdit').value = data.detail;
        document.getElementById('amountEdit').value = data.amount;
        //get bootstrap 5 modal
        let myModal = new bootstrap.Modal(document.getElementById('modalEditTransaction'));
        myModal.show();
    });
}
