// Object.create

var personProto = {
    calculateAge: function () {
        console.log(2020 - this.yearOfBirth);
    }
}

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1980;
john.job = 'engineer';


var brigitte = Object.create(personProto,
    {
        name: {value : 'Birgitte'},
        yearOfBirth: {value : 1967},
        job : {value : 'artist'}
    });