function solution(input) {
    return function (num) {
        return input + num;
    };
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
