// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// Store the name with whitespace characters
const personNameWithWhitespaces: string = '\t  arfa manal \n  ';

// Print the name with whitespaces
console.log(`Name with whitespaces: "${personNameWithWhitespaces}"`);

// Strip whitespaces using trim()
const personNameStripped: string = personNameWithWhitespaces.trim();

// Print the name after stripping whitespaces
console.log(`Name after stripping whitespaces: "${personNameStripped}"`);
