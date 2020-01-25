// Write a function that displays the result of 5+6+7+8+9+10.
function display() {
  console.log(5 + 6 + 7 + 8 + 9 + 10)
}
display();

// Write a function that returns the perimeter of a rectangle with a width of 5 and a height of 8.
function display() {
  console.log(5 + 6 + 7 + 8 + 9 + 10)
}
display();

function perimeter() {
  console.log(5 + 5 + 8 + 8)
}
perimeter();

// Write a new function that returns the perimeter of a rectangle with the width and height being specified as arguments to the function.
function perimeterrectangle(width, height) {
  console.log(2 * (5 + 8));
}
perimeterrectangle();

//Write a function that converts fahrenheit, given as an argument, to celcius.

function Celcius(F) {
  console.log((F - 32) * 5 / 9 + 'C');
}
toCelcius(20)

//Write a function that converts celcius, given as an argumen, to fahrenheit

function Farenheit(C) {
  console.log(((C) * 9 / 5) + 32 + 'F');
}
Farenheit(0)

//Write a function that calculates tip with 2 arguments, the bill and the tip percentage. Use the build-in JS toFixed() method to round the answer to two decimal places.
function tip(bill, tipPercentage) {
  console.log((3574 / 100) * 20)
}
tip();
tip = 714.8000000000001.toFixed(2);

//Write a function that takes a number an an argument and returns the sum of each individual digit. So an input of 998 would return 26 (because 9 + 9 + 8) is 26

function sunOfDigits() {
  var a = 998;
  var sum = 0;
  while (a > 0) {
    sum += a % 10;
    a = Math.floor(a / 10);
  }
  console.log(sum);
}
sunOfDigits()

// Write a function that takes an argument in seconds and specifies the equivalent number of years.

function secondsToYear(seconds) {
  console.log(500000000 / 31536000)
}
secondsToYear();

//Write a function that takes a number an an argument and returns the sum of each individual digit. So an input of 998 would return 26 (because 9 + 9 + 8) is 26.

var value = 998,
    sum = value
        .toString()
        .split('')
        .map(Number)
        .reduce(function (a , b) {
            return a+b;
        }, 0);
console.log(sum);

//Write the same function above, but that takes an input from the built-in browser function, prompt().
<html>
<button onclick="myFunction()">click me</button>
<p id="demo"></p>
</html>

 function myFunction() {
 
  var number = prompt("Enter a number");
  if (number != null) {
  
   var value = number,
   sum = value
  .toString()
  .split('')
  .map(Number)
  .reduce(function (a , b) {
  return a+b;
       }, 0);
    
console.log(sum);
  document.getElementById("demo").innerHTML = "the sum is " + sum; 
}
}


//Write a function that returns the current date and time.

function currentDate(){
  var d = new Date();
  console.log(d);
  }
  currentDate();

 // Write a function that returns the date 33 days from now.
 
 function futureDate(){
  var d = new Date();
 d.setDate(d.getDate() + 33);
console.log(d);
}
futureDate();

//Write a function that returns the mean of an array of numbers.

function getMean(){
  var x = arr => {
  var y = (total, currentValue) => total + currentValue
  var sum = arr.reduce(y);
    console.log(sum / arr.length)
  }
  x([1, 2, 3]);
  }
  getMean();

  // Write a function that randomly generates a number between 1 and 12, and returns the name of the corresponding month.

  function randomNumber() {
    console.log(Math.random());
  }
  randomNumber();
  
  function randomNumber() {
    console.log((Math.random() * 10) + 1);
  }
  randomNumber();
  
  function randomNumber() {
    console.log(Math.floor(Math.random() * 10) + 1);
  }
  randomNumber();
  
  function randomNumber() {
    console.log(Math.floor(Math.random(1) * 10));
  }
  randomNumber();
  
  function randomNumber() {
    console.log(Math.floor(Math.random(1) * 10));
  }
  randomNumber();
  
  const months = ["Jan", "Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"]
  
  months[3]
  
  months[Math.floor(Math.random(1) * 12)]

  //Write a function that takes three numbers as arguments, and returns the same 3 numbers in increasing order (more specifically, non-decreasing order if multiple numbers are the same).

  [1, 23, 100].sort(function(a, b){
    if (a > b)
        return 1;
    if (a < b)
        return -1;
    return 0
});

