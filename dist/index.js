"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Block = /** @class */ (function () {
    function Block(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
    return Block;
}());
var genesisBlock = new Block(0, "2022222222022", "", "hello", 202202010555);
var blockChain = [genesisBlock];
console.log(blockChain);
