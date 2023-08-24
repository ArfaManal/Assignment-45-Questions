function make_shirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
    console.log(`The shirt size is ${size} and it has the message: "${message}".`);
}

// Create a large shirt with the default message
make_shirt();

// Create a medium shirt with the default message
make_shirt('Medium');

// Create a small shirt with a custom message
make_shirt('Small', 'Hello, World!');
