class Hotel {
    constructor(initialBudget) {
        this.initialBudget = initialBudget;
        this.roomAvailability = {};
        this.supplyStock = {};
    }

    restockSupplies(supplies) {
        let messages = [];

        supplies.forEach((supply) => {
            let [supplyName, supplyQuantity, supplyTotalPrice] = supply.split(' ');
            supplyQuantity = Number(supplyQuantity);
            supplyTotalPrice = Number(supplyTotalPrice);

            if (this.initialBudget >= supplyTotalPrice) {
                this.initialBudget -= supplyTotalPrice;

                if (this.supplyStock.hasOwnProperty(supplyName)) {
                    this.supplyStock[supplyName] += supplyQuantity;
                } else {
                    this.supplyStock[supplyName] = supplyQuantity;
                }

                messages.push(`Successfully stocked ${supplyQuantity} ${supplyName}`);
            } else {
                messages.push(`There was not enough money to restock ${supplyQuantity} ${supplyName}`);
            }
        });

        return messages.join('\n');
    }

    addRoomType(roomType, neededSupplies, pricePerNight) {
        if (this.roomAvailability.hasOwnProperty(roomType)) {
            return `The ${roomType} is already available in our hotel, try something different.`;
        }

        this.roomAvailability[roomType] = {
            neededSupplies: neededSupplies,
            pricePerNight: pricePerNight,
        };

        let numberOfRoomTypes = Object.keys(this.roomAvailability).length;

        return `Great idea! Now with the ${roomType}, we have ${numberOfRoomTypes} types of rooms available, any other ideas?`;
    }

    showAvailableRooms() {
        let availableRooms = Object.keys(this.roomAvailability);

        if (availableRooms.length === 0) {
            return 'Our rooms are not ready yet, please come back later...';
        }

        return availableRooms.map((roomType) => `${roomType} - $ ${this.roomAvailability[roomType].pricePerNight}`).join('\n');
    }

    bookRoom(roomType) {
        if (!this.roomAvailability.hasOwnProperty(roomType)) {
            return `There is no ${roomType} available, would you like to book another room?`;
        }

        let room = this.roomAvailability[roomType];
        let canAccommodate = room.neededSupplies.every((supply) => {
            let [supplyName, supplyQuantity] = supply.split(' ');
            supplyQuantity = Number(supplyQuantity);
            return this.supplyStock[supplyName] >= supplyQuantity;
        });

        if (!canAccommodate) {
            return `We are currently unable to accommodate your request for ${roomType}, sorry for the inconvenience.`;
        }

        return `Your booking for ${roomType} has been confirmed! The price is $${room.pricePerNight} per night.`;
    }
}
