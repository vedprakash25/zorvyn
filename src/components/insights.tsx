import { useFinance } from "../context/finContext";
import { getTopCategory } from "../utils/calculation";

const Insights: React.FC = () => {
    const { transactions } = useFinance();
    const top = getTopCategory(transactions);

    return (
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mt-4">
            <h3 className="font-semibold mb-2">Insights</h3>

            {top ? (
                <p className="text-sm text-gray-600">
                    You spent most on{" "}
                    <span className="font-medium">{top[0]}</span> (₹{top[1]})
                </p>
            ) : (
                <p className="text-gray-500">No insights available</p>
            )}
        </div>
    );
};

export default Insights;