//Create a function that takes two numbers as arguments and return their sum.

function sumOfTwoNumbers(num1, num2){
    return num1 + num2;
  }
  
  console.log(sumOfTwoNumbers(2,4));
  document.getElementById("button1").onclick = sumOfTwoNumbers;
  
  
  //return a varible to the 3rd power 
  
  function cubedVarible(a) {
      return a * a * a
  }
  
  console.log(cubedVarible(6));
  document.getElementById("button2").onclick = cubedVarible;
  
  //Write a function that converts hours into seconds
  
  function howManySeconds(hours) {
      return hours * 60 * 60 
  }
  
  console.log(howManySeconds(15));
  document.getElementById("button3").onclick = howManySeconds;
  
  //Write a function that takes an integer minutes and converts it to seconds
  function convert(minutes) {
      return minutes * 60
  }
  
  console.log(convert(15));
  document.getElementById("button4").onclick = convert;
  
  //Create a function that takes a number as an argument, increments the number by +1 and returns the result.
  function addition(num) {
      return num + 1;
  }
  console.log(addition(15));
  document.getElementById("button5").onclick = addition;
  
  //Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).
  function sumPolygon(n) {
      return (n - 2 ) * 180;
  }
  console.log(sumPolygon(15));
  document.getElementById("button6").onclick = sumPolygon;
  