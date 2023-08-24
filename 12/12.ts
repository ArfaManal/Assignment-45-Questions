// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
// Store names of friends in an array
const names: string[] = ['Alice', 'Bob', 'Charlie', 'David'];

// Print a personalized greeting message for each person
for (let i = 0; i < names.length; i++) {
  console.log(`Hello, ${names[i]}! How are you doing today?`);
}

function sum(num1: number, num2: number) {
  let sum = num1 + num2;
  console.log(`the sum of ${num1} and ${num2} is ${sum}`);
}

sum(2, 3);

