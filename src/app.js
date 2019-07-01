/***************************************
        Model Controller
 ***************************************/
var budgetController = (function (){

    //Some code

 }) ();







/***************************************
            View Controller
 ***************************************/
var UIController = (function (){

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };


    return {
      getInput: function (){

          return {
              type: document.querySelector(DOMstrings.inputType).value,
              description: document.querySelector(DOMstrings.inputDescription).value,
              value: document.querySelector(DOMstrings.inputValue).value
          }
      },

        getDOMstrings: function() {

          return DOMstrings;


        }

    };

}) ();







/***************************************
        Global App Controller
 ***************************************/
var controller = (function(budgetCtrl,UICtrl){

    var DOM = UICtrl.getDOMstrings();


    var ctrlAddItem = function (){                                    // This function will call whenever we hit the button or hit the enter key.
        // 1.) Get field input data
        var input = UICtrl.getInput();
        console.log(input);
        // 2. ) Add item to budget controller
        // 3.) Add the item to the Interface
        // 4.) Calculate the budget
        // 5.) Display the budget


    }

    document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);



    document.addEventListener('keypress', function(event){

        if(event.keyCode === 13){
            ctrlAddItem();
        }



    });



}) (budgetController,UIController  );
