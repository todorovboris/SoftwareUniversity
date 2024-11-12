class Peson {
    firstName;
    lastName;
    age;
    email;

    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}

const person = new Peson('Peter', 'Marinov', 18, 'pesho18@abv.bg');
console.log(person.toString());
