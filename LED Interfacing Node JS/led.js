//Require the package to control GPIO 
const Gpio = require('onoff').Gpio;

//Defining GPIO 4 as output 
const led = new Gpio(4, 'out');

//Switching the Led ON
led.writeSync(1);
