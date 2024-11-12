function cats(catsStr) {
    class Cats {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        introduce() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (const iter of catsStr) {
        const catArr = iter.split(' ');
        const name = catArr[0];
        const age = catArr[1];

        const cat = new Cats(name, age);

        cat.introduce();
    }
}

// cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);
