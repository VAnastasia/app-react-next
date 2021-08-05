import {action, makeAutoObservable, observable} from 'mobx';
import {api} from '../service/api';
import {Category} from '../types';

class Categories {
  @observable categories :Category[] = []

  constructor() {
    makeAutoObservable(this)
  }

  @action
  setCategories = (categories: Category[]): void => {
    this.categories = categories;
  }

  fetchCategories = (): void => {
    api.fetchCategories()
      .then((response) => {
        this.setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default Categories;
