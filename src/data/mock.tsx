import type { Transaction } from "../types";

export const mockTransactions: Transaction[] = [
    {
        id: 1,
        date: "2026-03-01",
        amount: 20000,
        category: "Salary",
        type: "income",
    },
    {
        id: 2,
        date: "2026-03-05",
        amount: 5000,
        category: "Food",
        type: "expense",
    },
    {
        id: 3,
        date: "2026-03-05",
        amount: 2000,
        category: "Electricity",
        type: "expense",
    },
    {
        id: 4,
        date: "2026-03-05",
        amount: 1000,
        category: "Wi-Fi",
        type: "expense",
    },
    {
        id: 5,
        date: "2026-03-10",
        amount: 5000,
        category: "Freelance",
        type: "income",
    },
];