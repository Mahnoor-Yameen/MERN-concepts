
// --------------------------------------------------REST OPERATOR -----------------------------------

// in operators ka jawab array ki form main ata hai

// EXAMPLE 1:
const food = (starter, dish, ...sweet) =>{
     return sweet;
}
console.log(food("salad", "pizza", "gulab jamun", "cham cham", "jalebi"))  //['gulab jamun', 'cham cham', 'jalebi']

// EXAMPLE 2:
const number = (a,b, ...c) => {
    return c
}
console.log(number(1,2.8,5,8,4,8))   // [5,8,4,8]

// EXAMPLE 3:

//hum jab function ko call kr k numbers de rahy toh shru k 2 d and e main gaye baki k array main gaye jiska name f hai

const sum = (d,e,...f)=>{

    let jama = 0;

    for(var i=0; i < f.length ; i++){
        console.log(f[i]); //2,2,5
        jama +=  f[i];       //jama = jama + f[i]
    }

    return jama;     //17

    
}
console.log(sum(1,1,2,2,5,8))

// --------------------------------------------SPREAD OPERATOR--------------------------------------------

var arr1 = [1,2,3,4]
var arr2 = []

// suppose we want to make a copy of array, we can do it by pushing value in arr2 one by one from arr1 OR

arr3 = ["hello", ...arr1]   // is array main ab array 1 ki dari cheezain agayin 
console.log(arr3)   //["hello", 1,2,3,4]

// EXAMPLE:
// console.log (Math.min(...arr1))

