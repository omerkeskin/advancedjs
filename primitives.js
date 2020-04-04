// Primitives
var a = 23;
var b = a;
a  = 46;

// Objects
var firstObj = {
    name : 'Selim',
    age : 23
}

var secondObj = firstObj;
secondObj.name = 'Batista';

// Functions

var age = 27;
var jonas = {
    name : 'Jonas',
    city : 'Lisbon'
};

function change(a , b) {
   a = 30;
   b.city = 'San Francisco';
}

change(age, jonas);