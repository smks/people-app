import axios from 'axios';

const GET_PEOPLE_ENDPOINT = `https://jsonplaceholder.typicode.com/users`;

class API {
  constructor(api) {
    this.api = api;
  }

  getPeople = () => {
    return this.api.get(GET_PEOPLE_ENDPOINT);
  };
}

export default new API(axios);
