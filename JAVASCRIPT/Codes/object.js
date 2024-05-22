//                                                 INTRODUCTION
// in JS, almost everything is object  string, number, date, boolean, null, undefined  
// var name = {curly}              SYNTAX

var man = "male";       //way 1

var obj1 = {              //way 2
    food : "fish",
    color:"brown"
}
console.log(obj1)  // full object

// ------------------------------------------------------------------------------------------------------------
//                                                  DISPLAYING / PRINTING
// only selected parameter         name.key         name[ " inside brackets " ]
console.log(obj1.food)
console.log(obj1["food"])
 

// ----------------------------------------------------------------------------------------------------------
//                                                       DEEP DATA PRINTING
//for object, hum dot laga kr deep jaty jayengy
// array main object bhi asakta ha and object main array bhi asakt hai 


// ----------------------------------------------------------------------------------------------------------
//                                                           PREDEFINED OBJECT
// javascript main kuch predefined objects hain jo k hum direct use krlety hain mostly in coding s.calculator

var mymath={
    myPI : 3.142                 //we uses it like console.log(mymath.myPI)
}

// ---------------------------------------------------------------------------------------------------------
//                                                        FUNCTION INSIDE OBJECT
// hum value wali jagah pe funciton bna dety hain and then clg k time key(argument) de dety hain jo k uper parameter main chali jati

var mine = {
    mysine : function (UserValue){
        return Math.sin(UserValue)
    }
}

console.log(mine.mysine(30))                //output: -0.9880316240928618

