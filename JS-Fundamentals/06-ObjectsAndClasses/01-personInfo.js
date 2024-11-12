function personInfo(firstName, lastName, age) {
    // let person = {
    //     firstName,
    //     lastName,
    //     age,
    // };

    const person = {};
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;

    return person;
}

console.log(personInfo('George', 'Smith', '18'));
