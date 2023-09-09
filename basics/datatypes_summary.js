// primitive 

// 7 types : string, Number, Boolean, null, undefined, symbol, BigInt

const score = 100  // integer 
const scorevalue = 100.2 // float all in js are called as number.
const isLoggedin= true // boolean 
const tempoutside = null // null
const emailidfetched= undefined; // unidentified
const id = Symbol('123') // symbol : it provides uniqueness 
const idan = Symbol('123') // since this idan variable has the same symbol but both are not same both
// of them are unique 
console.log(id == idan); // bigint: yup it returned me false as these are unique 
let bigNumber = 544644646546464n; // this is a bigint, we end bigint with an 'n'. / rarely used 
console.log(typeof bigNumber); // it gave me bigint

/// non primitive data types / reference data types

// total 3 : Arrays, objects and functions

const heros = ["gallardo", "gtr", "lambo"]  /// these are arryas 
const myobj = {
    name : "zeeshan",     // thats how we create an object in terms of key: value pairs. 
    age : "25",          // things inside the curly braces are objects.
}

const myfunction = function(){    /// this is a function in js
    console.log("hello zeeshan");
}


//                    typeof value                         //

// undefined : " undefined "
// Null : " object"
// Boolean : " boolean"
// Number : "number"
// bigInt : "bigint"
// String : "string"
// object : "object"
// function : " function object"
