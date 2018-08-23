//program to understand the concepts of buffer

//creating a new instance of a buffer
buf = new Buffer(256);

len = buf.write("Simple Easy Learning");

console.log('Octets written :  ' + len);
console.log('Buffer give :  ' + buf);
