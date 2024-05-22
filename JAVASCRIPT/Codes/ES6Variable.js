// ES6 hum isliye use krty hain ku k yeh ALL BROWSER SUPPORTED hai.
// les work, chota kam, tricky
// react ispe kam krti hai (react syntax)


// ------------------------------------SCOPES------------------------------------
// var = ES5     Global scope
// let, const = ES6    Block Scope (agar yeh function main banaya hai toh function k bahar nh milega)

var x = 5;    
function scope(){
    let x=6;
    console.log(x)                // output x=6
}
console.log(x)            //output x=5


//                    let             const
// Reassign           yes             no
// Redeclare          yes             no
// Redefine           yes             no

//---------------------------------Hoisting = Hosting JS----------------------------------------
// var/function ki cheezon ko top level pe le jana ku k interpreter line by line chalta


