// Make a list of current users
const current_users: string[] = ['John', 'Alice', 'Bob', 'Eric', 'Jane'];

// Make a list of new users
const new_users: string[] = ['Sarah', 'Bob', 'Mike', 'John', 'Anna'];

// Loop through new_users to check for unique usernames
for (const new_user of new_users) {
    // Check if the new username exists in current_users (case-insensitive)
    const usernameExists = current_users.some(current_user => current_user.toLowerCase() === new_user.toLowerCase());

    if (usernameExists) {
        console.log(`Sorry, the username '${new_user}' is not available. Please choose a different username.`);
    } else {
        console.log(`Congratulations! The username '${new_user}' is available.`);
    }
}
