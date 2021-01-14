let connection;
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data",handleUserInput);
  return stdin;
};






const handleUserInput = function(char) {
  if (char === 'x' || char === '\u0003') {
    console.log('exiting programme');
    process.exit();

  } else if (char === "w") {
    connection.write("Move: up");

  }  else if (char === "a") {
    connection.write('Move: left');

  } else if (char === "s") {
    connection.write("Move: down");

  } else if (char === "d") {
    connection.write("Move: right");
  } else if (char === "z") {
    connection.write("Say: Move away");
  } else if (char === "m") {
    connection.write("Say: Hii Man");
  } else if (char === "o") {
    connection.write("Say: Get out from my way");
  }

};





//setupInput();


// if (key === "w") {
//   console.log(""Move: up"")};
// } else if (key === "a") {
//   conn.write("");
// } else if(key === "s"){
//   conn.write("down");
// }else if(key === "d"){
//   conn.write("right")
// }





module.exports = {setupInput};