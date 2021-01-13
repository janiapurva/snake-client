



const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: `135.23.222.131` ,
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  
  conn.on('data',(input) => {
    console.log(input);
  });

  return conn;
};

module.exports = {connect};
