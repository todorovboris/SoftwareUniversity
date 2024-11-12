const arrNums = [1, 2, 3, 4];
console.log('Оригиналният масив: ', arrNums);

// ФУНКЦИИ на масива
arrNums.push('5', '-3', '13'); // ДОБАВЯ елемент в КРАЯ на масива;
arrNums.unshift('0', '44'); // ДОБАВЯ елемент в НАЧАЛОТО на масива;
arrNums.pop(); // ПРЕМАХВА и ВРЪЩА елемента от КРАЯ на масива
arrNums.shift(); // ПРЕМАХВА и ВРЪЩА елемента от началото на масива;
console.log('Масивът след добавяне и премахване на елементи: ', arrNums);
console.log('');

arrNums.includes(); // проверка дали дадей елемент е част от масива, връща TRUE / FALSE;
arrNums.indexOf(); // връща индексът, на който се намира търсен елемент; АКО този елемент НЕ ПРИСЪСТВА, ВРЪЩА -1;
console.log('Имаме ли 100 в нашия масив: ', arrNums.includes(100));
console.log('Индексът на "44" се намира на : ', arrNums.indexOf(44));
console.log('Индексът на "0" се намира на : ', arrNums.indexOf(0));
console.log('------------------------');
console.log('');

//-------------------------------------------------------------------------------------------------

// МАНИПУЛИРАНЕ на масива
//                0       1      2        3        4       5
const arrText = ['edno', 'dve', 'tri', 'chetiri', 'pet', 'shest'];
console.log('Оригиналният масив: ', arrText);
console.log('');

// slice() - ОРИГИНАЛНИЯТ масив НЕ СЕ променя !!!
console.log('.slice(4):     ВРЪЩА -> ', arrText.slice(4)); // КОПИРА вс. ел. от даден индекс до края и ги записва в нов масив;
console.log('.slice(1, 3):  ВРЪЩА -> ', arrText.slice(1, 3)); // КОПИРА ел. от (нач. инд.(вкл), до краен инд.(без)) и ги записва в нов масив;
console.log('.slice(-3):    ВРЪЩА -> ', arrText.slice(-3)); // КОПИРА последните 3 елемента и ги записва в нов масив;
console.log('');
console.log('------------------------');
// splice(START INDEX, HOW MANY ITEMS TO DELETE, ITEMS TO ADD) - ОРИГИНАЛНИТ масив СЕ променя !!!
console.log('Оригиналният масив: ', arrText);
console.log('');
console.log('.splice(4)                     ВРЪЩА -> ', arrText.splice(4)); // ИЗРЯЗВА и ВРЪЩА вс. ел, считано от индекс 4 в нов масив;
console.log('original: ', arrText);
console.log('');
console.log('.splice(1, 2)                  ВРЪЩА -> ', arrText.splice(1, 2)); // ИЗРЯЗВА и ВРЪЩА 2 ел, считано от индекс 1 в нов масив;
console.log('original: ', arrText);
console.log('');
console.log('.splice(0, 1, "nula")          ВРЪЩА -> ', arrText.splice(0, 1, 'nula')); // ИЗРЯЗВА и ВРЪЩА 1 ел. от индекс 0 и на негово място вмъква "nula";
console.log('original: ', arrText);
console.log('');
console.log('.splice(0, 1, "dve", "tri")    ВРЪЩА -> ', arrText.splice(0, 1, 'dve', 'tri')); // ИЗРЯЗВА и ВРЪЩА 1 ел. от индекс 0 и на негово място вмъква "dve" и "tri";
console.log('original: ', arrText);
console.log('------------------------');
console.log('');

//-------------------------------------------------------------------------------------------------

// ТРАНСФОРМИРАНЕ на масиви

const arrNames = ['Boris', 'Marina', 'Stoyan', 'Geno'];
const arrNumsStr = ['1', '2', '3', '4'];

// map() - съзздава нов масив, като трансоформира всички елементи от оригиналния;
console.log('Оригиналният масив: ', arrNames);
const callbackFun = (x) => x.length;
console.log('.map((x) => x.length)            ВРЪЩА -> ', arrNames.map(callbackFun));
console.log('');
console.log('Оригиналният масив: ', arrNumsStr);
console.log('.map(Number)                     ВРЪЩА -> ', arrNumsStr.map(Number)); // преобразува всички цифри(ако са текст) в числа
console.log('');

// filter() - създава нов масив, с елементи, които отговарят на дадено условие;
let longWords = arrNames.filter((x) => x.length > 5);
console.log('Оригиналният масив: ', arrNames);
console.log('.filter((x) => x.length > 5      ВРЪЩА -> ', longWords);
console.log('');

// sort() - сортира елементите на масив
const sortedNums = [0, 5, 8, 1, -3, 4, 10, 2];
console.log('Оригиналният масив: ', sortedNums);
console.log(sortedNums.sort((a, b) => a - b)); // сортира числата възходящо
console.log(sortedNums.sort((a, b) => b - a)); // сортира числата низходящо
console.log('');
const sortedStr = ['b', 'h', 'z', 'k', 'a', 'i', 'o'];
console.log('Оригиналният масив: ', sortedStr);
console.log('.sort()                              -> ', sortedStr.sort()); // при стрингове по дефолт сортира възходящо по азбучен ред;
let ascending = sortedStr.sort((a, b) => a.localeCompare(b));
console.log('.sort((a, b) => a.localeCompare(b))  -> ', ascending); // алтернатива за сортиране възходящо;
let descending = sortedStr.sort((a, b) => b.localeCompare(a));
console.log('.sort((a, b) => b.localeCompare(a))  -> ', descending); // сортира низходящо;

//-------------------------------------------------------------------------------------------------
