const nums = [1,2,3,4,5,6,7];
const part = nums.slice(2,5);
console.log(part);
console.log(nums);

const nums2 = [1,2,3,4,5,6,7,8];
const removed = nums.splice(2,4,77,88);
console.log(removed);
console.log(nums2); 

const together = nums2.join("");
console.log(together);

const togetherSpace = nums2.join(" ");
console.log(togetherSpace);

const togetherComma = nums2.join(",");
console.log(togetherComma);

const togetherText = nums2.join(" ami ");
console.log(togetherText);