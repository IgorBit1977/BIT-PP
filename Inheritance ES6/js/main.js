(function () {

    class Person {
        constructor(name, surname) {
            this.name = name;
            this.surname = surname;
        }

        getFullName() {
            return `${this.name} ${this.surname}`
        }
    }

    class Employee extends Person {
        constructor(name, surname, job, salary) {
            super(name, surname);
            this.job = job;
            this.salary = salary;

        }
        getSpecialization() {
            return 'javaScript';
        }
        getData() {
            return `${super.getFullName()} ${this.job} ${this.salary}`;

        }
        getSalary() {
            var parsedSalary = Number.parseInt(this.salary);
            return `${parsedSalary} dinara`;
        }

        increaseSalary() {
            var parsedIncreasedSalary = Number.parseInt(this.salary * 1.1);
            return `${parsedIncreasedSalary} dinara `;
        }
    }

    class Developer extends Employee {
        constructor(name, surname, job, salary, specialization) {
            super(name, surname, job, salary);
            this.specialization = specialization;
        }
        getSpecialization() {
            return `${this.specialization}`;
        }
    }

    class Manager extends Employee {
        constructor(name, surname, job, salary, department) {
            super(name, surname, job, salary);
            this.department = department;
        }
        getDepartment() {
            return `${this.department}`
        }
        changeDepartment(department) {
            var newDepartment = this.department;
            return `${this.newDepartment}`;
        }
    }


    var person1 = new Person('Miodrag', 'Orbovic');
    console.log(person1.getFullName());

    var zaposleni1 = new Employee('Miodrag', 'Orbovic', 'radnik', 40000);
    console.log(zaposleni1.salary);

    var developer1 = new Developer('Igor', 'Jovic', 'programer', 120000, 'front-end');
    console.log(developer1.increaseSalary());

    var manager1 = new Manager('Ana', 'Matic-Jovic', 'menadzer prodaje', 200000, 'prodaja');
    console.log(manager1.increaseSalary());

})();