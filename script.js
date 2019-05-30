const numbers = [
  67,
  80,
  65,
  79,
  86,
  66,
  75,
  71,
  81,
  69,
  90,
  79,
  68,
  65,
  73,
  88
];

// 1. Convert numbers to Alphabet according to Ascii table using the fromCharCode method
// Using a for loop:
for (let index = 0; index < numbers.length; index++) {
  const res = String.fromCharCode(numbers[index]);
  document.getElementById("forLoop").innerHTML += res + " ";
  console.log("for loop", res);
}
// Using the forEach method:
numbers.forEach(element => {
  const res = String.fromCharCode(element);
  document.getElementById("forEach").innerHTML += res + " ";
  console.log("forEach", res);
});
// Using the map method:
const resMap = numbers.map(item => String.fromCharCode(item));
//use join to remove the commas, or add them
document.getElementById("map").innerHTML = resMap.join(" ");
console.log("map", resMap);

// 2. Display numbers below showing only numbers that are greater than 72 and less then 88 (inclusive) using the filter method
// Answer:
const resFilter = numbers.filter(number => number > 72 && number <= 88);
document.getElementById("filter").innerHTML = resFilter.join(" ");
console.log("filter", resFilter);
// 3. Display the product of all numbers using reduce
// Answer:
const resReduce = numbers.reduce((total, number) => total * number);
document.getElementById("reduce").innerHTML = resReduce;
console.log(resReduce.toString());
