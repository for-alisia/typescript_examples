import { View } from './View';
import { User } from '../models/User';

export class UserShow extends View<User> {
  template() {
    return `
      <div>
        <span>${this.model.get('name')},</span>
        <span>age: ${this.model.get('age')}</span>
      </div>
    `;
  }
}
