class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !position || !department || salary <= 0 || typeof salary !== 'number') {
            throw new Error('Invalid input!');
        }

        if (!this.departments[department]) {
            this.departments[department] = [];
        }

        this.departments[department].push({ name, salary, position });
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let highestAvgSalary = 0;
        let bestDepart = '';

        for (const department in this.departments) {
            // console.log(this.departments[department]);
            let avgSalary = 0;
            let countWorkers = this.departments[department].length;
            // console.log(countWorkers);

            for (const worker of this.departments[department]) {
                avgSalary += worker.salary;
            }

            avgSalary = avgSalary / countWorkers;
            // console.log(avgSalary);

            if (avgSalary > highestAvgSalary) {
                highestAvgSalary = avgSalary;
                bestDepart = department;
            }
        }

        const sortedEmployees = this.departments[bestDepart].sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));

        let result = `Best Department is: ${bestDepart}\n`;
        result += `Average salary: ${highestAvgSalary.toFixed(2)}\n`;

        sortedEmployees.forEach((worker) => {
            result += `${worker.name} ${worker.salary} ${worker.position}\n`;
        });

        return result.trim();
    }
}

let c = new Company();
c.addEmployee('Gosho', 1350, 'HR', 'Human resources');
c.addEmployee('Stanimir', 1200, 'digital marketing manager', 'Marketing');
c.addEmployee('Pesho', 1000, 'graphical designer', 'Marketing');
c.addEmployee('Stanimir', 2000, 'engineer', 'Construction');
c.addEmployee('Pesho', 1500, 'electrical engineer', 'Construction');
c.addEmployee('Slavi', 500, 'dyer', 'Construction');
c.addEmployee('Stan', 2000, 'architect', 'Construction');
console.log(c.bestDepartment());
