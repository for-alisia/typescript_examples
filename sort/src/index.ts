import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const collection = new NumbersCollection([2, 5, 1, -8, 0, 12, 3, -2]);
const sorter = new Sorter(collection);
sorter.sort();
console.log(collection.data);

const stringToSort = new CharactersCollection('jhbhBxsxawe');
const sorterString = new Sorter(stringToSort);
sorterString.sort();
console.log(stringToSort.data);
