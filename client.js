
const stdin = process.stdin;

const { write } = require('fs');
const net = require('net');


const connect = function() {
  const conn = net.createConnection({
    host: `135.23.222.131` ,
    port: 50542
  });
  // interpret incoming data as text
   conn.setEncoding('utf8');
  // stdin.on('data' , (key,conn) =>{
  //   handleInput(key,conn);
  // });

  conn.on('connect',() => {
    console.log(`Successfully connected to game server`);
    //registring name
    conn.write("Name: apu");


    //command up
    // conn.write("Move: up");
    
    //setting interval
    let counter;
    setTimeout(() =>{
      conn.write('Move: right');
    },counter += 50);
    setTimeout(() =>{
      conn.write('Move: left');
    },counter += 50);

    setTimeout(() =>{
      conn.write('Move: down');
    },counter += 50);

    setTimeout(() =>{
      conn.write('Move: up');
    },counter += 50);
    setTimeout(() =>{
      conn.write('Move: right');
    },counter += 50);

    



    
    //notify when server connected
  

    //command up
    

  });

  

  return conn;
};



// let handleInput = function(key,conn) {

//   if (key === "\u0077") {
//     conn.write("Move: up");
//   }
// };





// const command = function() {
  
  
  
//   //notify when server connected
//   conn.on('connect',() => {
//     //command up
//     conn.write("Move: up");
//     //command down
//     conn.write('Move: down');
//     //command left
//     conn.write('Move: left');
//     //command right
//     conn.write('Move: right');

//     //setting interval
//     let counter;
//     setTimeout(() =>{
//       conn.write('Move: right');
//     },counter += 50);
//     setTimeout(() =>{
//       conn.write('Move: left');
//     },counter += 50);

//     setTimeout(() =>{
//       conn.write('Move: down');
//     },counter += 50);

//     setTimeout(() =>{
//       conn.write('Move: up');
//     },counter += 50);
//     set(() =>{
//       conn.write('Move: right');
//     },counter += 50);

//     setInterval(() =>{
//       conn.write('Move: up');
//     },counter += 50);


    

//   });

  

//   return conn;
// };











module.exports = {connect};
