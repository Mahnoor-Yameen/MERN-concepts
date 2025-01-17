var student = ['mahnoor', 'yameen', 'shareef', 'abdullah', 'molani', 'chippa' ]

console.log(student)  // all things printed
console.log(student[0])   //oth index wala printed 'mahnoor'

// updation    var_name [index no] = 'new data'

student[0] = 'hassan'
console.log(student)   // all data with first data hassan

// updation with empty indexes

student[10] = 'unknown'
console.log(student)   // ['hassan', 'yameen', 'shareef', 'abdullah', 'molani', 'chippa', empty × 4, 'unknown']


//PUSH            var_name (round bracket)      will be added in end
student.push('food', 'items')
console.log(student)

// POP            var_name.pop()               end element will be removed

student.pop()
console.log(student)

//shift           var_name.shift()               first element of array will be deleted   

student.shift();
console.log(student)

//unshift         var_name.unshift("add", "items")       these item will be placed in starting of array

student.unshift("mahnoor")
console.log(student)

// splice                      changes original array
// var_name.splice (index, delete count, 'element')    
//0 = not delete existing
// 1 = delete existing
// 2 = delete existing and next one also

var flower = ['rose', 'sunflower']
flower.splice (0, 0, 'chambeli')      // chambeli, rose, sunflower
                
var food = ['burger', 'pizza', 'golgappy']
food.splice ( 1 , 1 , 'nihari')   // burger, nihari, golgappy

var color = ['yellow', 'red', 'blue', 'green', 'purple', 'white']
color.splice(1, 2, 'mohagny')    // ['yellow', 'mohagny', 'green', 'purple', 'white']

//slice             don't changes original , copy of an array
// var var2 = var1.slice ( starting index, ending index )    end wala excluded hota ha 

var original = ['keyboard', 'mouse', 'cpu', 'data cable', 'handfree', 'monitor']
var sliced = original.slice (1,4) // mouse, cpu, data cable
