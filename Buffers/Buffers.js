// buffers are the piece of memory that we can allocate to a variable
// this behaves similar to array but it is not array

const { Buffer } = require("buffer");

// we can allocate required amount of space to the variable using alloc() method
const container = Buffer.alloc(7);

// we can set value to each byte
container[0] = 68;
container[1] = 72;
container[2] = 65;
container[3] = 82;
container[4] = 83;
container[5] = 65;
container[6] = 78;

// converting the buffer it to string

console.log(container.toString("utf8"));


// we can also create buffer in this way as well

const buff = Buffer.from([65 , 66 , 67]);

console.log(buff.toString("utf-8"));

// another way to creat a buffer and give values

const buff1 = Buffer.from("486921" , 'hex');

console.log(buff1.toString("utf-8"));
