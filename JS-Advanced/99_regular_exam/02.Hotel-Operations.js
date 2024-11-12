class Hotel {
    constructor(initialBudget) {
        this.initialBudget = initialBudget;
        this.roomAvailability = [];
        this.supplyStock = [];
    }

    restockSupplies(supplies) {
        for (const line of supplies) {
            const [product, qty, price] = line.split(' ');
            const supplyObj = { product: product, quantity: Number(qty), price: Number(price) };

            const hasProduct = this.supplyStock.some((obj) => obj['name'] == product);
            if (!hasProduct && this.initialBudget >= supplyObj.price) {
                this.supplyStock.push(supplyObj);
                // return `Successfully stocked ${qty} {supplyName}`;
            }

            // addFlight(flightNumber, destination, departureTime, price) {
            //     const flightObj = { flightNumber, destination, departureTime, price };

            //     const hasFlight = this.flights.some((obj) => obj['flightNumber'] === flightNumber);
            //     if (!hasFlight) {
            //         this.flights.push(flightObj);
            //         return `Flight ${flightObj.flightNumber} to ${flightObj.destination} has been added to the system.`;
            //     } else {
            //         return `Flight ${flightObj.flightNumber} to ${flightObj.destination} is already available.`;
            //     }
            // }

            // if (this.initialBudget < price) {
            //     return `There was not enough money to restock ${qty} ${product}`;
            // }
        }
        return this.supplyStock;
    }
}

let hotel = new Hotel(500);
console.log(hotel.restockSupplies(['Soap 100 50', 'Towels 20 100', 'Shampoo 50 75']));
