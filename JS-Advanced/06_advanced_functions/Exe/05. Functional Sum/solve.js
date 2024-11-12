function add(n) {
    // Internal sum stored in a closure
    let sum = n;

    // Function to keep adding numbers
    function inner(x) {
        sum += x;
        return inner; // Return the same function to allow chaining
    }

    // Overwrite the toString method to return the current sum when called
    inner.toString = function () {
        return sum;
    };

    return inner; // Return the function to start chaining
}

console.log(add(1)(6)(-3).toString());
