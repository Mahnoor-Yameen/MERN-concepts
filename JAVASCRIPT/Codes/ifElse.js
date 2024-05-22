// syntax
// if (round)  {curly}
//else if (round)  {curly}
//else {curly}


var city = prompt("enter your city")
var areacode = +prompt("ennter your area code")


 city = city.toLowerCase();

if (city=='karachi'){
    alert('welcome to city of lights')
}

else{
    alert("khtm")
}

//--------------------------------------------------------

// we uses       || or ,    && and ,    !=  not ,   === datatype 

var color = prompt("enter color")
var number = prompt("enter number")

if(color == 'yellow'  &&  number == 10){
    alert('yellow and 10')
}

else if(color == 'yellow'  &&  number != 10){
      alert("yello and not 10")
}

else if(color == 'red'  || number == 10){
    alert("red or 10")
}