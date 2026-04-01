import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import type { Transaction, Filters, Role } from "../types";
import { mockTransactions } from "../data/mock";

interface FinanceContextType {
  transactions: Transaction[];
  filters: Filters;
  role: Role;
  setFilters: (filters: Filters) => void;
  setRole: (role: Role) => void;
  addTransaction: (tx: Transaction) => void;
}

const FinanceContext = createContext<FinanceContextType | undefined>(
  undefined
);

export const FinanceProvider = ({ children }: { children: ReactNode }) => {
  const [transactions, setTransactions] =
    useState<Transaction[]>(mockTransactions);

  const [filters, setFilters] = useState<Filters>({
    search: "",
    type: "all",
  });

  const [role, setRole] = useState<Role>("viewer");

  const addTransaction = (tx: Transaction) => {
    setTransactions((prev) => [...prev, tx]);
  };

  return (
    <FinanceContext.Provider
      value={{
        transactions,
        filters,
        role,
        setFilters,
        setRole,
        addTransaction,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};

export const useFinance = () => {
  const context = useContext(FinanceContext);
  if (!context) throw new Error("useFinance must be used within provider");
  return context;
};