function Task(description, isComplited, deadline) {
  this.description = description;
  this.isComplited = isComplited;
  this.deadline = deadline;

  this.changeComplitedStatus = function() {
    this.isComplited = !this.isComplited;
  };
  this.changeDescription = function(newDescription) {
    this.description = newDescription;
  };
  this.extendDeadline = function(newDeadline) {
    this.deadline = newDeadline;
  };
}
var learnJS = new Task("JS is easy!", false, new Date("2018-12-31"));
learnJS.changeComplitedStatus();
learnJS.changeDescription("JS is super easy!");
learnJS.extendDeadline(new Date("2018-11-01"));
console.log(learnJS);

var byEggs = new Task("Buy eggs!", false, newDate("2018-10-29"));
function toDoList(name) {
  this.name = name;
  this.task = []; //array of task

  this.addTask = function(task) {
    this.tasks.push(task);
  };
  this.deleteTask = function(taskIndex) {
    this.tasks.splice(taskIndex, 1);
  };
  this.deleteToDolist = function() {
    this.tasks = [];
  };
}

var ourList = new toDoList("Our ToDo list");
ourList.addTask(learnJS); //0
ourList.addTask(buyEggs); //1
ourList.deleteTask(1);

console.log(ourList);
