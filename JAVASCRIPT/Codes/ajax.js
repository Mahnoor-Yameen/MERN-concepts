// ---------------------------------AJAX (Asynchrounous JS and XML)

// it is a technique for creating fast and dynamic web pages lading only specific part
// user PC se request ja rahi and server se response araha.
// JS class >> XMLHTTPRequest use krty
// jab response ata hai server se tab page refresh hota, ajax request ko background pe chala kr response le ata and no need to refresh page entirely
// Text file, JSON data, XML data

// -----------------------------------------------STEPS

//  0: request not initiated
//  1: server connection established
//  2: request received
//  3: processing request 
//  4: request finished and response is ready

// -----------------------------------------------RESPONSE

// response text/XML main hoga
// status aty hain hamary pass like : 200(ok), 403(forbidden), 404(not found)

// -----------------------------------------------SYNTAX

// var name = new XMLHttpRequest();
// -------to check ready state:
// xhttp.onreadystatechange = function () {}
// xhttp.open ("GET", "filename.txt", true);      //true = async mode on, false = async mode off  //agar false krdengy toh agay ka code nahi chalega tab tak jab tak ke response nh mil jata
// xhttp.send ()              // .send means sending request to server



// ---------------------------------------CODING

// EXAMPLE 1:
// readme.txt file banalo ek and usmain data store krdo kuch
// html main code likha ha wo bhi dekh lo 

function loadData (){

    // step 1: request banai
    var rose = new XMLHttpRequest();

    // onreadystatechange ek event listener hai, means jab bhi hamara variable (rose) main changes hongi toh yeh function run hoga
    rose.onreadystatechange = function(){


        // this = rose, here this means rose / our var name
        // readystate == 4 means request is complete and status == 200 means request successfull
        if(this.readyState==4 && this.status==200){
            console.log(this.responseText)  // rose main jo response text aya wo console pe de do
            // to write it all in browser
            document.getElementById("demo").innerHTML=this.responseText
        }
        else{
            document.getElementById("demo").innerHTML="File not found"

        }
    }


// .open(): Yeh ek method hai jo XMLHttpRequest object ke saath use hota hai. Is method ke zariye hum request ke details ko configure karte hain, jaise ki HTTP method (GET, POST, etc.), URL, aur kuch aur options.
// yeh sab request ki detail hai
    rose.open("GET", "/ajaxdata.txt", true);  // "GET/POST/ETC", "URL/FILENAME", "TRUE/FALSE"

    // step  : request bhej di
    rose.send();
    // jab request send ho gayi usky bad kuch cheezain ayi hongi rose variable main jisi wajah se wo change hua and then hamara function run hogaya
}

// output : 10 users ka record data agaya if jsonplaceholder is used,,,,, name aya hai abhi 

