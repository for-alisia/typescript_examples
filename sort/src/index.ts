import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';
import { LinkedList } from './LinkedList';

/** Numbers */
const collection = new NumbersCollection([2, 5, 1, -8, 0, 12, 3, -2]);
collection.sort();
console.log(collection.data);

/** String */
const charactersCollection = new CharactersCollection('jhbhBxsxawe');
charactersCollection.sort();
console.log(charactersCollection.data);

/** LinkedList */
const linkedList = new LinkedList();
linkedList.add(8);
linkedList.add(2);
linkedList.add(10);
linkedList.add(4);

linkedList.sort();
linkedList.print();
