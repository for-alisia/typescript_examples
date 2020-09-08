import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';
import { LinkedList } from './LinkedList';
import { Sorter } from './Sorter';

/** Numbers */
const collection = new NumbersCollection([2, 5, 1, -8, 0, 12, 3, -2]);
const sorterNumbers = new Sorter(collection);
sorterNumbers.sort();
console.log(collection.data);

/** String */
const charactersCollection = new CharactersCollection('jhbhBxsxawe');
const sorterString = new Sorter(charactersCollection);
sorterString.sort();
console.log(charactersCollection.data);

/** LinkedList */
const linkedList = new LinkedList();
linkedList.add(8);
linkedList.add(2);
linkedList.add(10);
linkedList.add(4);

const sorterLinks = new Sorter(linkedList);
sorterLinks.sort();
linkedList.print();
