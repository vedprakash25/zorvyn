import { useFinance } from "../context/finContext";
import type { Transaction } from "../types";

const TransactionTable: React.FC = () => {
    const { transactions, filters } = useFinance();

    const filtered: Transaction[] = transactions.filter((t) => {
        return (
            (filters.type === "all" || t.type === filters.type) &&
            t.category.toLowerCase().includes(filters.search.toLowerCase())
        );
    });

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-50 overflow-hidden">
            <table className="w-full text-sm">
                <thead className="bg-gray-100 text-left">
                    <tr>
                        <th className="p-3">Date</th>
                        <th>Category</th>
                        <th>Type</th>
                        <th className="text-right pr-3">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {filtered.map((t) => (
                        <tr key={t.id} className="border-t border-gray-200">
                            <td className="p-3">{t.category}</td>
                            <td >{t.date}</td>
                            <td className="capitalize">{t.type}</td>
                            <td
                                className={`text-right font-medium capitalize pr-3 ${t.type === "income"
                                    ? "text-green-600"
                                    : "text-red-500"
                                    }`}
                            >
                                ₹{t.amount}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {filtered.length === 0 && (
                <p className="p-4 text-center text-gray-500">
                    No transactions found
                </p>
            )}
        </div>
    );
};

export default TransactionTable;