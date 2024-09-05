
import { RESTDataSource } from '@apollo/datasource-rest';

class MyAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://jsonplaceholder.typicode.com/';
  }

  async getUser(id) {
    return this.get(`users/${id}`);
  }
}

export default MyAPI;

