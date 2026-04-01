import { useFinance } from "../context/finContext";

const Filters: React.FC = () => {
    const { filters, setFilters } = useFinance();

    return (
        <div className="flex gap-4 mb-4">
            <input
                type="text"
                placeholder="Search by category..."
                className="border border-gray-500 p-2 rounded text-sm focus:outline-none"
                value={filters.search}
                onChange={(e) =>
                    setFilters({ ...filters, search: e.target.value })
                }
            />

            <select
                className="border border-gray-500 py-2 rounded focus:outline-none"
                value={filters.type}
                onChange={(e) =>
                    setFilters({
                        ...filters,
                        type: e.target.value as any,
                    })
                }
            >
                <option value="all">All</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
        </div>
    );
};

export default Filters;