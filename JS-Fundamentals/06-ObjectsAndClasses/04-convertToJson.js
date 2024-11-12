function convert(name, lastName, hairColor) {
    let person = {};

    person.name = name;
    person.lastName = lastName;
    person.hairColor = hairColor;

    // console.log(person);
    let personJson = JSON.stringify(person);
    console.log(personJson);
}

convert('George', 'Jones', 'Brown');
