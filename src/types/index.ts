export type TransactionType = "income" | "expense";

export interface Transaction {
  id: number;
  date: string;
  amount: number;
  category: string;
  type: TransactionType;
}

export interface Filters {
  search: string;
  type: "all" | TransactionType;
}

export type Role = "viewer" | "admin";
