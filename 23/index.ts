let temperature = 25;
let isSunny = true;
let isRaining = false;
let dayOfWeek = 'Monday';
let fruit = 'apple';
let color = 'red';
let isEven = 10 % 2 === 0;
let isWeekend = dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday';

// Conditional Tests
console.log("Is temperature greater than 30? I predict False.");
console.log(temperature > 30);

console.log("Is it sunny and not raining? I predict True.");
console.log(isSunny && !isRaining);

console.log("Is it Monday or Friday? I predict False.");
console.log(dayOfWeek === 'Monday' || dayOfWeek === 'Friday');

console.log("Is the fruit a banana or an apple? I predict True.");
console.log(fruit === 'banana' || fruit === 'apple');

console.log("Is the color not blue? I predict True.");
console.log(color !== 'blue');

console.log("Is 10 an even number? I predict True.");
console.log(isEven);

console.log("Is it the weekend? I predict False.");
console.log(isWeekend);

console.log("Is temperature less than or equal to 25? I predict True.");
console.log(temperature <= 25);

console.log("Is it not raining? I predict True.");
console.log(!isRaining);

console.log("Is the day of the week 'Tuesday'? I predict False.");
console.log(dayOfWeek === 'Tuesday');

