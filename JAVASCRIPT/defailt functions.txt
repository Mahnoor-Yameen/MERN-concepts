//LIST OF BY DEFAULT FUNCTIONS
// touppercase, tolowercase, slice, replace, math and rounding off
// how many digits to show
//






//slice on string
var named = 'hello welcome to my computer'
var result = named.slice(0,5)    // last index excluded hota ha in slice

console.log(result)    //hello
console.log(named.slice(0, 5).toUpperCase())      //HELLO
console.log(named.slice(3))    //from index 3 to end will display    lo welcome to my computer

//------------------------pyramid

var pyramid = "****************************"

for (var i=1; i<10 ; i++){
    console.log(pyramid.slice(0,i)+ '\n')
}

//------------------------------REPLACE

var school = "sunrise secondary school"
var replacing = school.replace("secondary", "primary")                //only first time appearing wala replace hota
console.log(replacing)         // sunrise primary school


var colors = "yellow yellow yellow"
var replacement = colors.replaceAll("yellow", "red")            //everytime appearance will be changed
console.log(replacement)

//-----------------------------CHARAT

var flower = 'rose'
var letter = flower.charAt(0)            //  0 = first , length-1 = last
console.log(letter)                  //r will be displayed

//-------------------------------ROUNDING NUMBERS

console.log(Math.random())              // random number between 0 - 1
console.log(Math.random()*100)              // random number for custom range
console.log(Math.round(1.72))             //proper round  2              
console.log(Math.ceil(1.25))              // ceil yani uper wali value de dega   2
console.log(Math.floor(1.95))              // floor yani nechy wali value de dega  1

//----------------------------toFixed, toString, 

var num = 1.2536498

console.log(num.toFixed(2))   // toFixed means point k baad kitny digits dikhany
console.log(num.toString())     //ab yeh number, string ban jayega

//---------------------------------parseInt,   parseFloat

var numberstring = "1.2345"

console.log(parseInt(numberstring))         //string to number,  point k bad wala discard hojata ha
console.log(parseFloat(numberstring))         //string to number,  with point k bad wala
