let text1 = 'Boris';
let text2 = 'Todorov';

//-------------------------------------------------------------------------------------------------

text1 += ' '; //concatenating of blank space with text1

console.log(text1 + text2); //concatenating of text1 and text2 - v1.0
console.log(text1.concat(text2)); //concatenating of text1 and text2 - v2.0

console.log('-------------------');

//-------------------------------------------------------------------------------------------------

let text3 = text1 + text2;
console.log(text3.length); //показва дължината на стринга
let ch = text3[0]; // достъпваме до даден индекс от стринга - v1.0 ;expected result: B
console.log(ch);
ch = text3.charAt(text3.length - 1); // достъпваме до даден индекс от стринга - v2.0 ;expected result: v
console.log(ch);
console.log('-------------------');

// for (const letter of text3) {
//     console.log(letter);
// }
// console.log('-------------------');

//-------------------------------------------------------------------------------------------------

let text4 = 'ThisYear is myBestYear';

// indexOf()
console.log(text4.indexOf('Best')); // expected result: 14 -> връща индекса на първата буква от търсенoто буквено съчетание;
console.log(text4.indexOf('is')); // expected result: 2 -> връща индекса на първата буква от търсенoто буквено съчетание /// имаме "is" в "This"
console.log(text4.indexOf('are')); // expected result: -1 -> връща -1, когато няма съвпадение
console.log('-------------------');

// lastIndexOf()
let last1 = text4.lastIndexOf('h'); // expected result: 1 -> връща последния индекс, на който се намира търсената буква
let last2 = text4.lastIndexOf('is'); // expected result: 9 -> връща индекса, на който се намира дадения критерии /// НЕ РАБОТИ КАТО ЧАСТИ ОТ ДРУГА ДУМА !!!!!
console.log(last1);
console.log(last2);
console.log('-------------------');

//-------------------------------------------------------------------------------------------------

// substring(x,y) - извлича текст, който започва от индекс х и завършва до индекс у-1;
console.log(text4.substring(0, 4)); // expected result: "This"  /// substring(startIndex, endIndex) -> връща 0,1,2 и 3ти индекси;
console.log(text4.substring(4, 8)); // expected result: "Year"  /// substring(startIndex, endIndex) -> връща 4,5,6 и 7ми индекси;
console.log('-------------------');

//-------------------------------------------------------------------------------------------------

// replace(search, replacement)
let text5 = 'boris.ivanov.ivanov';
console.log(text5.replace('ivanov', 'todorov')); // замества САМО първият срещнат случай на съвпадение -> НЕ променя оригиналния текст(виж долу)
console.log(text5.replaceAll('ivanov', 'todorov')); // замества ВСИЧКИ случай на съвпадение -> НЕ променя оригиналния текст(виж долу)
console.log(text5); // ".ivanov" е все още на лице!
console.log('-------------------');

//-------------------------------------------------------------------------------------------------

// split(separator)
let text6 = 'Hello my name is Boris Todorov';
console.log(text6.split(' ')); // разделя стринга по спейс и създава масив с отделните думи, като индекси;
console.log(text6.split('')); // разделя стринга според празен спейс и създава масив с отделните думи, като индекси;
console.log('-------------------');

//-------------------------------------------------------------------------------------------------

// includes()
console.log(text6.includes('name')); // търси думата "name" и връща true ако я има
console.log(text6.includes('bike')); // търси думата "bike" и връща false ако я няма
console.log('-------------------');

//-------------------------------------------------------------------------------------------------

// repeat(count)
console.log('*'.repeat(1)); // взима стринга и конкатенира 1 път
console.log('*'.repeat(2)); // взима стринга и конкатенира 2 пъти
console.log('*'.repeat(3)); // взима стринга и конкатенира 3 пъти
console.log('*'.repeat(4)); // взима стринга и конкатенира 4 пъти
console.log('-------------------');

//-------------------------------------------------------------------------------------------------

// trim() -> изчистване на стрингове от празни спейсове, табулации и т.н. от двете страни на стринга
let text7 = '    Boris Todorov      ';
console.log('original: ' + text7);
console.log('trimmed: ' + text7.trim());
console.log('-------------------');

//-------------------------------------------------------------------------------------------------

// startsWith() -> проверява ДАЛИ даден стринг ЗАПОЧВА с даден керъктър
console.log(text6.startsWith('Hello')); //връща true;
console.log(text6.startsWith('hello')); //връща false;
console.log(text6.startsWith('Hello my name')); //връща true;
console.log('-------------------');

// endsWith() -> проверява ДАЛИ даден стринг ЗАВЪРШВА с даден керъктър
console.log(text6.endsWith('Todorov')); //връща true;
console.log(text6.endsWith('Petrov')); //връща false;
console.log(text6.endsWith('is Boris Todorov')); //връща true;
console.log(text6.endsWith('is Boris Petrov')); //връща false;
console.log('-------------------');

//-------------------------------------------------------------------------------------------------

// padStart(); -> добавя символи в началото на низ, докато се достигне определена дължина на целия низ
let text8 = '12345';
console.log(text8.padStart(8, 'nula')); // слага символите В НАЧАЛОТО на ориг. стринг, докато не стигне дължина=8;
console.log(text8.padStart(2, '*')); // ако исканата дължината е по-малка от оригиналния стринг, просто не променя ориг. стринг
console.log('-------------------');

// padEnd(); -> добавя символи към края на низ, докато се достигне определена дължина на целия низ
console.log(text8.padEnd(9, 'shest')); // слага символите В КРАЯ на ориг. стринг, докато не стигне дължина=9;
console.log(text8.padEnd(2, '*')); // ако исканата дължината е по-малка от оригиналния стринг, просто не променя ориг. стринг
console.log('-------------------');

//-------------------------------------------------------------------------------------------------
