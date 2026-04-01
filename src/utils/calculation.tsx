import type { Transaction } from "../types";

export const getSummary = (transactions: Transaction[]) => {
    let inc = 0;
    let exp = 0;

    transactions.forEach((t) => {
        if (t.type === "income") inc += t.amount;
        else exp += t.amount;
    });

    return {
        inc,
        exp,
        balance: inc - exp,
    };
};

export const getTopCategory = (transactions: Transaction[]) => {
    const map: Record<string, number> = {};

    transactions.forEach((t) => {
        if (t.type === "expense") {
            map[t.category] = (map[t.category] || 0) + t.amount;
        }
    });

    const sorted = Object.entries(map).sort((a, b) => b[1] - a[1]);
    return sorted[0];
};