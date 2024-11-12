function solution() {
    class Employee {
        constructor(name, age) {
            if (new.target === Employee) {
                throw new Error('Cannot instantiate abstract class Employee directly.');
            }
            this.name = name;
            this.age = age;
            this.salary = 0; // Initial salary
            this.tasks = []; // To be defined in subclasses
            this.currentTaskIndex = 0; // Track current task index
        }

        work() {
            const task = this.tasks[this.currentTaskIndex]; // Get current task
            console.log(task.replace('{name}', this.name)); // Replace {name} with employee's name
            this.currentTaskIndex = (this.currentTaskIndex + 1) % this.tasks.length; // Move to next task, wrap around
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary} this month.`);
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = ['{name} is working on a simple task.', '{name} is working on a simple task.'];
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [
                '{name} is working on a complicated task.',
                '{name} is taking time off work.',
                '{name} is supervising junior workers.',
                '{name} is working on a complicated task.',
            ];
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.salary = 0; // Initial salary, can be set later
            this.dividend = 0; // Initial dividend
            this.tasks = ['{name} scheduled a meeting.', '{name} is preparing a quarterly report.'];
        }

        collectSalary() {
            const totalSalary = this.salary + this.dividend; // Include dividend in salary
            console.log(`${this.name} received ${totalSalary} this month.`);
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager,
    };
}
