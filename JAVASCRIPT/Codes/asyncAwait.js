//  ---------------------------------------ASYNC AWAIT (ES 2017) --------------------------------------------

// it returns a promise
// shru main function k async lagado
// async function run in background
// successfully chala = then ,   failed =  catch

// EXAMPLE: 1
// async function first (){
//     return "hello first"
// }
// it will return a promise 
//console.log(first())   // output:  Promise {<fulfilled>: 'hello'}
//console.log(first().then((y)=>{console.log(y)}))  // output: hello


// EXAMPLE: 2                 ?????????????

// const second = async function(){
//     return "hello second"
// }
// console.log(second())

// const secondd = async () => {
//     return "hello secondd"
// }
// console.log(secondd())

// const seconddd = async () => "hello"
// console.log(seconddd())

// -------------------------------------------------------AWAIT-------------------------------------------

// works inside async
// jahan yeh lagayengy usky bad ka code run nh hota or baki ka bahar ka code run hojata
// use: jab server se data lana ho by fetch method
// await ka kam hony tak wait krta
// online fake data lana for testing

// ------------------------------EXAMPLE 3:

// async function third (){
//     console.log("a")
//     console.log("b")
//     await console.log("c")
//     console.log("d")
// }

// console.log(third())
// console.log("e")

//a   b   c   e  d    
// c pe ruk gaya or phir bahr ka code run hua then c k bad wala code run hua

// -----------------------------EXAMPLE 4:

// async function four (){
    // console.log("2")

   // const response = await fetch ("URL");   //not found ku k link nh diya hua
//     console.log("3")

//     const student = await response.json();

//     return student;

// }

// console.log("1")
//let a= four();   //ek variable main function call krwa diya
// console.log(a)
// console.log("4")
// output: 1, 2, promise, 4, , 3
// explanation:  sabse pehly 1 print hua clg ki wajah se
//  phir humny function run krwaya hua hai toh wahan se 2 print hua
// jab function main 3 ki bari ayi toh await laga hua tha isliye usko mukammal hony k liye jitna time laga usmain line 71 chali and promise return hua
// then phir 4 print hogaya
// usky baad 3 print hua jismain await laga hua tha

// EXAMPLE 5:

// async function five(){
    // ek variable main fake api se data mungwaya and await laga diya k function k ander ka code ab agay nh barh skta
    // const response = await fetch("https://jsonplaceholder.typicode.com/users")

    // ek variable banaya and usmain api wala data dhal diya 
    // .json isliye lagaty k agar data plain text ki form main hai toh woh object ban jaye
    // const data = await response.json()

    // OR we can write the same thing as: 
    // const response = await fetch("https://jsonplaceholder.typicode.com/users").json();
    // phir response ko return krwa lety

    // return data;
// }

// console.log(five().then((data)=>{console.log(data)}).catch((error)=>{console.log(error)}))
// output: promise and array aya jismain 10 objects hain
// yahan pe promise fetch ki wajah se aya

// ---------------------------------------TRY CATCH

// EXAMPLE 6:
// try and catch ka block laga deny se error handling achi hojati hai
// hum try and catch use krty, sara code try main dhal dety, agar kisi bhi line of code main error ata toh catch automatically call hojata

async function six(){

    try {
         // ek variable main fake api se data mungwaya and await laga diya k function k ander ka code ab agay nh barh skta
    const res = await(await fetch("https://jsonplaceholder.typicode.com/users")).json();
    return res;
    } 

    catch (error) {
        console.log(error)
    }
   
}

console.log(six().then((res)=>{console.log(res)}).catch((error)=>{console.log(error)}))