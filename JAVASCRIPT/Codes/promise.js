// -------------------------------------PROMISE (OBJECT)---------------------------------------
// 1. Pending         2. Reject        3. Finished
// SYNTAX: var name = new Promise (  () => {}  )          //(   (resolve, reject)    =>  {} )


// EXAMPLE: 1
let a = true

// yahan promise banaya
let b = new Promise((resolve, reject)=>{
    if(a){
        console.log("a is true")
        resolve();    // resolve ko call kr rahy
    }
    else{
        console.log("a is false")
        reject();    // reject ko call kr rahy
    }
})

// Example: 2

 function pixie (dust){
    return new Promise ((resolve, reject)=>{
        if(dust){
            resolve("There is Pixie dust inside reolve")
        }
        else{
            reject("No pixie dust, it is false under reject")
        }
    })
 }

 console.log(pixie(true)) //       Promise {<fulfilled>: 'There is Pixie dust inside reolve'}

//  Example: 3

function fun(happy){
    return new Promise((resolve,reject)=>{
if(happy){
    resolve("Truly happy and working hard")
}
else{
reject("stop wasting time on being sad, there's no point"
)}
    })
}

// we are making two arrow functions down there :) 
const yes = (y)=> {console.log(y)}   //Truly happy and working hard
const no = (n) => {console.log(n)}   //stop wasting time on being sad, there's no point

// ab hum apna uper promise wala function and dono arrow functions sath chalayengy
console.log( fun(true).then(yes))   
console.log( fun(false).catch(no) )

//  resolve --- then ---    we called yes
//  reject  --- catch ---   we called no

// explanation: fun waly function main resolve and reject statements hain 
// yes and no banaye humny and unmain jo bhi chez receive ho rahi simply print krwa rahy
// ab humny fun ko true kr k run kiya and usmain .then lagaya k AGAR promise successfully run hojata hai toh yes wala function chalao, fun waly se resolve hogaya tha yani .then work kr gaya and return mai resolve statement ayi and humny wo print krwa di. 
// .catch main hamara promise fullfil nh hua yani reject chala and return hui reject statement. wo statemnt humny de di no function ko and simply wo statement print hogyi 


// EXAMPLE : 4

function work (doing){
    return new Promise((resolve, reject)=>{
        console.log("fetching data, please wait ")
        setTimeout(() => {
            if(doing){
                resolve("yes she is working")
            }
            else{
                reject("she is not wotking, she lost her path again")
            }
        }, 3000);
    })
}
const success=(y)=>{console.log(y)}
const failure=(n)=>{console.log(n)}
console.log(work(false).then(success).catch(failure))


// humny setTimeout isliye lagaya ku k API se jab data fetch hota ha toh time lagta ha


// EXAMPLE 5:

function great (time){
    return new Promise((resolve, reject)=>{
        console.log("fetching data, please wait ")
        setTimeout(() => {
            if(time){
                resolve("yes she is having great time")
            }
            else{
                reject("she is not having great time, she lost her path again")
            }
        }, 3000);
    })
}

console.log(great(false).then((y)=>{console.log(y)}).catch((n)=>{console.log(n)}))

// -------------------REAL TIME EXAMPLE WITH AJAX ALONG WITH JQUERY----------------------------------

// title tag k nechy jquery ka path de diya

function sunshine(){
    return new Promise((resolve, reject)=>{
        console.log("fetching sun shine please wait")

        setTimeout(() => {
            $.get("JSON Link", function(data){resolve(data)})
            .fail((error)=>{reject("failed to load json")})
        }, 2000);
    })
}

console.log(
    sunshine().then((happiness)=>{console.log(happiness)}).catch((cold)=>{console.log(cold)})
)
//error araha $ is not defined
// $.get -- it is used to get data from server by the help of ajax (ajax URL, where to show)