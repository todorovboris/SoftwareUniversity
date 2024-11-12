(function solve() {
    Array.prototype.last = function () {
        return [...this].pop();
    };

    Array.prototype.skip = function (n) {
        if (typeof n !== 'number') return;
        return this.slice(n);
    };

    Array.prototype.take = function (n) {
        if (typeof n !== 'number') return;
        return this.slice(0, n);
    };

    Array.prototype.sum = function () {
        let sum = 0;
        this.forEach((el) => {
            sum += el;
        });
        return sum;
    };

    Array.prototype.average = function () {
        return this.sum() / this.length;
    };
})();

const testArray = [1, 2, 3];
