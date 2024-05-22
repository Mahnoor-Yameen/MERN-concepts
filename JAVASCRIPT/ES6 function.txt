//                                           Hoisting = Hosting JS

// var/function ki cheezon ko top level pe le jana ku k interpreter line by line chalta

console.log(sum(2,2))       //working fine
function sum(a,b){
    return a+b;
}
console.log(sum(2,2))          //working fine


//                    SET TIMEOUT  1 second = 1000
setTimeout(() => {
    console.log(sum(2,5)) 
}, 5000);

//---------------------------------------------ARROW FUNCTION SYNTAX  () => {}  -------------------------------------------------------------

const FunctionName = () => {}
// es6 k format se hum const se function bana lety hain jabky vanila js main function functionName dena hota ha


// -------------------------------------------CallBack Function-------------------------------------

// CONCEPT: jab ek function ko hum dusra function as a parameter dety hain toh woh callback function kehlata hai.
// parameter main diya hua function (call back function kehlata)

const x = (a,b) => {
    return a+b;
}
const y = (callbackX, value) => {
    return callbackX(8,1) + value
}
console.log(y(x,1))    // yahan humny x fuction call kiya

//------------------------------------------Function main Function

const a = () => {
    console.log("halwa")
// closure function
    const b = () => {
        console.log("puri")
    }
// without running closure function output = halwa
// closure function ko run krwana zrori ha wrna nahi dikhega
    b()
}


console.log(a())   //halwa puri

//------------------------------------ IIFE (immediately invoked function expression)-----------------

// 1. wo function jo callback lagaty hi callback hojaye.
// 2. jaisy hi koi web kholy toh foran check karo k wo sign in hua va hai ya nh hua va, if signed in toh webpage (dashboard) not signed in toh normal page
// 3. 5 web pages for different languages user ki location track krty hi according to location usko language dena.

// ---------------------------------------RETURN
const abc = () => console.log("first")   // agar {} na lagayen toh return bhi nh likhna parta
const def = () => {return console.log("first")}