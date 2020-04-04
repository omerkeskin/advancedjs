

function retirement(retirementAge) {
    var message = ' years left until retirement.'
   return function (yearOfBirth) {
         var age = new Date().getFullYear() - yearOfBirth;
         console.log((retirementAge - age) + message);
   }
}

var retirementUS = retirement(66);
retirementUS(1990);