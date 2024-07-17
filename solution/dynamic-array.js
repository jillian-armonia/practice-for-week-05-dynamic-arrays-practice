class DynamicArray {

  constructor(defaultSize = 4) {
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(this.capacity);

  }

  read(index) {
    return this.data[index]
  }

  unshift(val) {
    if (this.length > 0){
      for (let i = this.length - 1; i >= 0; i--){
        let toReplace = this.data[i];
        this.data[i + 1] = toReplace;
      }
    }

    this.data[0] = val;
    this.length++;
  }

}


module.exports = DynamicArray;
