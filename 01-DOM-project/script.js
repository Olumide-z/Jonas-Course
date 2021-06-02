/*
    WHAT YOU WILL LEARN IN THIS LECTURE
    1. How to create our fundamentals game variables.
    2. How to generate a random number
    3. How to manipulate the DOM
    4. How to read from the DOM
    5. How to change CSS styles
*/

var scores, roundScore, activePlayer, diceDom, gamePlaying;

init();





/* 
('#current-' + activePlayer) was done so that when the activePlayer changes to 1,
it goes to ID current-1. 
 */


/*
    WHAT YOU WILL LEARN IN THIS LECTURE
    1. How to set up an event handler
    2. What a callback function is
    3. What an anonymous function is
    4. Another way to select elements by ID
    5. How to change the image in an <img> element
    6. What the ternary operator is
    7. How to add, remove, and toggle HTML classes.
 */

 //changing the score and current to 0
 document.getElementById('score-0').textContent = '0'
 document.getElementById('score-1').textContent = '0'
 document.getElementById('current-0').textContent = '0'
 document.getElementById('current-1').textContent = '0'


 const btnRoll = document.querySelector('.btn-roll')
 btnRoll.addEventListener('click', () =>{
    if(gamePlaying){
        //1. Random number
    var dice = Math.floor(Math.random() * 6) + 1 

    //2. Display the result
    diceDom.style.display = 'block'
    diceDom.src = 'dice-' + dice + '.png'

     //3. Update the round score IF the rolled number was NOT a 1
     if(dice !== 1){
        //Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

    }else{
        //Next player
        nextPlayer()
    }

    } 
   
 });

 /*
    WHAT YOU WILL LEARN
    1. How to use functions to correctly apply the DRY principle
    2. How to think about the game logic like a programmer.   
 */
 
 //Hold and update the score on the global score

 document.querySelector('.btn-hold').addEventListener('click', () => {
    if(gamePlaying){
        // Add current score to global score
    scores[activePlayer] += roundScore

    //Update the User Interface
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
    

    //check if player won the game
    if(scores[activePlayer] >= 50){
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER!'
        diceDom.style.display = 'none'
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
        gamePlaying = false
    }else{
        nextPlayer()
    }
    }
    

 })

 function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
        roundScore = 0

         document.getElementById('current-0').textContent = '0'
         document.getElementById('current-1').textContent = '0'

         document.querySelector('.player-0-panel').classList.toggle('active')
         document.querySelector('.player-1-panel').classList.toggle('active')

         diceDom.style.display = 'none'

 }

 //restarting a new game
 document.querySelector('.btn-new').addEventListener('click', init)


 function init(){
    scores = [0,0]
    roundScore = 0
    activePlayer = 0

    //hide dice
    diceDom = document.querySelector('.dice')
    diceDom.style.display = 'none'
 
    //changing the score and current to 0
 document.getElementById('score-0').textContent = '0'
 document.getElementById('score-1').textContent = '0'
 document.getElementById('current-0').textContent = '0'
 document.getElementById('current-1').textContent = '0'

 document.querySelector('#name-0').textContent = 'Player 1'
 document.querySelector('#name-1').textContent = 'Player 2'

 document.querySelector('.player-0-panel').classList.remove('winner')
 document.querySelector('.player-1-panel').classList.remove('winner')
 document.querySelector('.player-0-panel').classList.remove('active')
 document.querySelector('.player-1-panel').classList.remove('active')

 document.querySelector('.player-0-panel').classList.add('active')
    
}

/*
    State Variable
    it simply tells us the condition of a system.
    in this case, it is is our game playing or it is not playing
 */