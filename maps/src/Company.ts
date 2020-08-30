import { IMappable } from './CustomMap';
import faker from 'faker';

export class Company implements IMappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude()
    };
  }

  markerInfo(): string {
    return `<h3>${this.name}: ${this.catchPhrase}</h3>`;
  }
}
