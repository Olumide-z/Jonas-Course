//Function Constructor

/*
    A constructor is useful when you want to create 
    multiple similar objects with the same properties and methods. 
 */

/* var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

//inheritance
Person.prototype.calculateAge = function(){
    console.log(2021 - this.yearOfBirth)
}

var john = new Person('John', 1990, 'Designer')
var mark = new Person('Mark', 1995, 'Engineer')
var jane = new Person('Jane', 2000, 'Accountant')

john.calculateAge();
mark.calculateAge();
jane.calculateAge();*/

//Another way of doing this
var personProto = {
    calculateAge: function(){
        console.log(2021 - this.yearOfBirth)
    }
};

var john = Object.create(personProto)
john.name = 'john'
john.yearOfBirth = 1995
john.job = 'teacher'

var jane = Object.create(personProto, {
    name: { value: 'jane'},
    yearOfBirth: { value: 2001},
    job: { value: 'designer'}
})

john.calculateAge()
jane.calculateAge()

console.log(john)

//passing functions as arguments
var years = [1990, 1997, 2002, 2006, 2010]

function arrayCalc(arr, fn){
    var arrRes = []
    for(var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]))
    }
    return arrRes;
}

function calAge(el){
    return 2021 - el
}

function isFullAge(el){
    return el >= 18 
}

function maxHeartRate(el){
    if(el >= 18 && el <= 81){
        return Math.round(2021 - (0.67 * el))
    }else{
        return -1;
    }
}


var ages = arrayCalc(years, calAge)
console.log(ages)

var fullAges = arrayCalc(ages, isFullAge)
console.log(fullAges)

var rates = arrayCalc(ages, maxHeartRate)
console.log(rates)

//functions returning functions
function interviewQuestions(job){
    if(job === 'designer'){
        return function(name){
            console.log(name + ' ,can you please explain what UX design is?')
        }
    }else if(job === 'teacher'){
        return function(name){
            console.log('What subject do you teach, ' + name + '?')
        }
    }else{
        return function(name){
            console.log('Hello ' + name + ' , what do you do?')
        }
    }
}

var teacherQuestion = interviewQuestions('teacher');
var designerQuestion = interviewQuestions('designer');

teacherQuestion('John')
teacherQuestion('Jane')
designerQuestion('Mike')
designerQuestion('Olumide')

    //another example
function testOffering(department){
    if(department === 'Science'){
        return function(name){
            console.log('Mr/Mrs ' + name + ' ,you are required to take science courses')
        }
    }else if(department === 'Art'){
        return function(name){
            console.log('Mr/Mrs ' + name + ' ,you are required to take Art courses')
        }   
    }else{
        return function(name){
            console.log('Mr/Mrs ' + name + ', sorry we only offer science and art courses here')
        }
    }
}

var scienceDept = testOffering('Science')
var artDept = testOffering('Art')

//scienceDept('Samuel')
//artDept('Emrys')

//Imediately invoked function expressions (IIFE)

    //For Data Privacy

(function (){
    var score = Math.random() * 10
    console.log(score >= 5)
});


(function (goodluck) {
    var score = Math.random() * 10
    console.log(score >= 5 - goodluck)
})(5);

//Closures
/*
    An inner function has always access to the variables and parameters
    of its outer function, even after the outer function has returned.
*/

function retirement(retirementAge){
    var a = ' years left until retirement.'
    return function(yearOfBirth){
        var age = 2021 - yearOfBirth
        console.log((retirementAge - age) + a)
    }
}

var retirementUS = retirement(66)
retirementUS(1997)

var retirementGer = retirement(65)
retirementGer(1997)

var retirementICE = retirement(67)
retirementICE(1997)

    //another example
    function interviewQuestions2(job2){
        var a = ' ,can you please explain what UX design is?'
        var b = 'What subject do you teach, '
        var c = ' , what do you do?'
        return function(name){
            if(job2 === 'designer'){
                console.log(name + a)
            }else if(job2 === 'teacher'){
                console.log( name + b)
            }else{
                console.log(name + c)
            }
        }
    }

    interviewQuestions2('designer')('Olumide')
    interviewQuestions2('pilot')('Sam')

//Bind, call and apply

var olumide = {
    name: 'Olumide',
    age: 22,
    job: 'Builder',
    presentation: function(style, timeOfDay){
        if(style === 'formal'){
            console.log('Good ' + timeOfDay + '. Ladies and gentlemen! I\'m ' + this.name
                + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.'   
            )
        }else if(style === 'friendly'){
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.')
        }
    }
}


olumide.presentation('formal', 'evening')

//Method borrowing using the Call function, the call function set the this variable to emrys instead of olumide
var emrys = {
    name: 'Emrys Z',
    age: 23,
    job: 'Web Developer'
}

olumide.presentation.call(emrys, 'friendly', 'Morning')

//apply method
//olumide.presentation.apply(emrys, ['friendly', 'Morning'])

//bind method
var olumideFriendly = 
olumide.presentation.bind(olumide, 'friendly')

olumideFriendly('morning')
olumideFriendly('afternoon')

var emrysFriendly =
olumide.presentation.bind(emrys, 'friendly')

emrysFriendly('evening')

    //another example

    var years = [1990, 1997, 2002, 2006, 2010]

    function arrayCalc(arr, fn){
        var arrRes = []
        for(var i = 0; i < arr.length; i++){
            arrRes.push(fn(arr[i]))
        }
        return arrRes;
    }
    
    function calAge(el){
        return 2021 - el
    }
    
    function isFullAge(limit, el){
        return el >= limit
    }

    var ages = arrayCalc(years, calAge)
    var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20))
    console.log(ages)
    console.log(fullJapan)