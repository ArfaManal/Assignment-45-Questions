// Define an array of magician's names
const magicianNames: string[] = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];

// Function to show magicians
function show_magicians(names: string[]): void {
    for (const name of names) {
        console.log(name);
    }
}

// Call the function to show magicians
show_magicians(magicianNames);
