function createFigures() {
    // Figure Class
    class Figure {
        constructor() {
            this.units = 'cm'; // Default unit
        }

        // Getter for area (to be overridden)
        get area() {
            throw new Error('Area not implemented');
        }

        // Method to change units
        changeUnits(newUnits) {
            this.units = newUnits;
        }

        // Method to return string representation
        toString() {
            return `Figures units: ${this.units}`;
        }
    }

    // Circle Class
    class Circle extends Figure {
        constructor(radius) {
            super(); // Call the parent constructor
            this.radius = radius; // Set radius
        }

        // Override area getter to return area of the Circle
        get area() {
            return Math.PI * Math.pow(this.radius, 2);
        }

        // Override toString method
        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`;
        }
    }

    // Rectangle Class
    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(); // Call the parent constructor
            this.width = width; // Set width
            this.height = height; // Set height
            this.units = units; // Set units
        }

        // Override area getter to return area of the Rectangle
        get area() {
            if (this.units == 'cm') {
                return this.width * this.height;
            } else if (this.units == 'mm') {
                return this.width * this.height * 100;
            }
        }

        // Override toString method
        toString() {
            if (this.units == 'cm') {
                return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
            } else if (this.units == 'mm') {
                return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width * 10}, height: ${this.height * 10}`;
            }

            // return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }

    // Return the classes
    return {
        Figure,
        Circle,
        Rectangle,
    };
}

// Example usage
const { Figure, Circle, Rectangle } = createFigures();

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4c.changeUnits('mm');console.log(c.area); // 7853.981633974483console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50

// // let c = new Circle(5);
// // console.log(c.area); // 78.53981633974483
// // console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

// let r = new Rectangle(3, 4, 'mm');
// console.log(r.area); // 12 (3 cm * 4 cm = 12 cm²)
// console.log(r.toString()); // Figures units: mm Area: 12 - width: 3, height: 4

// // r.changeUnits('cm');
// // console.log(r.area); // 12 (still the same area since dimensions are in cm)
// // console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

// // c.changeUnits('mm');
// // console.log(c.area); // 7853.981633974483 (5 cm = 50 mm; area in mm²)
// // console.log(c.toString()); // Figures units: mm Area: 7853.981633974483 - radius: 50
