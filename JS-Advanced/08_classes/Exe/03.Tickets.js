function solve(arr, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let result = [];
    for (const line of arr) {
        let [destination, price, status] = line.split('|');

        const newDestination = new Ticket(destination, Number(price), status);
        result.push(newDestination);

        // if (criteria === 'destination') {
        //     result.sort((a, b) => a.destination.localeCompare(b));
        // } else if (criteria === 'price') {
        //     result.sort((a, b) => a.price - b.price);
        // } else if (criteria === 'status') {
        //     result.sort((a, b) => a.status.localeCompare(b));
        // }
    }

    result.sort((a, b) => {
        if (criteria === 'price') {
            return a.price - b.price;
        } else {
            return a[criteria].localeCompare(b[criteria]);
        }
    });

    return result;
}

console.log(solve(['Philadelphia|94.20|available', 'New York City|95.99|available', 'New York City|95.99|sold', 'Boston|126.20|departed'], 'destination'));
