"use strict";
// self executing anonymous function
// IIFE -- Immediately Invoked Function Expression
(function(){
    let myFunctionalVariable = 0;
    
    //let Start = function(){
    function Start(){
        let myLocalVariable = 0;
        console.log(`App started....${myFunctionalVariable}`);
    }
    window.addEventListener("load",Start);
    /*window.addEventListener("load",function(){
        let myLocalVariable = 0;
        console.log(`App started....${myFunctionalVariable}`);
    });*/

    /*window.addEventListener("load",() => {
        let myLocalVariable = 0;
        console.log(`App started....${myFunctionalVariable}`);
    });*/

})();