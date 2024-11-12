function solution() {
    // Balloon Class
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color; // Public member for color
            this.gasWeight = gasWeight; // Public member for gas weight
        }
    }

    // PartyBalloon Class
    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight); // Call the parent constructor
            this._ribbon = {
                // Ribbon property as an object
                color: ribbonColor,
                length: ribbonLength,
            };
        }

        // Getter for ribbon property
        get ribbon() {
            return this._ribbon;
        }
    }

    // BirthdayBalloon Class
    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength); // Call the parent constructor
            this._text = text; // Use a private property for text
        }

        // Getter for text property
        get text() {
            return this._text; // Return the private text property
        }
    }

    // Return the classes
    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon,
    };
}
