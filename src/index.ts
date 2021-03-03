import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { Sorter } from "./Sorter";
import { LinkedList } from "./LinkedList";

// const collection = new NumbersCollection([-10, 9, -4, 6]);
// const collection = new CharactersCollection("xYaZ");
// const sorter = new Sorter(collection);
// collection.sort();
// console.log(collection);

// const charactersCollection = new CharactersCollection("aXbDja");
// charactersCollection.sort();
// console.log(charactersCollection);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();
