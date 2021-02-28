import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { Sorter } from "./Sorter";

// const collection = new NumbersCollection([-10, 9, -4, 6]);
const collection = new CharactersCollection("xYaZ");
const sorter = new Sorter(collection);
sorter.sort();
console.log(sorter.collection);
