//program to understand the properties of eventEmitter

//Importing events module
var events = require('events');

//creating new eventEmitter object
var eventEmitter = new events.EventEmitter();

//creating first event listener
var eventListener1 = function eventListener1() {
  console.log('Listener1 is successfully executed');
}

//creating second event listener
var eventListener2 = function eventListener2() {
  console.log('Listener2 is successfully executed');
}

//binding first event listener with connection event
eventEmitter.addListener('connection', eventListener1);

//binding second event listener with connection event
eventEmitter.on('connection', eventListener2);

//counting event listeners for after binding two event listener
var eventListenersCount = events.EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListenersCount + " Listener(s) are listening to the connection event");

//fire the connection event
eventEmitter.emit('connection');

//removing the first event listener
eventEmitter.removeListener('connection', eventListener1);

//counting the event listeners after removing second listener
var eventListenersCount = events.EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListenersCount + " Listener(s) are listening to connection event");

//fire the connection event after removing second event listener
eventEmitter.emit('connection');

//end of program statement
console.log('End of program');