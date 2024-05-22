// INTRODUCTION                      12
// NESTING                          34
// NODE TYPE                         42
// RELATION                         46
// ATTRIBUTE                          59 
// TAG FORMATION                        79
// APPENDING                          84
// USER INPUT  TAKING                      96
// DOM BENEFITS                       106


//                                               INTRODUCTION
// 1.	DOM man hamary pass basically parent child hoty (self closing tag k child nh hoty).
// 2.	1 div -> 3 p inside so those 3 p’s are siblings.
// 3.	Sir ne app.js se console.log (document) likha toh page main console pe document hierarchy ajayegi jaisy <head> <body> etc.
// 4.	JS har chez ko as a object samjhta hai. This model is called DOM.
// 6.	Enter wali space ko dom text batata ha 


console.log(document)

var myfirstdiv = document.getElementById("mydiv")
console.log(myfirstdiv)       //output main html wala tags agaya div and 2 ps

// accessing 3 ps (reference by parent)

var paras = myfirstdiv.getElementsByTagName("p")
console.log(paras)           //    HTMLCollection(3) [p, p, p]      these each p has dropdown for more inside insight
console.log(paras[0])           //    p tag agaya 



//                                                     NESTING
// child nodes of document 

console.log(document.childNodes)  // NodeList(2) [<!DOCTYPE html>, html]     0 = doctype  1 = html
console.log(document.childNodes[1])  // html complete tag     0 = doctype  1 = html
console.log(document.childNodes[1].childNodes)  // document ka childnode1 = html, then html k childnodes = head, text, body
// enter wali space ko text batata ha dom


//                                                 NODE TYPES

    console.log(document.childNodes[1].childNodes[1].nodeType)   // 3 means text

//                                              RELATIONS
document.firstChild
document.lastChild
document.nextSibling
document.parentElement
document.parentNode
document.previousSibling
document.nodeName         //capitalized tagname
document.nodeValue

//ab hum pehla bacha go through kr rahy
console.log(document.childNodes[1].childNodes[2].childNodes[0]) //alternative nechy ha
console.log(document.childNodes[1].childNodes[2].firstChild) //alternative
console.log(document.childNodes[1].childNodes[2].lastChild) //alternative for last bacha
console.log(document.childNodes[1].childNodes[2].firstChild.nextSibling) //alternative for second bacha
//aisy hi hum kitny hi necxt siblings laga kr agay barh skty for nesting
//previous.sibling bhi hota ha for coming out
//parentnode and parentelement bhi hota ha 




//                                             ATTRIBUTES (  HAS / GET / SET  )

// HAS se true false maloom krna yes and no wala
var mydivv = document.getElementById("mydiv")
console.log(mydivv.hasAttribute("id"))   // ("class")    // agar mydivv variable k pass koi ID hogi kisi element ki toh true wrna false



// GET se attribute name munwayengy
var phool = document.getElementById("flower")

console.log(phool.getAttribute("id"))       //phool variable main agar koi id hai toh munwali, class bhi pooch skty


// SET
// we can give "class", "id", "onclick", har attribute de skty hain
phool.setAttribute("class", "rose")           //humny isko class de di
console.log(phool.getAttribute("class"))


//                                               TAG FORMATION

var fun = document.createElement("p")    // document.createElement("tagName")


//                                         APPENDING 

// jo cheezain hawa main hoti hain unko sahi jagah pe lana append child kehlata ha
// parentTAG. appendChild ( childTAG )
// jahan.appendchild (jisko)    jisko jahan dhalna ha aisy krdo

var house = document.createTextNode("Sweet Home")             // ek text save krwa diya variable main
fun.appendChild(house)                                    // fun variable main p tag tha, usmain house text dhal diya
console.log( fun)             // output :  <p> Sweet Home </p>



//                                          USER INPUT LENA


// document.gebid(" ").value se user jo bhi input dega wo ajayega

var h = document.getElementById("koi bhi id").value 




//                                       DOM  BENEFITS

// 1. no junk artifacts, yani enter nh dhalna toh Text(3) nh banega
