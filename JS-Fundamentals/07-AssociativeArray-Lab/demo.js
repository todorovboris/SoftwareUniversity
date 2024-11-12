// let book = { Boris: '1234', Marina: '5678', Fred: '4321', Atanas: '6789' };

// let bookArr = Object.entries(book);
// console.log(bookArr);

// let bookSorted = bookArr.sort((a, b) => a[0].localeCompare(b[0]));
// console.log(bookSorted);

/// --------------------------------------------------------------------------------

let map = new Map();

map.set(2, 'Boris'); /// добавяне на елементи към Мап-а
map.set('dve', 10); /// добавяне на елементи към Мап-а

console.log(map.get('dve')); // връща стойността на искания ключ
console.log(map.get(2)); // връща стойността на искания ключ
console.log(map.size); // връща броя на елементи в мапа

let check1 = map.has(2); //проверява и връща дали в мап имаме търсеното key
let check2 = map.has('Boris'); //проверява и връща дали в мапа имаме търсеното key

// map.delete(2);  //изтрива key-value двойката с посочения key
// map.clear();    //изтрива целият мап

let arr = Array.from(map.entries()); //връща всяка двойка key-value в масив;
let keys = Array.from(map.keys()); //връща всички key в масив;
let values = Array.from(map.values()); //връща всички value в масив;

/// --------------------------------------------------------------------------------

// нначин1 за обхождане и принтиране на мапа
for (const key1 of keys) {
    console.log(`${key1} => ${map.get(key1)}`);
}
console.log('----------');
// нначин2 за обхождане и принтиране на мап
for (const [key2, value] of map) {
    console.log(`${key2} => ${value}`);
}

/// --------------------------------------------------------------------------------

let sorted = Array.from(map.entries()).sort((a, b) => a[1] - b[1]); //сортиране по ключ
for (const kvp of sorted) {
    console.log(`${kvp[0]} -> ${kvp[1]}`);
} // сортиране на Мап - първо трябва да го конвертираме в масив и след това да сортираме по ключ или по стойност

// console.log(arr);

/// --------------------------------------------------------------------------------
