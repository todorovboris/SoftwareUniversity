function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        const inputElm = document.querySelector('#inputs textarea');
        const bestRestaurantElm = document.querySelector('#bestRestaurant');
        const workersElm = document.querySelector('#workers');

        if (inputElm.value === '') {
            return;
        }

        let restaurantsInput = JSON.parse(document.querySelector('#inputs textarea').value);
        let restaurants = {};

        for (const restaurant of restaurantsInput) {
            let [restaurantName, workerInfo] = restaurant.split(' - ');
            let workers = workerInfo.split(', ');
            // console.log(restaurantName);
            // console.log(workerInfo);

            if (!restaurants[restaurantName]) {
                restaurants[restaurantName] = [];
            }

            for (const worker of workers) {
                // console.log(worker);
                let [workerName, workerSalary] = worker.split(' ');

                // console.log(workerName);
                // console.log(workerSalary);

                workerSalary = Number(workerSalary);
                restaurants[restaurantName].push({ name: workerName, salary: workerSalary });
            }
        }

        let bestRestaurant = '';
        let bestSalary = 0;
        let bestAvgSalary = 0;

        // console.log(restaurants);

        for (const restaurant in restaurants) {
            let workers = restaurants[restaurant];
            // console.log(workers);
            let totalSalary = workers.reduce((sum, worker) => sum + worker.salary, 0);
            let avgSalary = totalSalary / workers.length;
            let highestSalary = Math.max(...workers.map((worker) => worker.salary));

            if (avgSalary > bestAvgSalary) {
                bestRestaurant = restaurant;
                bestAvgSalary = avgSalary;
                bestSalary = highestSalary;
            }
        }

        let bestRestaurantWorkers = restaurants[bestRestaurant].sort((a, b) => b.salary - a.salary);

        let bestRestaurantOutput = `Name: ${bestRestaurant} Average Salary: ${bestAvgSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;
        let workersOutput = bestRestaurantWorkers.map((worker) => `Name: ${worker.name} With Salary: ${worker.salary}`).join(' ');

        document.querySelector('#bestRestaurant p').textContent = bestRestaurantOutput;
        document.querySelector('#workers p').textContent = workersOutput;
    }
}
