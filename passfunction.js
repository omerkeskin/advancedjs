
var years = [1990, 1965 , 1980, 1947];

function arrayCalculate(arr, fn) {
   var arrRes = [];

   for (var i = 0;i < arr.length; i++){
       arrRes.push(fn(arr[i]));
   }
   return arrRes;
}

function calculateAge(el) {
   return 2020 - el;
}

let resultArray = arrayCalculate(years, calculateAge);