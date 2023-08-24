"use strict";
// Define an array of magician's names
const magicianNames = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
// Function to show magicians
function show_magicians(names) {
    for (const name of names) {
        console.log(name);
    }
}
// Function to make magicians great
function make_great(names) {
    const greatMagicians = [];
    for (const name of names) {
        greatMagicians.push(`${name} the Great`);
    }
    return greatMagicians;
}
// Create a copy of the magicianNames array
const magicianNamesCopy = [...magicianNames];
// Call make_great with the copy to modify it
const greatMagicianNames = make_great(magicianNamesCopy);
// Call show_magicians with the original and modified arrays
console.log('Original Magicians:');
show_magicians(magicianNames);
console.log('\nGreat Magicians:');
show_magicians(greatMagicianNames);
