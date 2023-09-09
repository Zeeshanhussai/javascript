// basic conversions// 

// see these are fine, no issues in them
console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2 !=1);



// problems comes when we do comaprison with different datatypes
// eg- string with number.

console.log("2" > 1); // see these are 2 diff data types but...
//it returned me true... beacuse JS auto converted string "2" into a number 2 and checks and returned true.

// what if we compare null and 0

console.log(null > 0); // it showed false
console.log(null == 0); // it showed false
console.log(null >= 0);// it showed true

// reason because in js equality check == and comaprisons <,>,<=,>= works differently 
// also while comparison it treats null as 0 and NaN and given false in null>0 and true in null >=0.




//*******strict checks  (===) tripple equal ********////
console.log ("2" ===2 ); // lets run it and see what happens.
// it returned false and simply in strict checking it checks the datatypes also , if different it returned false.

