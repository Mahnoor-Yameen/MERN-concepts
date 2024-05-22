
var datee = new Date()
console.log(datee)     //Tue Feb 27 2024 10:37:12 GMT-0800 (Pacific Standard Time)
console.log(datee.getDate())    // 27
console.log(datee.getDay())    // 2    yani yeh din ka number batata sun=0 mon=1 tue=2
console.log(datee.getMonth())    //1         jan=0 feb=1 
console.log(datee.getFullYear())    // 2024


//-------------------------------------DOB

var dob = new Date("july 19, 1999")
console.log(dob)                   //Mon Jul 19 1999 00:00:00 GMT-0700 (Pacific Daylight Time)




var myage= new Date () - dob 
console.log(myage/1000*60*60*24*365.25)    // idk why but it is not giving right answer


