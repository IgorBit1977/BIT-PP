(function() {
  function Person(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  Person.prototype.getFullName = function() {
    return this.name + " " + this.surname;
  };

  function Employee(name, surname, job, salary) {
    this.job = job;
    this.salary = salary;
    Person.call(this, name, surname);
  }
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getSpecialization = function(){
    return "Pedijatrija" + this.specialization();
}

Employee.prototype.getFullName = function(){
    var personPrototype = Object.getPrototypeOf(Employee.prototype);
    var nameSurname = personPrototype.getFullName.call(this);
    return nameSurname + " " + this.job + " " + this.salary;
    
}

  function Developer(name, surname, job, salary, specialization) {
    Employee.call(this,name, surname, job, salary);

    this.specialization = specialization;

  }
Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

// Developer.prototype.nameSurname

  function Manager(name, surname, job, salary, department) {
    this.department = department;
  }

  Manager.prototype = Object.create(Employee.prototype);
  Manager.prototype.constructor = Manager;

  var person1 = new Person('Miodrag', 'Orbovic');
  console.log(person1.getFullName());

  var zaposleni1 = new Employee('Miodrag', 'Orbovic','radnik',40000);
  console.log(zaposleni1.name);


})();
