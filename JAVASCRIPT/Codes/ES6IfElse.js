// -----------------------------------------------TERNARY OPERATOR-----------------------------------------------
// (Logic)  ?    (True Part)   :    (False Part)

var age = 25;
(age>18) ? (console.log("Your age is greater than 18")) : (console.log("Your age is less than 18"))


// -----------------------------------Else If

var time = "night"
var food = "dinner";

(time=="night")
?
(
    (food == "dinner")  ? 
    (console.log("time is night and dinner is taken")) :
    (console.log("time=night but dinner is not taken"))
    
)
:
(console.log("time is not night"))

