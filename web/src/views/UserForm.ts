import { User } from '../models/User';
import { View } from './View';
export class UserForm extends View<User> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');

    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>${this.model.get('name')}</div>
        <div>${this.model.get('age')}</div>
        <input />
        <button class="set-name">Update name</button>
        <button class="set-age">Set random age</button>
      </div>
    `;
  }
}
