/*(function(){
    //constructor for the questions
let Question = function(question, answers, correctAnswer){
    this.question = question,
    this.answers = answers,
    this.correctAnswer = correctAnswer
}

//couple questions
let q1 = new Question ('What is the name of the developer that wrote this code?', 
['Olumide', 'Jane', 'Curry'], 0)

let q2 = new Question ('Who is the best shooter in the NBA?', 
['Lebron James', 'Steph Curry', 'James Harden'], 1)

let q3 = new Question ('What time does Anthony Davis play for?'
['Warriors', 'Brooklyn', 'Lakers'])

//store everything in an array
let questions = [q1, q2, q3]

//getting a random question
let n = Math.floor(Math.random() * questions.length)

//displaying in the console
Question.prototype.displayQuestion = function(){
    //displaying questions
    console.log(this.question)

    //displaying answers
    for(let i = 0; i < this.answers.length; i++){
        console.log(i + ': ' + this.answers[i])
    }
    
}

questions[n].displayQuestion()


//asking the user for an answer
let input = prompt('Type in the answer using number according to the options')

//check if answer is wrong or correct
Question.prototype.userAnswer = function(){
    if(input == this.correctAnswer){
        console.log('Correct!')
    }else{
        console.log('Wrong! Try again')
    }
}

questions[n].userAnswer()


})();
*/

//Expert Level

