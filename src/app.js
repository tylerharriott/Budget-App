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

    //Some code for later

}) ();







/***************************************
                Controller
 ***************************************/
var controller = (function(budgetCtrl,UICtrl){


    var ctrlAddItem = function (){
        // 1.) Get field input data
        // 2. ) Add item to budget controller
        // 3.) Add the item to the Interface
        // 4.) Calculate the budget
        // 5.) Display the budget



    }

    document.querySelector(".add__btn").addEventListener('click',ctrlAddItem);



    document.addEventListener('keypress', function(event){

        if(event.keyCode === 13){
            ctrlAddItem();
        }


    });



}) (budgetController,UIController  );
