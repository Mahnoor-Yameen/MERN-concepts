// data structure ,  unique key-value pair represent hoty, it works like loop
// doesn't change existing array and works on it and gives the output as new
//  map array pe lagta hai
//  anything.map ((round)=>{curly})
// anything.map((index number for array from 0 to end)=>{return code})

// EXAMPLE 1: simple numebrs ko multiply kr k print krwaya
var arr1=[1,2,3,4]
var arr2 = arr1.map((x)=>{return x*10})
console.log(arr2)     //output: 10, 20, 30,40



// EXAMPLE 2:  object k ander ki chez ko print krwaya
var arr3 = [
    {
        name :"mahnoor",
        fname :"yameen"
    },
    {
        name :"tanzeela",
        fname :"yameen"
    }
]
var arr4 = arr3.map((x)=>{return x.name})
console.log(arr4)    // output: mahnoor, tanzeela

