"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Node = /** @class */ (function () {
    function Node(value) {
        this.value = value;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    LinkedList.prototype.add = function (value) {
        var newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        var tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = newNode;
    };
    LinkedList.prototype.length = function () {
        if (!this.head) {
            return 0;
        }
        var length = 1;
        var current = this.head;
        while (current.next) {
            length++;
            current = current.next;
        }
        return length;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
