class List {
    constructor() {
        this.size = 0;
        this.result = [];
    }

    add(element) {
        this.result.push(element);
        this.size++;
        this.result.sort((a, b) => a - b);
    }

    remove(index) {
        if (index >= this.size || index < 0) {
            throw new Error('invalid index');
        }

        this.result.splice(index, 1);
        this.size--;
        this.result.sort((a, b) => a - b);
    }

    get(index) {
        if (index >= this.size || index < 0) {
            throw new Error('invalid index');
        }

        return this.result[index];
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));

// console.log(list);
