import { IMappable } from './CustomMap';
import faker from 'faker';

export class User implements IMappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude()
    };
  }

  markerInfo(): string {
    return `<h3>${this.name}</h3>`;
  }
}
