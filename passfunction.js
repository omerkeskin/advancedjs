
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

// Functions returning functions

function interviewQuestion(job) {
    if (job === 'designer'){
        return function (name) {
           console.log(name + ' can you explain what UIX design is?');
        }
    }else if(job === 'teacher'){
        return function (name) {
            console.log('What is your branch? Dear ' +name);
        }
    }else{
        return function (name) {
            console.log('Hello ' +name+ ' What do you do?');
        }
    }

}

var teacherQuestion = interviewQuestion('teacher');
interviewQuestion('designer')('Merve');