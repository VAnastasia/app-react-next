import {action, makeAutoObservable, observable} from 'mobx';
import {api} from '../service/api';
import {Category} from '../types';

class Categories {
  @observable categories = []

  constructor() {
    makeAutoObservable(this)
  }

  @action
  setCategories = (categories: Category[]) => {
    this.categories = categories;
  }

  fetchCategories = () => {
    api.fetchCategories()
      .then((response) => {
        this.setCategories(response.data);
      })
  }
}

const categoriesStore = new Categories();
export default categoriesStore;
