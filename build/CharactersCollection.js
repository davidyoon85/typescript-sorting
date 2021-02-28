"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(collection) {
        this.collection = collection;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.collection.length;
        },
        enumerable: false,
        configurable: true
    });
    CharactersCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.collection[leftIndex].toLowerCase() > this.collection[rightIndex].toLowerCase();
    };
    CharactersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var characters = this.collection.split("");
        var temp = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = temp;
        this.collection = characters.join("");
    };
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
