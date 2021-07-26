/**
 *  truthy : '0' , ' ', [], true;
 * falsy : 0 ,"", undefined, null , NaN , false
 */
const age1 = 4;
if(age1>0){
    console.log("condition is true")
}
else{
    console.log("condition is false")
}
// -----------------------------------------
const age2 = 4;
if(age2){
    console.log("condition is true")
}
else{
    console.log("condition is false")
}
// ---------------------------------------
const age3 = 0;
if(age3){
    console.log("condition is true")
}
else{
    console.log("condition is false")
}
// ---------------------------------------
const age4 = "0";
if(age4){
    console.log("condition is true")
}
else{
    console.log("condition is false")
}
// -------------------------------------
const name = "salman";
if(name.length>0){
    console.log("condition is true")
}
else{
    console.log("condition is false")
}
// --------------------------------
const name1 = "salman";
if(name1.length){
    console.log("condition is true")
}
else{
    console.log("condition is false")
}
// --------------------------------
const name2 = "salman";
if(name2){
    console.log("condition is true")
}
else{
    console.log("condition is false")
}
// --------------------------------
const name3 = "";
if(name3){
    console.log("condition is true")
}
else{
    console.log("condition is false")
}
// --------------------------------
const name4 = " ";
if(name4){
    console.log("condition is true")
}
else{
    console.log("condition is false")
}
// --------------------------------
let total;
console.log(total);
// ------------------------------
let alex = null;
console.log(alex);
// --------------------------------
let benda = NaN;
console.log(benda);
// --------------------------------