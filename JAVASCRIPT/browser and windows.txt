// javascript se URL ko change krna
// in index.html ek button banlo and onclick pe changeURL() function lagadain dear queen mahnoor

function changeURL(){
    // current page ka url ajayega
    console.log(window.location.href)    //output:  http://127.0.0.1:5500/index.html

    // url change krna
    window.location.href = "https://github.com/Mahnoor-Yameen"
    // humny yeh link JS se diya ha, agar anchor se diya hota toh hover pe user ko link kahan khulega yeh pata chal jayega, abhi hover pe nahi pata chalega

    // hamary pass 2 cheezain hoti hain:
    //  host name = www.github.com
    // path name = /Mahnoor-Yameen

    window.location.hostname= "https://github.com"
    window.location.pathname= "/Mahnoor-Yameen"       //onclick pe hum https://github.com/Mahnoor-Yameen is page pe ja rahy
}


// --------------------------------------------------Assign backable
function Assign(){
    window.location.assign("https://github.com/Mahnoor-Yameen")
}

// --------------------------------------------------Replace not backable (test, quiz)
function Replace(){
    window.location.replace("https://github.com/Mahnoor-Yameen")
}

// ------------------------------------------------------Reloading

function Reload(){

    // page reload hojayega from server
    window.location.reload(true)

    // page reload hojayega from cache
    window.location.reload(false)


    // reload from cache if available in cache
    window.location.reload()
}

// ---------------------------------------------Forward
function Forward(){
    // ek page agay agar hua toh chala jayega
    history.forward()
}

// ---------------------------------------------Backward
function Backward(){
// ek page pechy agar hua to chala jayega
    history.backward()
}

// ------------------------------------------- Go to any page by number

function GoOnNumber(){
    // apni marzi se forward and backward jaty bus number de do  ///// FORWARD + //// BACKWARD -  ////
    // history.go(N)
    history.go(-2)
}


// -----------------------------------------------New Page Creation BLANK

function NewPageCreation(){
    var NewPage = window.open()


    // hum us page main kuch dhalty hain 
 var content = "<h1>hello</h1>"
 NewPage.document.write(content)               //document.write se hum us page/variable main kuch bhi likh skty hain
}


// -------------------------------------------------New Page SMALL (captcha, 3rd party signup, pop up)

function NewPageCreationSMALL(){

// small page k liye hum 3 cheezain dety hain 

// 1. URL
// 2. Blank, Self target, Parent 
// 3. size of new opening window
var NewPage = window.open("","","width=420, height=380")




// hum us page main kuch dhalty hain 
 var content = "<h1>hello</h1>"
 NewPage.document.write(content)               //document.write se hum us page/variable main kuch bhi likh skty hain
}