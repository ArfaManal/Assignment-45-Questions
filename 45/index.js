"use strict";
function createCar(manufacturer, modelName, ...options) {
    const carInfo = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    for (const [key, value] of options) {
        carInfo[key] = value;
    }
    return carInfo;
}
// Call the function with required and additional information
const car = createCar('Toyota', 'Camry', ['color', 'Blue'], ['year', 2023]);
// Print the car object
console.log(car);
