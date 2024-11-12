// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
//
//                          Defining Classes
//
//  - шаблон за създаване(дефиниране) на обекти;
//  - шаблонът ни дава:
//      • списък от свойства и евентуално някакви първоначални стойности;
//      • списък с действия(методи);
//  - един клас може да има множество инстанции(обекти) => поведението им ще е едно и също, но данните ще са различни;
// -----------------------------------------------------------------------------------

class Person {
    //  • normal property listing:
    firstName;
    lastName;
    //  • we also could set a default values of the properties:
    SSN = null;

    //  • constructor method that we define once the class is created:
    constructor(firstName, lastName) {
        this.id = Person.lastId++;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    //  • the class could have other behavior(method):
    sayHello() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}. Nice to meet you!`);
    }

    //  • each class could have a STATIC METHOD, which applies TO THE CLASS, NOT the instance !!!
    static formatName(person) {
        return `${person.lastName}, ${person.firstName}`;
    }
    static parse(dataJson) {
        const data = JSON.parse(dataJson);
        const instance = new Person(data.firstName, data.lastName, data.email);
        return instance;
    }
    //  • each class could have a STATIC properties
    static lastId = 0;
}

//  - create a new instance to the class Person:
const myPerson1 = new Person();
// adding values to the class:
myPerson1.firstName = 'Boris';
myPerson1.lastName = 'Todorov';
console.log('adding the values additionaly:', myPerson1);

//  - or using the constructor, once we call the instance
const myPerson2 = new Person('Boris', 'Todorov');
console.log('adding the values using the constructor:', myPerson2);
//  - we can call the methods from inside of the class:
myPerson2.sayHello();
console.log('----------------------------');
console.log('');

// -----------------------------------------------------------------------------------

//  - call the static methods as part of the class and then submit the instance:
console.log('The static method: ', Person.formatName(myPerson2));
console.log('The static property lastID: ', Person.lastId);
const personData = `{
    "firstName": "Todor",
    "lastName": "Todorov",
    "age": "65",
    "email": "todor@zara.com"
}`;
const personFromParser = Person.parse(personData);
console.log('log the Person from static parser: ', personFromParser);
console.log('----------------------------');
console.log('');

// -----------------------------------------------------------------------------------

//  - Accessor Properties
//      - начин дадено свойство да се държи, като метод;
//      - когато стойността на свойството зависи от други данни в класа;
//      - чрез метода get - set;

class Circle {
    r;

    // чрез get залагаме нови свойства, които завсият от декларираните вече:
    get d() {
        return this.r * 2;
    }

    // използвайки set можем да зададем нови стойности на другото свойство:
    set d(value) {
        this.r = value / 2;
    }

    constructor(r) {
        this.r = r;
    }
}

// задаваме стойност на r
const myCircle = new Circle(2);
console.log('access the radius after initialize the r : ', myCircle.r);
console.log('access the diameter after initialize the r: ', myCircle.d);

// слагайки нова стойност на d, чрез set метода можем да ъпдейтнем и r:
myCircle.d = 8;
console.log('access the radius after initialize the d : ', myCircle.r);
console.log('access the diameter after initialize the d: ', myCircle.d);
console.log('----------------------------');
console.log('');

// -----------------------------------------------------------------------------------

//  - DOM Classes
//      - всички ДОМ обекти са инстанции на стандартните ДОМ клаасове;
//      - те предоставят много полезни методи и свойства:
//          • addEventListener
//          • appendChild
//          • remove
//          • parentNode
//          • textContent etc.
//      - Допълнителни методи:
//          • cloneNode(deep) - прави клонинг, копие 1/1:
//          const duplicate = divElement.cloneNode(true);
//
//          • replaceWith() - заменя селектирания елемент с друг
//          const span = document.createElement('div);
//          divElement.replaceWith(span);
//
//          • before() - ВМЪКВА елемент ПРЕДИ селектрания node
//          • after() - ВМЪКВА елемент СЛЕД селектрания node
//          • classList - връща масив от токени;
//          • getAttribute() - връща стойността на даден атрибут;
//          • setAttribute() - задаваме стойността на даден атрибут;
//          • removeAttribute() - изтрива даден атрибут от HTML елемент;
//          • hasAttribute() - проверява дали даден атрибут съществува, връща true/false;
//
//          • dataset - специален начин за създаване на атрибут; създаваме наш си атрибут;

// -----------------------------------------------------------------------------------

//  - Map
let map = new Map();

map.set('key1', '1'); /// добавяне на елементи към Мап-а
map.set('key2', 2); /// добавяне на елементи към Мап-а
map.set(3, 'Boris'); /// добавяне на елементи към Мап-а;

console.log('value of key "key1": ', map.get('key1')); // връща стойността на искания ключ
console.log('value of key "3": ', map.get(3)); // връща стойността на искания ключ;
console.log('map size: ', map.size); // връща броя на елементи в мапа

console.log('do we have a key "3" => ', map.has(3)); //проверява и връща дали в мап имаме търсеното key
console.log('do we have a key "Boris" => ', map.has('Boris')); //проверява и връща дали в мапа имаме търсеното key

// map.delete(2);  //изтрива key-value двойката с посочения key
// map.clear();    //изтрива целият мап

let arr = Array.from(map.entries()); //връща всяка двойка key-value в масив;
let keys = Array.from(map.keys()); //връща всички key в масив;
let values = Array.from(map.values()); //връща всички value в масив;
