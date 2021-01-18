import { User } from './models/User';

const user = new User({ name: 'Alex', age: 8 });

user.set({ name: 'Alice' });

user.on('change', () => {
  console.log('Change #1');
});

user.on('change', () => {
  console.log('change #2');
});

user.on('save', () => {
  console.log('save event!!!');
});

user.trigger('noExistEvent');
user.trigger('change');
user.trigger('save');
