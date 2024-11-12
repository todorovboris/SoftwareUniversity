// ДЕКЛАРИРАНЕ НА ФУНКЦИЯ:

// 1) Function DECLARATION
function print1(text) {
    console.log(text);
}
// 2) Function EXPRESSION -> функцяиата тук е АНОНИМНА(защото не й задаваме име и не я извикваме никъде)
let print2 = function (text) {
    console.log(text);
};
print1('Text from Function Declaration');
print2('Text from Function Expression');
console.log('------------------------');

function speak() {
    console.log('Hello! These are our solvings');
}
speak(); // ако нямаме зададени параметри при декларирането, не е нужно и да подаваме такива при извикването(само ще изпълни логиката);
console.log('------------------------');

//-------------------------------------------------------------------------------------------------

// РЕКУРСИЯ -> една функция извиква себе си;
// ако нямаме зададено дъно на функцията, ще имаме препълване на стак-а; StackOverflow !!! - подобно на while цикъла
function recursion(x) {
    let y = x * 2;
    if (y < 100) {
        console.log(y);
        recursion(y);
    }
}
recursion(5);
console.log('------------------------');

//-------------------------------------------------------------------------------------------------

// RETURN
// - връща стойност и излиза от функцията
function subtractNums(x, y) {
    return x - y; // връща резултата от зададената логика на мястото, където се извиква тази функция (в console.log-а при solve функцията)
}
let result = subtractNums(88, 18);
console.log(result);

// - могат да се присвоят към някоя променлива и тя да се използва нататък в кода;
const subtract = subtractNums(7, 5);
const finalResult = subtract * 9;
console.log(finalResult);

// - може да се подават функции(колкото искаме на брой), като параметър, в друга функция
function mathPow(numb) {
    return numb ** 2;
}
const powered = mathPow(subtractNums(32, 17) * 2);
console.log(powered);
console.log('------------------------');

//-------------------------------------------------------------------------------------------------

// ВЛОЖЕНИ ФУНКЦИИ - НЕ Е ДОБРЕ да се декларира едната функция в тялото на другата, ДА СЕ ИЗНАСЯТ ОТДЕЛНО
// 1)
function sovle(a, b) {
    if (a > 10) {
        speak(); //  извикваме друга функция, която се изпълнява първа, след което и следващите редове;
        console.log('12 / 6 = ', a / b);
    } else {
        console.log('12 * 6 = ', a * b);
    }
}
sovle(12, 6);
sovle(); // -> ако не сме подали параметри, ВРЪЩА UNDEFINED или NaN (в зависимост от изпълняваната логика)

// 2)
function doubleNum(num) {
    if (num % 2 === 0) {
        return num * 2;
    }
    return num;
}
function solve(numbers) {
    const result = [];
    for (const numb of numbers) {
        result.push(doubleNum(numb));
    }
    console.log(result);
}
solve([1, 2, 3, 4, 5, 6]);
console.log('------------------------');

//-------------------------------------------------------------------------------------------------

// ARROW функции - алтернативен съкратен начин за писане на Function Expression
//
// имаме function expression:
let increment1 = function (x) {
    return x + 100;
};
console.log('From function expression: ', increment1(3));
// същата логика може да се напише на един ред, ИЗПОЛЗВАЙКИ ARROW фунцкия
let increment2 = (x) => x + 100;
console.log('From arrow function:', increment2(5));
//
// 1)
let sum = (a, b) => a + b;
console.log(sum(12, 12));
// 2) - ако имаме някаква по-дълга логика трябва да сложим къдрави скоби след "=>"
const divide = (a, b) => {
    if (a >= b) {
        return a - b;
    }
    return a - b * 2;
};
console.log(divide(8, 3));
console.log(divide(3, 8));
console.log('------------------------');

//-------------------------------------------------------------------------------------------------
