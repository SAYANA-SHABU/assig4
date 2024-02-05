
// //Write a JavaScript program to find the most frequent item of an array
var array= ['sayana', 'angel', 'sayana', 2, 3, 'sayana', 3, 'a', 2];
var d = 1;
var e= 0;
var item;
for (var i = 0; i < array.length; i++) {
  for (var j = i; j < array.length; j++)
  {
    if (array[i] == array[j]) e++;
    if (d < e) {
      d = e;
      item = array[i];
    }
  }
  e= 0;
}
console.log(item + " ( " + d + " times ) ");