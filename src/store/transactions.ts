import {action, makeAutoObservable, observable} from 'mobx';
import {api} from '../service/api';
import {Transaction} from '../types';

class Transactions {
  @observable transactions = []

  constructor() {
    makeAutoObservable(this)
  }

  @action
  setTransactions = (transactions: Transaction[]) => {
    this.transactions = transactions;
  }

  fetchTransactions = () => {
    api.fetchTransactions()
      .then((response) => {
        this.setTransactions(response.data);
      })
  }
}

const transactionsStore = new Transactions();
export default transactionsStore;
