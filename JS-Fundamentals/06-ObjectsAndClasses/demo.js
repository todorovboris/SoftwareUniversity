// СТРУКТУРА
let obj1 = {
    x: 'softuni', // "key: value" -> целият ред наричаме property
    y: 6, // "key: value" -> целият ред наричаме property
    z: true,
    v: undefined,
    b: [1, 2, 3, 4],
    a: null,
    q: { name: 'Boris', age: 32 },
    sum: function () {
        return this.x + this.y; //functions in Objects we call method
    },
    speak: function (message) {
        console.log(message); //functions in Objects we call method
    },
};
console.log(Object.keys(obj1)); // връща масив, с ключовете на обекта, като ел. на масив;
console.log(Object.values(obj1)); // връща масив, със стойностите на ключовете на обекта, като ел. на масив;
console.log(Object.entries(obj1)); // създава матрица, в която всеки ключ-стойност са елементи на отделни масиви ;
console.log(Object.entries(obj1)[0]); // връща масивът, който е на 0ва позиция в големия масив -> ключ "х" и ел. "softuni"

// ОБХОЖДАНЕ на ВСЕКИ КЛЮЧ (може да се направо АНАЛОГИЧНО със стойностите);
for (const key of Object.keys(obj1)) {
    console.log(`${key} -> ${obj1[key]}`);
}
console.log('-------------------');
console.log('');

//-------------------------------------------------------------------------------------------------

// ДОСТЪПВАНЕ НА СТОЙНОСТИТЕ на обект
let property = 'x';
console.log(obj1.x); // v1.0
console.log(obj1[property]); // v2.0 - използва се за динамичен начин
// ["x"] = .x
console.log(obj1.sum());
obj1.speak('My name is Boris');
console.log('-------------------');
console.log('');

//-------------------------------------------------------------------------------------------------

// v1.0 - ДОБАВЯНЕ на ключ със стойност към обекет
let dog = {};
dog.name = 'Tosho'; // търси даденият ключ и ако го няма го създава със стойност дадената стойност
dog.name = 'Borko'; // търси даденият ключ и ако съществува презаписва новата стойност (старата я изтрива)
dog.age = 12; // създаваме нов ключ със стойност "12"
dog.bark = function () {
    console.log(`I am ${this.name} on ${this.age} y/o!`);
};
dog.bark(); //извиква функцията на обект dog, която изкарва тест "wof wof wof"

// v2.1 - ДОБАВЯНЕ на ключ със стойност към обекет
function personInfo1(firstName, lastName, age) {
    const person1 = {};
    person1.firstName = firstName;
    person1.lastName = lastName;
    person1.age = age;
    return person1;
}
console.log('');

// v2.2 - ДОБАВЯНЕ на ключ със стойност към обекет
function personInfo2(firstName, lastName, age) {
    const person2 = {
        firstName, // съкратен вариант на firstName: firstName, -> КОГАТО ИМЕТО НА КЛЮЧА И ИМЕТО НА СТОЙНОСТТА СЪВПАДАТ
        lastName, // съкратен вариант на lastName: lastName, -> КОГАТО ИМЕТО НА КЛЮЧА И ИМЕТО НА СТОЙНОСТТА СЪВПАДАТ
        age, // съкратен вариант на firstName: firstName, -> КОГАТО ИМЕТО НА КЛЮЧА И ИМЕТО НА СТОЙНОСТТА СЪВПАДАТ
    };
    return person2;
}

console.log(personInfo1('Boris', 'Todorov', 32));
console.log(personInfo2('Todor', 'Borisov', 65));
console.log('');

// v3.0 - динамично ДОБАВЯНЕ на ключ със стойност към обекет
let catNames = ['Tom', 'Garfield', 'Charly'];
let cat = {};
catNames.forEach((name) => (cat[name] = 0)); // задаваме в обекта cat нови ключове, използвайки динамично елемнтите на масива catNames;
console.log(cat);
console.log('-------------------');
console.log('');

//-------------------------------------------------------------------------------------------------

// Функции (МЕТОДИ)

// ДЕФИНИРАНЕ
let speakObj = {
    // 1)
    speak: function () {
        console.log('hello!');
    },
    // 2)
    speak2() {
        console.log('hello! 2');
    },
    // 3)
    speak3: () => {
        console.log('hello! 3');
    },
};
speakObj.speak();
speakObj.speak2();
speakObj.speak3();
console.log('-------------------');
console.log('');

// ДОБАВЯНЕ на методи КЪМ обекти
const names = {};
// 1)
names.speak = function () {
    console.log('boris');
};
// 2)
names.speak2 = () => console.log('todorov');

names.speak();
names.speak2();
console.log('-------------------');
console.log('');

//-------------------------------------------------------------------------------------------------

// КЛАСОВЕ - темплейт за обектите;

// Дефиниране:
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    present() {
        console.log(`Hi! ${this.model}`); // МЕТОД в класовете
    }
}

const audi = new Car('RS7', 2023); // създаваме нов обект чрез създадения клас
const bmw = new Car('M5', 2024);
bmw.present(); // извикване на МЕТОДА
console.log(audi);

console.log('-------------------');
console.log('');

//-------------------------------------------------------------------------------------------------

// JSON - обект, при който ключовете и стойностите са в двойна кавичка:

let objPerson = {
    name: 'Boris',
    age: 32,
    adress: 'Sofia',
};

console.log(JSON.stringify(objPerson)); //                                   конвертиране на ОБЕКТ КЪМ json
console.log(JSON.parse(`{"name":"Boris","age":32,"adress":"Sofia"}`)); //    конвертиране на JSON КЪМ обект;