//Write a function that returns the appropriate boolean value if a given string argument is a palindrome, where the string is the same when reversed. Examples of palindromes are "racecar" and "3003".
//Ex: isPalindrome("racecar") returns true. isPalindrome("racecars") returns false.

function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}
palindrome("A man, a plan, a canal. Panama");

//Write a function that returns true when two inputs are equivalent when using coercion, but not equivalent without coercion.
//Ex: isCoerced(5,"5") returns true. isCoerced(5,5) returns false. isCoerced(4,"shoe") returns false.



//Write a function that takes an array of numbers as an argument and sorts them in increasing order.
let arr = new Array(10).fill(null);

arr = arr.map(() => (Math.floor(Math.random() * 200) + 1));

arr.sort();


//Write a function called isEven() that returns true if a given argument is even.

function isEven(n) {
  return n % 2 == 0;
}
isEven(2);

//Write a function called isOdd() that returns true if a given argument is odd. Do this by only using the isEven() function you wrote previously.

function isOdd(z) {
  return isEven(Number(z) + 1);
}
isOdd(5)

//Write a function that returns true if a given argument is a multiple of 3. Examples of multiples of 3 are 0,3,6,9 ...

function isdivisibleBy3(n) {
  return n % 3 == 0;
}
isdivisibleBy3(6)

//Write a function that takes two arguments. Check if the first argument is the multiple of the second argument. Return the appropriate boolean.

function multipleOfSecond(x, y) {
  return x % y == 0;
}

multipleOfSecond(6, 2)

//Write a function that takes an array of numbers as an argument and returns the smallest number in the array.

var arr = [5,1,9,5,7];
var smallest = arr[0];
for(var i=1; i<arr.length; i++){
    if(arr[i] < smallest){
        smallest = arr[i];   
    }
}
console.log(smallest);

//Write a function that returns the largest integer n where n*n is still less than 12,000.
// (Hint 1, use a while loop). (Hint 2, you don't need an argument).

var i = 1;
while ((i*i) < 1200) {
  i++;
}

//Write a function that takes a string as an argument and returns the reverse of that string.

function reverseString(str) {
  return str.split("").reverse().join("");
}
reverseString("hello");

//Write a function that counts the occurences of a specific element in an array, specified as a function argument.
//For example, for the array [5,7,12,5,3,3,5], the function countOccurences(3) would return a value of 2.

var arr = [5, 5, 2, 1, 4, 5];
var counts = {};

for (var i = 0; i < arr.length; i++) {
  var num = arr[i];
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}
console.log(counts[5]);

//Write a function that returns a multidimensional array that contains number of occurences for every element of an array.
//For example, for the array [5,7,12,5,3,3,5], the function countAllOccurences(array) would return: [[5,3],[7,1],[12,1],[3,2]]

-  use sort
- icrement with 1

//Write a function that takes an array of numbers as an argument and sorts them in increasing order.

var arr = [2, 5, 8, 1, 4]
console.log(arr.sort());

//Write a function that takes two sorted arrays of numbers as arguments, and returns one new sorted array containing the numbers from both of the arrays given as arguments. Call this function merge().

function merge(a, b) {
  var sorted = [], indexA = 0, indexB = 0;
  while (indexA < a.length && indexB < b.length) {
      if (sortFn(a[indexA], b[indexB]) > 0) {
          sorted.push(b[indexB++]);
      } else {
          sorted.push(a[indexA++]);
      }
  }
  if (indexB < b.length) {
      sorted = sorted.concat(b.slice(indexB));
  } else {
      sorted = sorted.concat(a.slice(indexA));
  }
  return sorted;
}
function sortFn(a, b) {
  return a - b;
}
console.log(merge([1,2,3,5,9],[4,6,7,8]));

//Leibniz's formula can compute pi. the formula is given below:
//pi = 4 * (1 - (1/3) + (1/5) - (1/7) + (1/9) - (1/11) + ...).
//The elipsis (the three dots) means this pattern continues forever.
//Notice that the operators ( + and - ) alternate each time.
//Write a function called calculatePi(), that takes an argument that specifies the number of terms to calculate from (don't include the 4 in the count) with this formula and returns the value. For example if you said:
//Ex. calculatePi(5) would return the result of the first 5 terms in the parentheses, meaning 1 through (1/9) in this case