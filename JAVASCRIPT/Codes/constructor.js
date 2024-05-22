//                                             CONSTRUCTOR  OBJECT IN FUNCTION: LESS REPITITION
// RULE: first letter capital
// SYNTAX:   function Capital(round){curly}

// curly bracket k ander this. this. kr k cheezain likhni hoti hain
// this. wo word jo output main show hoga as a key
//  this.key = parameter ka word (value)

function Phool (color, smell, name){
    this.color= color;   
    this.smell= smell;
    this.name= name;
    }
    
    // uper humny ek template de diya ab hum actual data dengy 
    // data dety time flow of argument should be same as paramters
    
    var data1 = new Phool("red", "lovely", "Rose")
    console.log(data1)   //     Phool {color: 'red', smell: 'lovely', name: 'Rose'}
    
    
// ---------------------------------------------------CONSTRUCTOR OBJECT IN CLASS----------------------------------------------

// SYNTAX:   class CapitalFirstLetter {curly}
// INSIDE CURLY: constructor (round) {curly}

class Example {

constructor(parameter1, parameter2, parameter3 ){
    this.outputkey1 = parameter1 ;
    this.outputkey2 = parameter2 ;
    this.outputkey3 = parameter3 ;
    this.outputkey4 = function (){
        return "RETURN of OUTPUT4: " + this.outputkey3;
        }
}

}


// now giving data

var data2 = new Example("argument1", "argument2", "arguemnt3")
console.log(data2)                         //Example {outputkey1: 'argument1', outputkey2: 'argument2', outputkey3: 'arguemnt3', outputkey4: ƒ}
console.log(data2.outputkey4());           //RETURN of OUTPUT4: arguemnt3



// checking for yes and no
console.log("outputkey1" in data2)   //true  yeh bata raha k data2 variable main outputkey1 name ki key exist krti h
console.log("outputkey6" in data2)   //false  yeh bata raha k data2 variable main outputkey6 name ki key exist nh krti 


// --------------------------------------------------MORE DEEP IN IT

// hum ab class constructor bana kr usmain for loop lagayengy

class Khana {
    constructor(starter, dish, desert){
        this.STARTER = starter ;
        this.DISH = dish ;
        this.DESERT = desert ;
    }
}

var customer1 = new Khana("cucumber salad", "alfredo pasta", "gajar ka halwa")

for (var i in customer1){
    console.log(customer1)    //3 times Khana {STARTER: 'cucumber salad', DISH: 'alfredo pasta', DESERT: 'gajar ka halwa'}
}

// yeh same output 3 dafa print hua why?
// because key 3 thin .... jitni usko key milli hongi yeh utni times repeat hoga

// ---------------------------------------------------------------------------only values print krna

for (var i in customer1){
    console.log(customer1[i])    
}
// output
// cucumber salad
// Alfredo Pasta
// gajjar ka halwa
