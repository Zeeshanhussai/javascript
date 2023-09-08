let score = 33 

console.log(typeof score);
// and it is showing me number type

// now 
let age ="33"

console.log(typeof age);
// and it showed me string type

// since it showed me a string so how do we change it to number???

let valueInNumber = Number(age)

// here we made a variable to store the converted data 
//+ we use CAPITAL N for number and parse the age variable to convert the age string into nunmber

console.log(typeof valueInNumber) // yup now it converted and given me number as the type

// now comes the tricky part 
// suppose we get value = 33asb so now what should be the type of data????

let data = "33abs"
// now lets check what is the type of this data...
let valueIndata = Number(data)

console.log(typeof valueIndata); // yup it returned me number data type..but is it correct ????
// nope this is not correct... so let's check whats in the valueIndata variable contain??

console.log(valueIndata) // it showed me NaN means NOT A NUMBER 

// if value = null it conervts it to 0.. which is problamtic so we need to be carefull while converting.. 

let value = null;
let valueINvalue = Number(value);
console.log(typeof valueINvalue);
console.log(valueINvalue) // yes it returned 0 which is problamtic


// now lets check for undefined 

let laptops = undefined;
let valueInLaptops = Number(laptops);
console.log(typeof valueInLaptops);
console.log(valueInLaptops); // it returned NaN


// now lets convert number into boolean 

let isLoggedIn = 1;

let valueInIsLoggedIn = Boolean(isLoggedIn);
console.log(valueInIsLoggedIn); // great it returned true//


//*********************// notes//************************//
 
// we found the following conversions

// "33" = 33
// "33abs" = NaN
// true = 1; false= 0