"use strict";
function describe_city(city, country = 'USA') {
    console.log(`${city} is in ${country}.`);
}
// Call the function for different cities and countries
describe_city('Karachi', 'Pakistan'); // City in Pakistan
describe_city('New York'); // Default country (USA)
describe_city('Sydney', 'Australia'); // City in Australia
