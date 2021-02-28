"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection_1 = require("./CharactersCollection");
var Sorter_1 = require("./Sorter");
// const collection = new NumbersCollection([-10, 9, -4, 6]);
var collection = new CharactersCollection_1.CharactersCollection("xYaZ");
var sorter = new Sorter_1.Sorter(collection);
sorter.sort();
console.log(sorter.collection);
