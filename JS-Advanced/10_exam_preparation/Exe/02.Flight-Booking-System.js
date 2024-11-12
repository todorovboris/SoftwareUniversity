class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {
        const flightObj = { flightNumber, destination, departureTime, price };

        const hasFlight = this.flights.some((obj) => obj['flightNumber'] === flightNumber);
        if (!hasFlight) {
            this.flights.push(flightObj);
            return `Flight ${flightObj.flightNumber} to ${flightObj.destination} has been added to the system.`;
        } else {
            return `Flight ${flightObj.flightNumber} to ${flightObj.destination} is already available.`;
        }
    }

    bookFlight(passengerName, flightNumber) {
        const bookingObj = { passengerName, flightNumber };

        const hasFlight = this.flights.some((obj) => obj['flightNumber'] == flightNumber);
        const flightObj = this.flights.find((obj) => obj['flightNumber'] == flightNumber);
        // console.log(flightObj);

        if (!hasFlight) {
            return `Flight ${bookingObj.flightNumber} is not available for booking.`;
        } else {
            bookingObj.price = flightObj.price;
            this.bookings.push(bookingObj);
            this.bookingsCount++;
            return `Booking for passenger ${bookingObj.passengerName} on flight ${bookingObj.flightNumber} is confirmed.`;
        }
    }

    cancelBooking(passengerName, flightNumber) {
        const hasBooking = this.bookings.some((obj) => obj['flightNumber'] == flightNumber);
        if (!hasBooking) {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
        } else {
            this.bookingsCount--;
            this.bookings = this.bookings.filter((obj) => obj['flightNumber'] !== flightNumber && obj['passengerName'] !== passengerName);
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
        }
    }

    showBookings(criteria) {
        if (this.bookings.length == 0) {
            throw new Error(`No bookings have been made yet.`);
        }

        if (criteria === 'all') {
            let result = [];
            result.push(`All bookings(${this.bookingsCount}):`);

            for (const book of this.bookings) {
                result.push(`${book.passengerName} booked for flight ${book.flightNumber}.`);
            }

            return result.join('\n');
        }

        if (criteria == 'cheap') {
            const cheapFlights = this.bookings.filter((obj) => obj.price <= 100);

            if (cheapFlights.length == 0) {
                return 'No cheap bookings found.';
            } else {
                let cheapResults = ['Cheap bookings:'];
                for (const flight of cheapFlights) {
                    cheapResults.push(`${flight.passengerName} booked for flight ${flight.flightNumber}.`);
                }

                return cheapResults.join('\n');
            }
        }

        if (criteria == 'expensive') {
            const expensiveFlights = this.bookings.filter((obj) => obj.price > 100);

            if (expensiveFlights.length == 0) {
                return 'No expensive bookings found.';
            } else {
                let expensiveResults = ['Expensive bookings:'];
                for (const flight of expensiveFlights) {
                    expensiveResults.push(`${flight.passengerName} booked for flight ${flight.flightNumber}.`);
                }

                return expensiveResults.join('\n');
            }
        }
    }
}

const system = new FlightBookingSystem('TravelWorld');
console.log(system.addFlight('AA101', 'Los Angeles', '09:00 AM', 250));
console.log(system.addFlight('BB202', 'New York', '10:30 AM', 180));
console.log(system.bookFlight('Alice', 'AA101'));
console.log(system.bookFlight('Bob', 'BB202'));
console.log(system.showBookings('expensive'));
console.log(system.showBookings('cheap'));
