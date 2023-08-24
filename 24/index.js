"use strict";
// Tests for equality and inequality with strings
// Tests for equality and inequality with strings
let fruit1 = 'apple';
let fruit2 = 'banana';
console.log("Is fruit1 equal to 'apple'? I predict True.");
console.log(fruit1 === 'apple');
console.log("Is fruit2 not equal to 'apple'? I predict True.");
console.log(fruit2 !== 'apple');
// Tests using the lowercase function
let text = 'Hello, World!';
console.log("Is the lowercase version of text 'hello, world!'? I predict True.");
console.log(text.toLowerCase() === 'hello, world!');
// Numerical tests
let num1 = 10;
let num2 = 5;
console.log("Is num1 equal to num2? I predict False.");
console.log(num1 === num2);
console.log("Is num1 greater than num2? I predict True.");
console.log(num1 > num2);
console.log("Is num1 less than or equal to num2? I predict False.");
console.log(num1 <= num2);
// Tests using "and" and "or" operators
let isMorning = true;
let isWeekend = false;
console.log("Is it morning and not the weekend? I predict False.");
console.log(isMorning && !isWeekend);
console.log("Is it either morning or the weekend? I predict True.");
console.log(isMorning || isWeekend);
// Test whether an item is in an array
let colors = ['red', 'green', 'blue'];
console.log("Is 'yellow' in the colors array? I predict False.");
console.log(colors.includes('yellow'));
// Test whether an item is not
