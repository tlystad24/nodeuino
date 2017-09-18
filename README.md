# Arduino + NodeJS

## Requirements
- Arduino
- LED `(pin 13)``
- NODE.JS
    + Express
    + Johnny-Five

## Deployment
How to run the program

### Arduino
The arduino is using the firmata protocol to recieve instructions from the NodeJS app.
1. Upload `StandardFirmata` to Arduino
2. Connect the Arduino to your computer

### Server
The server is serving a simple website with a button and a status indicator.
1. After downloading, run `npm install` to install the dependencies.
2. Run the server using `npm start` or `node arduino.js`.
3. The server will run on post `1337` unless another port is specified.
4. Open up a browser and navigate to `http://localhost:1337` and click the button to toggle between the led states.