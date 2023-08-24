const travelDestinations: string[] = [
    "Tokyo",
    "Paris",
    "New York",
    "Bali",
    "Rome"
];

// Print the array in its original order
console.log("Original Order:", travelDestinations);

// Print the array in alphabetical order (without modifying the original)
const sortedDestinations = [...travelDestinations].sort();
console.log("Alphabetical Order:", sortedDestinations);

// Print the original array to show it's still in its original order
console.log("Original Order (unchanged):", travelDestinations);

// Print the array in reverse alphabetical order (without modifying the original)
const reverseSortedDestinations = [...travelDestinations].sort().reverse();
console.log("Reverse Alphabetical Order:", reverseSortedDestinations);

// Print the original array to show it's still in its original order
console.log("Original Order (unchanged):", travelDestinations);

// Reverse the order of the array
travelDestinations.reverse();
console.log("Reversed Order:", travelDestinations);

// Reverse the order of the array again to get back to the original order
travelDestinations.reverse();
console.log("Back to Original Order:", travelDestinations);

// Sort the array in alphabetical order
travelDestinations.sort();
console.log("Alphabetical Order:", travelDestinations);
