//Requiring the package
const sensor = require('ds18b20-raspi');

//Calling the function to read the Temperature
const tempC = sensor.readSimpleC();

//Logging the Temperature data on terminal
console.log(`${tempC} degC`);
