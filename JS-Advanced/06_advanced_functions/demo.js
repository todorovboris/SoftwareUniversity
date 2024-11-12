// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
//
//                          Execution Context (this)
//
//  - determines what is the value of "this" in a specific function
function logThis(msg) {
    console.log('Execution context:', msg, this);
}
//
//  - value of "this" depends on how we invoke the function:
// --------------------------------------------------------------------------
//      - in GLOBAL SCOPE:
logThis('global;'); // this = global scope
//
// --------------------------------------------------------------------------
//      - Object method:
const obj = {
    name: 'Context',
    logThis,
};
obj.logThis('object method;'); // this = obj
//
// --------------------------------------------------------------------------
//
//      - DOM Event: element.addEventListener('clicl', logThis);
//
// --------------------------------------------------------------------------
//      - Using call() / apply() / bind() => manually determines the value of this, using these methods;
const person = {
    name: 'Boris',
    age: 32,
};
obj.logThis.call(person, 'call method;'); // this = person
obj.logThis.apply(person, ['apply method;']); // this = person
//
// !!!!    call() and apply() are almost the same, just the list with params, used with apply, should be given in array    !!!!!
//
//          bind():
//          - създава нова функция, в която контекстът this е фиксиран към даден обект;
//          - bind() не извиква функцията веднага, а връща нова функция, която може да бъде извикана по-късно с фиксиран контекст;
const person2 = { name: 'Borka' };
const bindExample = logThis.bind(person2); // => this винаги сочи към person2
bindExample('bind method'); // подаваме по-късно аргументите, НО this ВИНАГИ ще сочи към person2;
//
//
// call() и apply() ни позволяват на момента да сменим контекста и да изпълним директно функцията, то
// bind() вързва контекста за отделна функция, а ние можем да я изпълним някъде в бъдеще
//
// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
//
//                          Closure
//
//  - когато имаме вложена ф-я в друга ф-я, вложената вижда същите променливи, които са декларирани в същия скоуп и тя има достъп до тях;
//  -
//
