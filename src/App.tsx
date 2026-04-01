import { FinanceProvider, useFinance } from "./context/finContext";
import SummaryCard from "./components/summaryCard";
import TransactionTable from "./components/transactionTable";
import Filters from "./components/filter";
import Insights from "./components/insights";
import { getSummary } from "./utils/calculation";
import "./App.css"
import { Sidebar } from "./components/sidebar";

const Dashboard: React.FC = () => {
  const { transactions, role, setRole } = useFinance();
  const { inc, exp, balance } = getSummary(transactions);

  return (
    <div className="min-h-screen flex-1 bg-slate-200 p-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-semibold">Finance Dashboard</h1>

        <select
          className="border py-2 rounded text-sm"
          value={role}
          onChange={(e) => setRole(e.target.value as any)}
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <SummaryCard title="Balance" value={balance} color="text-blue-600" />
        <SummaryCard title="Income" value={inc} color="text-green-600" />
        <SummaryCard title="Expenses" value={exp} color="text-red-500" />
      </div>

      <Filters />
      <TransactionTable />
      <Insights />
    </div>
  );
};

export default function App() {
  return (
    <FinanceProvider>
      <main className="flex">
        <Sidebar />
        <Dashboard />
      </main>
    </FinanceProvider>
  );
}