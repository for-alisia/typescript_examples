"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection_1 = require("./CharactersCollection");
var NumbersCollection_1 = require("./NumbersCollection");
var LinkedList_1 = require("./LinkedList");
var Sorter_1 = require("./Sorter");
/** Numbers */
var collection = new NumbersCollection_1.NumbersCollection([2, 5, 1, -8, 0, 12, 3, -2]);
var sorterNumbers = new Sorter_1.Sorter(collection);
sorterNumbers.sort();
console.log(collection.data);
/** String */
var charactersCollection = new CharactersCollection_1.CharactersCollection('jhbhBxsxawe');
var sorterString = new Sorter_1.Sorter(charactersCollection);
sorterString.sort();
console.log(charactersCollection.data);
/** LinkedList */
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(8);
linkedList.add(2);
linkedList.add(10);
linkedList.add(4);
var sorterLinks = new Sorter_1.Sorter(linkedList);
sorterLinks.sort();
linkedList.print();
