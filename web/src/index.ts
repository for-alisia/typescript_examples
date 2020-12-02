import { User } from './models/User';

const user = new User({ name: 'Alex', age: 8 });

user.set({ name: 'Alice' });

console.log(user.get('name'));
console.log(user.get('age'));
