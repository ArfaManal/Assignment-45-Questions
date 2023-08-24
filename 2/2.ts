// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

const personName: string = 'arfa manal';

// Convert to lowercase
const lowercaseName: string = personName.toLowerCase();

// Convert to uppercase
const uppercaseName: string = personName.toUpperCase();

// Convert to title case
const titlecaseName: string = personName
  .toLowerCase()
  .replace(/(^|\s)\S/g, (match) => match.toUpperCase());

// Print the results
console.log(`Original Name: ${personName}`);
console.log(`Lowercase Name: ${lowercaseName}`);
console.log(`Uppercase Name: ${uppercaseName}`);
console.log(`Title Case Name: ${titlecaseName}`);
