// ---------------------------------------FETCH (2 then lagty)

// CRUD(create, read, update, delete) operations perform kr sakty hain by fetch, yeh sab API methods hain 
// frontend <-> API <->  Backend
// internet explorer don't support fetch

// fetch();
// fetch( "URL/File" )     it returns a promise
//  fetch (URL/File).then()   it also returns a promise
//  fetch (URL/File).then().then()   it returns data

// good tip: pehly then main response likho, dusry then main data


// ----------------------------------------------READ
// EXAMPLE 1:

fetch("/fetchdata.txt")

// fetch kiya toh promise aya wo liya and usko .text() main krliya .json() bhi kr sakty thy, promise ko kiya
.then(function(promisee) {
return promisee.text();
})

// ab jo promise main se data nikala tha wo liya and console pe print krwa diya
.then(function(response){
    return console.log(response) 
})

// yeh banaya for catching error
.catch(function(error){
    return console.log("error came:", error)
})


// EXAMPLE 2:
// `${Curly}` 

// jsonplaceholder se mungwayengy data with smaller code
fetch("https://jsonplaceholder.typicode.com/users")
.then((prom)=>{return prom.json()})
.then((data)=>{console.log(data)})
.catch((error)=>{console.log(error)})  //output: 10 users data agaya 10 objects inside one array

// EXAMPLE 3:

// browser pe yeh sab likhwayengy by for loop
// jsonplaceholder se mungwayengy data with smaller code
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((prom)=>{return prom.json()})
// .then((data)=>{
    // for(var x in data){
    // way 1
    //   document.write(`${data[x].name}, <br>`)

    //   way 2
    // var a = (`${data[x].name}, <br>`)
    // document.write(a)
    // }
// })
// .catch((error)=>{console.log(error)})  //output: 10 users data agaya 10 objects inside one array




// -----------------------------------------------INSERTION
// SYNTAX :

//fetch("/fetchdata.txt", {
//method: "POST"       // "POST", "PUT", "DELETE", "GET"
//body: data       //wo data jo hum pass krty for put(insert), delete, post, 

// formats: form data, json data, text


// ismain hum main cheezain bataty hain, data ka format kya hai
//header: {
//    'content-Type': 'application/JSON', or
//    'content-Type': 'application/x-www-form-urlencoded'
//}
//}
//)

// EXAMPLE 4:
// jsonplaceholder ki web ko nechy se scroll krna (create a resource) code template ko copy and paste krdo

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: 'POST',
    body: JSON.stringify({
        title : 'biryani',
        body : "custard",
        userId : 101
    }),

    headers:{
        'Content-Type' : 'application/json; charset=UTF-8'
    }
})
.then((response)=>response.json())
.then((data)=>{console.log(data)})  // output:  {title: 'biryani', body: 'custard', userId: 101, id: 101}
.catch((error)=>{console.log(error)})


// --------------------------------------------DELETE

// fetch('link / index number of data to be deleted' , {method: "delete"})

fetch("https://jsonplaceholder.typicode.com/posts/101", {
    method:"DELETE"
})
.then((response)=>response.json())
.then((data)=>{console.log(data)})  
.catch((error)=>{console.log(error)})

// ----------------------------------------FORM se data le kr insert krwana

// document.gebid kr k le lena data
// e.preventdefault
// var obj banana and usmain jo key ki values hongi wo walues document.gebid.value se le lena
// ab fetch laga kr post kr dena
