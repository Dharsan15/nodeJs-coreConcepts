// You first create an event (provided by nodejs) along with a callback function
// when you fire the event it will execute the callback function

import { EventEmitter } from "node:events";

// first we should create a class which extends eventemitter class

class Event extends EventEmitter {}

// using this object we can create events and manipulate them
const obj = new Event();

obj.on("fire", () => {
  console.log("An event was emitted 1 !!!");
});

obj.on("fire", () => {
  console.log("An event was emitted 2 !!!");
});

// here we are firing an event
// then the callback of fire will execute
obj.emit("fire");
