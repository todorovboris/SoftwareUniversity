'use strict';
// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
//
//                          Internal Object Properties
//  • Every object field has 4 properties to identify how it works:
//      - Enumerable (броимост) - can access to all of them => for..in / Object.keys;
//      - Configurable - can MODIFY the BEHAVIOR of the property; you CAN DELETE only CONFIGURABLE properties;
//      - Writable - can MODIFY their VALUES;
//      - Value - hold the value;
const myPerson = {
    name: 'Peter',
    age: 27,
};

//  • invoke the 4 properties of the object
console.log('return the 4 properties of our object:', Object.getOwnPropertyDescriptors(myPerson));

//  • if we want to update some of the property :
Object.defineProperty(myPerson, 'name', {
    value: 'Peter',
    writable: true,
    enumerable: true,
    configurable: true,
});
//    Object.defineProperty(var1, var2, var3);
//    - var1: the object we want to modify;
//    - var2: the property we want to modify;
//    - var3: object with the property descriptor(the attributes);
//
//    writable: if false => we can NOT change the value;
//    enumerable: if false => we can NOT dispaly the key, but is itterable(keep in the background);
//    configurable: if false => we can NOT update any of the other properties(except the value, it COULD BE updated);

//  • we could access only the one of the properties we want to modify:
Object.defineProperty(myPerson, 'name', {
    writable: false,
});
//    myPerson.name = 'Boris'; => will throw an error(BUT only if place 'use strict' in the begining of the file);
Object.defineProperty(myPerson, 'name', {
    writable: true,
});

//  • we could use defineProperty for adding new property:
Object.defineProperty(myPerson, 'position', {
    value: 'programmer',
});
//   !!!! if we DIDNT PASS the other properties, they hhave defalt values FALSE !!!
console.log('after adding the new property "position": ', myPerson);

console.log('----------------------------');
console.log('');

// -----------------------------------------------------------------------------------
//
//                          Inheritance
//  • reuse of the code:
//      - Single Inheritance;
//      - Multilevel Inheritance;
//      - Hierarchical Inheritance;
//      - Multiple Inheritance;

// -----------------------------------------------------------------------------------
//
//                          The Prototype
//  • Every object in JS has a prototype(template)
//  • Reference to another object which are linked each other;
const myObj = {
    name: 'parent object',
    hasOwnProperty(propName) {
        return 'i have it';
    },
};
//  • Access by 2 ways:
//      - __proto__ => only for debugging and should NEVER be used in production code;
//      - Object.getPrototypeOf(obj);
console.log(myObj.__proto__);
console.log(Object.getPrototypeOf(myObj));
console.log('have property "name"? => ', myObj.hasOwnProperty('name'));

//      - Object.setPrototypeOf(obj1, obj2);
const animal = {
    sound: 'Generic animal sound',
    soundFunction() {
        console.log(`${this.sound}`);
    },
};
const dog = { bark: 'Woof!' };
// Задаване на прототип на обекта dog като animal
Object.setPrototypeOf(dog, animal);
// Сега dog може да използва стойностите и метода от animal
console.log(dog.sound); // Резултат: "Generic animal sound"
console.log(dog.bark); // Резултат: "Woof!"
dog.soundFunction(); // Резултат: "Generic animal sound"

console.log('----------------------------');
console.log('');

// -----------------------------------------------------------------------------------
//
//
//                          Class Inheritance(класово наследяване)
//  • design pattern;
//  • classes mean - creating copies;
//      • when instantied - a copy from class to instance;
//      • when inherited - a copy from parent to child;
//  • it has many drawbacks and limitation - composition should be prefered whenever possible!
//  • classes can inherit(extend) other classes;
//      • child class inherits data + methods from its parent;
//  • Child class can:
//      - add properties(data)
//      - add/replace methods
//      - add/replace acces properties;
//  • use THE KEYWORD extends:
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {
        return `${this.firstName} says hello!`;
    }
}
// define new class, which inherit the methods and properties of class Person:
class Employee extends Person {
    constructor(firstName, lastName, position) {
        //the CONSTRUCTOR IS OPTIONAL, but if we want to create, use the key word ""super" to pass the params to above:
        super(firstName, lastName);
        // this should be ALWAYS after super
        this.position = position;
    }

    // use super if we want to invoke metehods and update them:
    sayHello() {
        return `The ${this.position} ${super.sayHello()}`;
    }

    printInfo() {
        return `${this.lastName}, ${this.firstName}`;
    }
}
const myEmployee = new Employee('John', 'Smith', 'teacher');
console.log(myEmployee);
console.log(myEmployee.sayHello());
console.log(myEmployee.printInfo());

console.log('myEmployee instance of Employee? - ', myEmployee instanceof Employee);
console.log('myEmployee instance of Person? - ', myEmployee instanceof Person);
console.log('myEmployee instance of Object? - ', myEmployee instanceof Object);

console.log(myEmployee.__proto__);
console.log(myEmployee.__proto__.__proto__);
console.log(myEmployee.__proto__.__proto__.__proto__);
console.log(myEmployee.__proto__.__proto__.__proto__.__proto__);

const myPerson2 = new Person('Boris', 'Todorov');
console.log('invoke sayHello() function - ', myPerson2.sayHello());
console.log('after update the sayHello() function - ', myEmployee.sayHello());
