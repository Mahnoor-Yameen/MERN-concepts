// TodoApp main after refresh data gayab hojata ha yani k hamain usko store krna chahiye, we have two types of storage:
// 1. Local Storage
// 2. Session Storage

// yeh hoti hain k hamary browser main hi database hota yani saving data in browser phir refresh karo tab bhi data milega.
// yeh dono storages ek time limit k bad expire hojaty.
// Add to cart sirf browser main save krengy no need of API


//  ------------------------------------------LOCAL STORAGE------------------------------
// 1. will remain same if we turn off browser then turn it on.

//------------------------------------------SESSION STORAGE---------------------------------------
// 1. ek session ki had tak rahegi yani band kiya toh gaya data,
// new tab khola to gaya data
// Tab ki had tak rahega


// -----------------------------------LOCAL STORAGE CODE---------------------------------------------

const sendDataToLocalStorage = () => {
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    
    let userdata= {
        EMAIL : email,
        PASSWORD: password
    }
window.localStorage.setItem('form',JSON.stringify(userdata) )
    console.log(userdata.EMAIL, userdata.PASSWORD)
}

// ---------------------------SET ITEM--------------------------------
// it requires two things: name for new entity and  object name to be stored
// window.localStorage.setItem('form',userdata)
// browser understands JSON javascript object notation only.


// -----------------------------  WAY OF CONVERSION  ----------------------------------------
// dekho hamary pass se data jana chahiye string ki form main, wahan se data wapis ayega string ki form main
// bhejny se pehly object ko stringify krengy
// wapis jo string ayi hogi usko json main convert krengy

// ------------------------------------OBJECT TO STRING and STRING TO OBJECT--------------------
// JSON.stringify(object name)
// window.localStorage.setItem('form',JSON.stringify(userdata))    OBJECT TO STRING

// JSON.parse(data)        STRING TO OBJECT


// ------------------------------------------------GET ITEM---------------------------
// let data =  window.localStorage.getItem('keyname')


const getDataFromLocalStorage = () => {
    let data =  window.localStorage.getItem('form')

    console.log(data)   //{"EMAIL":"ee","PASSWORD":"cc"}   yeh string ki form main aya
    console.log(JSON.parse(data))   // ab object ki form main aya jisko hum easily use kr sakty agay

}

// ---------------------------------REMOVE ITEM -----------------------------------

const removeDataFromLocalStorage = () =>{
    localStorage.removeItem('form')
}


// -------------------------------------NOTE------------------------------------------------------
// yeh teeno same functions session storage main bhi use hoty hain simply localstorage ki jagah pe seesion storage likh dena in coding
