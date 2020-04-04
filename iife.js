// Immediately Invoked Function Expressions (IIFE)

function game() {
    var score = Math.floor(Math.random() * 10 ) ;
    console.log(score >= 5);
}

//game();

(function () {
    var score = Math.floor(Math.random() * 10 ) ;
    console.log(score >= 5);
})();

(function (name) {
    console.log('Hi '+name);
})('Valeria');