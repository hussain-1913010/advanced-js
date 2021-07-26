// ------------------------------
function sum(first , second){
    let result = first + second;
    return result;
}
const output = sum(3,7);
console.log(output);
// -------------not valid-----------------
/*function sum1(first1 , second1){
    let result1 = first1 + second1;
    return result1;
}
const output1 = sum1(3,7);
console.log(result1);*/
// ------------------------------
function sum2(first2 , second2){
    let result2 = first2 + second2;
    console.log(result2);
    return result2;
}
const output2 = sum2(3,7);
// ---------------------------------
let bonus = 20;
function sum3(first3 , second3){
    let result3 = first3 + second3 + bonus;
    console.log(bonus);
    return result3;
}
const output3 = sum3(33,7);
console.log(bonus);
console.log(output3);