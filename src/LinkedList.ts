class Node {
    next: Node | null = null;

    constructor(public value: number) {}
}

export class LinkedList {
    head: Node | null = null;

    add(value: number): void {
        let newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let tail = this.head;

        while (tail.next) {
            tail = tail.next;
        }

        tail.next = newNode;
    }

    length(): number {
        if (!this.head) {
            return 0;
        }

        let length = 1;
        let current = this.head;

        while (current.next) {
            length++;
            current = current.next;
        }

        return length;
    }

    at(index: number): Node {
        if (!this.head) {
            throw new Error("Index out of bounds!");
        }

        let counter = 0;
        let current: Node | null = this.head;

        while (current) {
            if (counter === index) {
                return current;
            }

            counter++;
            current = current.next;
        }

        throw new Error("Index out of bounds!");
    }

    compare(leftIndex: number, rightIndex: number) {
        if (!this.head) {
            throw new Error("List is empty!");
        }

        return this.at(leftIndex).value > this.at(rightIndex).value;
    }

    swap(leftIndex: number, rightIndex: number): void {
        let leftNode = this.at(leftIndex);
        let rightNode = this.at(rightIndex);

        let temp = leftNode.value;
        leftNode.value = rightNode.value;
        rightNode.value = temp;
    }

    print(): void {
        if (!this.head) {
            return;
        }

        let current: Node | null = this.head;

        while (current) {
            console.log(current);
            current = current.next;
        }
    }
}
