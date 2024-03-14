const { Buffer } = require("buffer");

// this will be fast but it has some security related issues because
// it can have some else values as well

// node has 8 kbs of predefined space in the memory this will be take from them
// if the size is less the 4096 node will allocate the memory that it has already taken from ram

const buff = Buffer.allocUnsafe(5000);

// this wont touch that 8kb of predefined space in the memory;

const buff2 = Buffer.allocUnsafeSlow(400);

for (let i = 0; i < buff.length; i++) {
  if (buff[i] != 0) {
    console.log(`The value at the position ${i} is : ${buff[i]}`);
  }
}
