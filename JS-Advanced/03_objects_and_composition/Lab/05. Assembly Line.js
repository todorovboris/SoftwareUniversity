function createAssemblyLine() {
    return {
        hasClima(car) {
            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp = function () {
                if (this.temp < this.tempSettings) {
                    this.temp += 1;
                } else if (this.temp > this.tempSettings) {
                    this.temp -= 1;
                }
            };
        },

        hasAudio(car) {
            car.currentTrack = null;
            car.nowPlaying = function () {
                if (this.currentTrack) {
                    console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`);
                }
            };
        },

        hasParktronic(car) {
            car.checkDistance = function (distance) {
                if (distance < 0.1) {
                    console.log('Beep! Beep! Beep!');
                } else if (distance >= 0.1 && distance < 0.25) {
                    console.log('Beep! Beep!');
                } else if (distance >= 0.25 && distance < 0.5) {
                    console.log('Beep!');
                } else {
                    console.log('');
                }
            };
        },
    };
}

// Example Usage
const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis',
};

// Add climate control functionality
assemblyLine.hasClima(myCar);
console.log(myCar.temp); // 21
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp); // 20

// Add audio functionality
assemblyLine.hasAudio(myCar);
myCar.currentTrack = { name: 'Never Gonna Give You Up', artist: 'Rick Astley' };
myCar.nowPlaying(); // Now playing 'Never Gonna Give You Up' by Rick Astley

// Add parktronic functionality
assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4); // Beep!
myCar.checkDistance(0.2); // Beep! Beep!
myCar.checkDistance(0.05); // Beep! Beep! Beep!

// Print the car object
console.log(myCar);
