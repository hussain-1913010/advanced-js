//-----------must read -------------------
// -----thatjsdude.com articles to clear the concepts-------- 
function stopWatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
const clock1 = stopWatch();
console.log(clock1);
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock1());
console.log(clock1());
console.log(clock2());
console.log(clock2());
