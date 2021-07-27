import {action, makeAutoObservable, observable} from 'mobx';
import {api} from '../service/api';
import {Transaction} from '../types';

class Transactions {
  @observable transactions = []

  constructor() {
    makeAutoObservable(this)
  }

  @action
  setTransactions = (transactions: Transaction[]): void => {
    this.transactions = transactions;
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
