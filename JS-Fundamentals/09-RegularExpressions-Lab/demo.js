// regexr.com, regex101.com
// [A-Z]
// RegEx -> шаблон, който се използва за търсене на нещо в текст
// [0-9]+ -> селектирай всички цифри от 0 до 9 в един текст;
// [A-Z][a-z]* -> електира всички главни букви и всички малки букви в един текст

//-------------------------------------------------------------------------------------------------

let text1 = 'Boris Todorov';
// [A-Z][a-z]                -> да имаме 1 съвпадение на главна с малка буква -> връща "Bo", "To";
// [A-Z][a-z]+               -> да има 1 или повече съвпадения на главна с малка буква -> връща "Boris", "Todorov";
// [A-Z][a-z]+ [A-Z][a-z]+   -> да има 1 или повече съвпадения на главна с малка буква(2 times) -> връща "Boris Todorov";

// [osd]+                    -> кои символи ИСКАМЕ да таргетираме;
// [^osd]                    -> кои символи НЕ ИСКАМЕ да таргетираме;

// \w     -> таргетира думичка;
// \W     -> таргетира всичко, КОЕТО НЕ Е думичка (реципрочното на \w);
// \s     -> таргетира спейсовете;
// \S     -> таргегира всичко, КОЕТО НЕ Е спейс;
// \d     -> таргетира всички децимали;
// \D     -> таргетира всичко, КОЕТО НЕ Е децимал

// \+\d*    -> таргетиране на плюс и цифра след него 0+ пъти
// \+\d+    -> таргетиране на плюс и цифра след него 1+ пъти
// \+\d?    -> таргетиране на плюс и цифра след него 0 или 1 пъти
// \+\d{3}  -> таргетиране на плюс и 3 цифри след него
// \bword\b -> Това ще намери "word" само като отделна дума.
// \bword   -> Това ще намери "word" само ако е в началото на дума, например в "wordsmith", но не и в "password".
// word\b   -> Това ще намери "word" само ако е в края на дума, например в "password", но не и в "wordsmith".

//-------------------------------------------------------------------------------------------------

// subexpression:
// (\d{2})-(\w{3})-(\d{4})                       -s> ще таргетира примерно това: 04-Jun-1992

// (?:subexpression) - с ? можем да дефинираме изрази, които са трудни за проследяване:
// ^(?:Hi|hello),\s*(\w+)$                       -> ще таргетира примерно това: "hello, Bris"

// (?<name>subexpression)                        -> таргетира групи, на които им задаваме конкретни имена
// (?<day>\d{2})-(?<month>\w{3})-(?<year>\d{4}   -> ГРУПИРАНЕ: слагаме имене на всяка от 3те групи: Group day; Group month; Group year;

//-------------------------------------------------------------------------------------------------

//
//
// Дефиниране на REGEX in JS:
let newRegEx = new RegExp('[A-Za-z]+', 'g');

// 1) .test(string) -> определя дали имаме съвпадение, връща TRUE / FALSE;
let regexPattern1 = /(\d{2})-(\d{2})-(\d{4})/g; // инструкциите се слагат между / /, а "g" означава глобално, да се търси в целият текс;
let text21 = 'today is 29-07-2024 and it is very hot out there';
let text22 = 'today is 29-Jul-2024 and it is very hot out there';
console.log(regexPattern1.test(text21)); // true
console.log(regexPattern1.test(text22)); // false
console.log('-------------------');

//-------------------------------------------------------------------------------------------------

let text3 = 'Boris: 32 Marina: 37';
let regexPattern = /(?<name>[A-Z][a-z]+): (?<age>\d+)/g;

// 2) .match(regexp) -> връща масив с всички съвпадения;
let matches = text3.match(regexPattern);
console.log(matches); //        масив с 2 елемента
console.log(matches.length); // 2
console.log(matches[0]); //     Boris: 32
console.log(matches[1]); //     Marina: 37
console.log('-------------------');

// 3) .exec(string)   -> екзекютва колкото съвпадения намери
let firstMatch = regexPattern.exec(text3); //  -> взима първото съвпадение и го екзекютва в масив с няколко вида данни
let secondMatch = regexPattern.exec(text3); // -> взима второто съвпадение и го екзекютва в масив с няколко вида данни
console.log(firstMatch); //     ['Boris: 32', 'Boris', '32']
console.log(firstMatch[1]); //  Boris
console.log(secondMatch); //     ['Marina: 37', 'Marina', '37']
console.log(secondMatch[2]); //  37
console.log(firstMatch.groups); // с .GROUPS създаваме обект с ключ(името на групата) и стойността, която стои при всяка група (може да се ползва и при .match())
console.log('-------------------');

// 4) .replace(regexp, stringReplacement)  -> заменя всички стрингове, които отговарят на шаблона, с дадения риплейсмент
let replacement = '1234';
let regexPattern2 = /\d{2}/g;
let result = text3.replace(regexPattern2, replacement);
console.log(result); // Boris: 1234 Marina: 1234
console.log('-------------------');

//-------------------------------------------------------------------------------------------------

// 5) matchAll(regexp)
let text4 = 'test1234test5678';
let regex = /t(e)(st(\d?))/g;
let match = text4.match(regex); //            връща масив с първия(основен) вид съвпадение, което намери['test1', 'test5']
let matchAll = [...text4.matchAll(regex)]; // връща масив с всички видове съвпадения, които намери
console.log(match);
for (const m of matchAll) {
    console.log(m); //
}
console.log('-------------------');

//-------------------------------------------------------------------------------------------------

// 6) .split(regexp)
const text5 = '1     2    14';
const regexPattern3 = /\s+/g;
const resultSplit = text5.split(regexPattern3);
console.log(resultSplit); // сплитва по спейс, без значение колко е дълъг
console.log('-------------------');
