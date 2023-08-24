const fruits = ['apple', 'banana', 'orange'];

// Intentional Error: Accessing an invalid index (index 3) to trigger an error
const invalidIndex = fruits[3]; // This will produce an error

console.log(invalidIndex); // This line won't be reached due to the error

// Corrected version
if (invalidIndex !== undefined) {
    console.log(invalidIndex); // This line won't be executed due to the error
} else {
    console.log('Invalid index, no fruit at index 3');
}
