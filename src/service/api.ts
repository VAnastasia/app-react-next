import axios, { AxiosInstance } from 'axios';
import {Transaction, Category} from '../types';

const BASE_URL = 'http://localhost:8080';

class API {
  _api: AxiosInstance

  constructor(baseURL: string) {
    this._api = axios.create({
      baseURL
    })
  }

  async fetchCategories() {
    try {
      const response = await this._api.get('/categories');
      return response;
    } catch (error) {
      console.log(error)
    }
  }

  async createCategory(form: Category) {
    try {
      const result = await this._api.post('/categories', form);
      if (result.status === 201) {
        return true;
      };
      return false;
    } catch (error) {
      console.log(error)
    }
  }

  async fetchTransactions() {
    try {
      const response = await this._api.get('/transactions');
      return response;
    } catch (error) {
      console.log(error)
    }
  }

  async createTransaction(form: Transaction) {
    try {
      const result = await this._api.post('/transactions', form);
      if (result.status === 201) {
        return true;
      };
      return false;
    } catch (error) {
      console.log(error)
    }
  }
}

const api = new API(BASE_URL);

export {api};
