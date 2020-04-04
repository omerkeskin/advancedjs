var tatya = {
    name: 'Tatya',
    age : 18,
    job : 'teacher',
    presentation : function (style, timeOfDay) {
        if (style === 'formal'){
           console.log('Good '+timeOfDay+' Ladies and gentlemen. I\'m  '+ this.name + ' I\'m a '+this.job + ' and I\'m '+this.age+ ' years old.');
        }else if (style === 'friendly'){
            console.log('Hey whats up. I\'m  '+ this.name + ' I\'m a '+this.job + ' and I\'m '+this.age+ ' years old. Have a nice '+timeOfDay);
        }


    }
};


var emily = {
    name: 'Emily',
    age : 22,
    job : 'designer'
};

/*tatya.presentation.call(emily, 'friendly', 'morning');
tatya.presentation.apply(emily, ['formal', 'afternoon']);*/

var emilyFormal = tatya.presentation.bind(emily,'formal', 'afternoon');
//emilyFormal();

var years = [1990, 1965 , 1980, 1947, 2009, 2011];

function arrayCalculate(arr, fn) {
    var arrRes = [];

    for (var i = 0;i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}
function calculateAge(el) {
    return new Date().getFullYear() - el;
}

function isFullAge(limit, el) {
   return el >= limit;
}

var  ages = arrayCalculate(years, calculateAge);
var isFullAgeResultArray = arrayCalculate(ages, isFullAge.bind(this, 20));