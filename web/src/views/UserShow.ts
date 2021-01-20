import { View } from './View';
import { User } from '../models/User';

export class UserShow extends View<User> {
  template() {
    return `
      <div>
        <h1>User Data</h1>
        <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div>
      </div>
    `;
  }
}
