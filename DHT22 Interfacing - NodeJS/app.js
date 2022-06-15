//Requiring the package
var sensor = require("node-dht-sensor");
 
//Calling function with takes 2 parameters DHT type (11/22), GPIO number
//This functions calls a function which gives 3 values err, Temperature and Humidity
//If there is no error, the data will be logged on terminal using console.log
sensor.read(22, 4, function(err, temperature, humidity) {
  if (!err) {
    console.log(`temp: ${temperature}°C, humidity: ${humidity}%`);
  }
});
