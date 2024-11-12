function lab(arr) {
    const phonebook = {};

    for (const person of arr) {
        const personInfo = person.split(' ');
        const name = personInfo[0];
        const phone = personInfo[1];

        phonebook[name] = phone;
    }

    for (const key in phonebook) {
        console.log(`${key} -> ${phonebook[key]}`);
    }
}

// lab(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']);
lab(['George 0552554', 'Peter 087587', 'George 0453112', 'Bill 0845344']);
