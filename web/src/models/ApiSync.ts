import axios, { AxiosPromise } from 'axios';

interface HasId {
  id?: number;
}

/** Common class to exchange data with server side */
export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise<T> {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise<T> {
    const { id } = data;

    if (id) {
      // put
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      // post
      return axios.post(this.rootUrl, data);
    }
  }
}
