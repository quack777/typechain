import { timeStamp } from "console";
import * as CryptoJS from "crypto-js";

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string =>
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(
  0,
  "2022222222022",
  "",
  "hello",
  202202010555
);

let blockChain: [Block] = [genesisBlock];

const getBlockchain = (): Block[] => blockChain;

const getLatestBlock = (): Block => blockChain[blockChain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLatestBlock();
  const newIndex: number = previousBlock.index + 1;
  const newTimeStmap: number = getNewTimeStamp();
  const newHash: string = Block.calculateBlockHash(
    newIndex,
    previousBlock.hash,
    newTimeStmap,
    data
  );
  const newBlock: Block = new Block(
    newIndex,
    newHash,
    previousBlock.hash,
    data,
    newTimeStmap
  );
  return newBlock;
};

console.log(createNewBlock("hello"), createNewBlock("bye bye"));

export {};
