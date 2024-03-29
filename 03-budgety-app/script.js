/*
    WHAT YOU WILL LEARN IN THIS LECTURE
    1. How to use the module pattern
    2. More about private and public data, encapsulation and separation
    of concerns.
*/

//BUDGET CONTROLLER
var budgetController = (function(){

    var Expense = function(id,  description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var Income = function(id,  description, value){
        this.id = id;
        this.description = description;
        this.value = value; 
    }

    
     var data = {
         allItems: {
             exp: [],
             inc: []
         },
         totals: {
             exp: 0,
             inc: 0
         }
     }

     return {
         addItem: function(type, des, val){
             new Expense
         }
     }
}) ();


//UI CONTROLLER
var UIcontroller = (function(){

    var DOMstrings = {
        inputType : '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return{
        getinput: function(){
            return {
                type: document.querySelector(DOMstrings.inputType).value, //will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }
        },
        getDOMstrings: function(){
            return DOMstrings;
        }
    }

})();

//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UIctrl){

    var setUpEventListners = function(){
        var DOM = UIctrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', (event) => {
        //console.log(event)

        if(event.keyCode === 13 || event.which === 13){
             ctrlAddItem();
        }
    })

    };

    

    var ctrlAddItem = function(){
        
        //1. Get the fieled iput data
        var input = UIctrl.getinput()
        

        //2. Add the item to the budget controller

        //3. Add the item to the UI

        //4. Calculate the budget

        //5. Display the budget on the UI
    }

    return {
        init: function(){
            console.log('Application has started.')
            setUpEventListners();
        }
    }
    
})(budgetController, UIcontroller);

controller.init();















