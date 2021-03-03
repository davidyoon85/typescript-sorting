import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
    constructor(public collection: string) {
        super();
    }

    get length(): number {
        return this.collection.length;
    }

    compare(leftIndex: number, rightIndex: number) {
        return this.collection[leftIndex].toLowerCase() > this.collection[rightIndex].toLowerCase();
    }

    swap(leftIndex: number, rightIndex: number): void {
        let characters = this.collection.split("");
        let temp = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = temp;
        this.collection = characters.join("");
    }
}
