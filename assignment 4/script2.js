// Write a JavaScript program to find the sum of squares of the elements of an array.
function sumofsquares(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] * arr[i];
  }
  return sum;
}

let Array = [1, 2, 3, 4, 5];
const result = sumofsquares(Array);
console.log(result); 
