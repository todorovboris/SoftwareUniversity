function solve() {
    class Person {
        firstName;
        lastName;
        age;
        email;

        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age !== undefined && !isNaN(Number(age)) ? Number(age) : undefined;
            this.email = email ?? undefined;
        }

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }
    const p1 = new Person('Anna', 'Simpson', '22', 'anna@yahoo.com');
    const p2 = new Person('SoftUni');
    const p3 = new Person('Stephan', 'Johnson', '25');
    const p4 = new Person('Gabriel', 'Peterson', '24', 'g.p@gmail.com');

    return [p1, p2, p3, p4];
}

console.log(solve());
