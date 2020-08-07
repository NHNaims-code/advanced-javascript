const numbers = [2, 3, 4, 5, 6, 7];

// numbers.map(function(ele, index, arr){
//     console.log(ele, index, arr);
// })
// const square = element => element * element;

// const result = numbers.map(element => element * element);
// console.log(result);

const bigger = numbers.filter( x => x > 3);
console.log(bigger);

const smlr = numbers.find( x => x < 4);
console.log(smlr);