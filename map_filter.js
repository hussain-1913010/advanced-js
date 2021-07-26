// ---------normal process-----------------------
const numbers = [2,3,4,5,6,7,8]
const output = [];
for(let i=0; i<numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);
// ---------can write function many ways as like------------
/*
    Process 1=>
    funcion square(element){
        return element * element;
    }
    Process 2=>
    const square = element => element * element;

    Process 3=>
    const square = x => x * x;

    Process 4=>
    const result = numbers.map(function(element){
        return element * element
    })

*/
// ---------using array map process-----------------------
const numbers1 = [2,3,4,5,6,7,8];
const result1 = numbers1.map(x => x *  x);
console.log(result1)
// ---------------------------------------filter-----------------------------------------------
const numbers2 = [2,3,4,5,6,7,8,9,13];
const bigger = numbers2.filter(x => x > 5);
console.log(bigger);

// ------------
 const smaller = numbers2.filter(x => x < 7);
 console.log(smaller);
 // ------------
 const isThere = numbers2.find(x => x > 7);
 console.log(isThere);
