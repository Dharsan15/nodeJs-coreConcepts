// write this raw binary data to the memory usign buffers
// 0100 1000 0110 1001 0010 0001

const { Buffer, constants } = require("buffer");

// allocating 3 bytes of buffer size to the container variable
const container = Buffer.alloc(3);

// writing the value in hexadecimal values
container[0] = 0x48;
container[1] = 0x69;
container[2] = 0x21;

// printing the values
console.log(container.toString("utf-8", 0, 3));
