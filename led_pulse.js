var five = require("johnny-five"), 
    board = new five.Board({port: "COM3"});
    // default di komputer gw COM3, disesuaikan aja

board.on("ready", function() {

  // pin 9 di UNO itu PWM. kita perlu pin PWM untuk ngatur brightness
  var pin = 9;
  
  var led = new five.Led(pin);
  // bikin led seakan2 pulse (on off, tapi progressif tiap 500ms)
  led.pulse(500);
});