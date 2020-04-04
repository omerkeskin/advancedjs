
var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function () {
    console.log(2020 - this.yearOfBirth);
}

let omer = new Person('Omer', 1990, 'Coder');
let jane = new Person('Jane', 2001, 'Housewife');

//console.log(omer);
//console.log(jane);

let hasJobProperty = omer.hasOwnProperty('job');
//console.log(hasJobProperty);