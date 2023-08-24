function make_sandwich(...items: string[]): void {
    console.log("You are ordering a sandwich with the following items:");
    for (const item of items) {
        console.log(`- ${item}`);
    }
    console.log("Enjoy your sandwich!");
}

// Call the function with different numbers of arguments
make_sandwich('Ham', 'Cheese', 'Lettuce', 'Tomato');
make_sandwich('Turkey', 'Swiss Cheese', 'Mustard');
make_sandwich('Peanut Butter', 'Jelly');
