"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
const personName = 'arfa manal';
// Convert to lowercase
const lowercaseName = personName.toLowerCase();
// Convert to uppercase
const uppercaseName = personName.toUpperCase();
// Convert to title case
const titlecaseName = personName
    .toLowerCase()
    .replace(/(^|\s)\S/g, (match) => match.toUpperCase());
// Print the results
console.log(`Original Name: ${personName}`);
console.log(`Lowercase Name: ${lowercaseName}`);
console.log(`Uppercase Name: ${uppercaseName}`);
console.log(`Title Case Name: ${titlecaseName}`);
