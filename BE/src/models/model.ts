//transaction data
interface Transaction {
    id: number;
    type: string;
    name: string;
    detail: string;
    amount: number;
}

const transactions: Transaction[] = [
    { id: 1, type:"Cash In", name: "gajian", detail: "gajian bulanan", amount: 100000},
    { id: 2, type: "Cash Out", name: "khilaf", detail: "steam sale", amount: 50000},
]

export default transactions;