function getFibonator() {
    let a = 0;
    let b = 1;

    return function () {
        let next = b;

        let lastA = a;
        a = b;
        b = lastA + b;

        return next;
    };
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
