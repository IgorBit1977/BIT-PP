(function() {
    function Person(name, surname) {
      this.name = name;
      this.surname = surname;
    }
    Person.prototype.getFullName = function() { //dodajemo metodu getFullName prototipu Person objekta
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
      return "javaScript" ;
  }
  
  Employee.prototype.getData = function(){
      var personPrototype = Object.getPrototypeOf(Employee.prototype);
      var nameSurname = personPrototype.getFullName.call(this);
      return nameSurname + " " + this.job + " " + this.salary ;
      
  }

  Employee.prototype.getSalary = function(){
      return parseInt (this.salary) + ' dinara';
  }
  Employee.prototype.increaseSalary = function(){
      return parseInt(this.salary * 1.1)+' dinara';
  }
  
    function Developer(name, surname, job, salary, specialization) {
      Employee.call(this,name, surname, job, salary);
  
      this.specialization = specialization;
  
    }
  Developer.prototype = Object.create(Employee.prototype);
  Developer.prototype.constructor = Developer;

  Developer.prototype.getDepartment = function(){
      return 'Name of the department is Sales';
  }
  Developer.prototype.changeDepartment = function(){
      return 'Department is changed to Bookkeeping';
  }
  // Developer.prototype.nameSurname
  
    function Manager(name, surname, job, salary, department) {
        Employee.call(this,name, surname, job, salary);
      this.department = department;
    }
  
    Manager.prototype = Object.create(Employee.prototype);
    Manager.prototype.constructor = Manager;
  
    var person1 = new Person('Miodrag', 'Orbovic');
    console.log(person1.getFullName());
  
    var zaposleni1 = new Employee('Miodrag', 'Orbovic','radnik',40000);
    console.log(zaposleni1.salary);

    var developer1 = new Developer('Igor' , 'Jovic', 'programer', 120000, 'front-end');
    console.log(developer1.increaseSalary());

    var manager1 = new Manager('Ana', 'Matic-Jovic','menadzer prodaje', 200000, 'prodaja');
    console.log(manager1.increaseSalary());
  

  })();
