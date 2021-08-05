import {action, computed, makeAutoObservable, observable} from 'mobx';
import {api} from '../service/api';
import {Transaction} from '../types';

class Transactions {
  @observable transactions: Transaction[] = []

  constructor() {
    makeAutoObservable(this)
  }

  @action
  setTransactions = (transactions: Transaction[]): void => {
    this.transactions = transactions;
  }

  @computed
  get balanceCash(): number {
    return this.transactions
      .filter((transaction: Transaction) => transaction.source === '2')
      .reduce((total: number, transaction: Transaction) => {
        if (transaction.kind === 'income') {
          total += transaction.sum;
        } else if (transaction.kind === 'expense') {
          total -= transaction.sum;
        }

        return total;
      }, 0)
  }

  @computed
  get balanceCard(): number {
    return this.transactions
      .filter((transaction: Transaction) => transaction.source === '1')
      .reduce((total: number, transaction: Transaction) => {
        if (transaction.kind === 'income') {
          total += transaction.sum;
        } else if (transaction.kind === 'expense') {
          total -= transaction.sum;
        }

        return total;
      }, 0)
  }

  fetchTransactions = (): void => {
    api.fetchTransactions()
      .then((response) => {
        this.setTransactions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default Transactions;
