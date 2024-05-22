// -----------------------------------------OBJECT
// Normal object var objectNAME se bnaty thy 
// ES6 object hum const OBJECTname se banaty

const object = {
    a: "mahnoor"
}

// backtick
// dollar sign with curly bracket:    ${}
// backtick k ander jitni spaces dengy utni hi dikhengi
console.log(`my name is ${object.a}`)  //output: my name is mahnoor


// --------------------------------------------API
// API = Application Programmable Interface
// DRY = don't repeat yourself

// --------------------------------------------- DESTRUCTING----------------------------------------------

// teeno jagahon pe name same ho  
// in object jo name diya
// const {yahan bhi wohi name diye}
// console.log k $ main bhi same name dena
const food = {
    starter : "salad",
    dish : "Tikka Boti with Puri Paratha",
    desert : "ice cream"
}

// destructing krny ka tareeka, hum ek const main rakh dety hain main items from main object, then jahan use krna ha krlo
const {starter, dish, desert} = food;       // const {jitny elements chahiye utny likhdo} = object name

console.log(`the menu has starter: ${food.starter}, main course: ${food.dish} and desert: ${food.desert}`)