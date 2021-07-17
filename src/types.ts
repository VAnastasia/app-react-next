export interface Category {
  id?: number,
  name: string,
  income: boolean,
  expense: boolean
}

export interface Transaction {
  id?: number,
  date: string,
  kind: string,
  category: string,
  source: string,
  sum: number,
  comment: string,
}

