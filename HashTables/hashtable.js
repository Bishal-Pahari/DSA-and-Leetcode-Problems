class HashTable {
  // Using a prime number as the size of a hash table enhances
  // optimal distribution of items and minimizes collisions,
  // improving performance and randomness.
  constructor(
    size = 7 // 0-6, total 7, which is prime number
  ) {
    this.dataMap = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      // mulitplied by 23(prime number) for randomness, % by datamap length so that, it will be within range of dataMap.
      // The charCodeAt() method returns the Unicode of the character at a specified index position in string.
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.dataMap[index]) {
      this.dataMap[index] = []; //creating array if only there dont exist empty array
    }
    this.dataMap[index].push([key, value]);
    return this;
  }

  get(key) {
    let index = this._hash(key);
    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) {
          return this.dataMap[index][i][1]; // 0 is key, first element of an array , 1 is value
        }
      }
    }
    return `No such element is present🥲`;
  }

  keys() {
    let allKeys = [];
    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          allKeys.push(this.dataMap[i][j][0]);
        }
      }
    }
    return allKeys;
  }
}

const myHashTable = new HashTable();
myHashTable.set("washers", 2000);
myHashTable.set("pusher", 1500);
myHashTable.set("lumber", 70);

console.log(myHashTable.keys());
console.log(myHashTable);
