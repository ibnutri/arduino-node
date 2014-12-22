var five = require("johnny-five"), 
    board = new five.Board({port: "COM3"});
    // default di komputer gw COM3, disesuaikan aja

board.on("ready", function() {

  // pin 13 di UNO itu defaultnya udah ada. make ini biar nggak perlu apa2 juga udah bisa ditest
  var pin = 13;
  // Create a standard `led` hardware instance
  var led = new five.Led(pin);
  led.strobe(500);
});