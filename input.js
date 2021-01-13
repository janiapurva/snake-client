const handleUserInput = function(char) {
  if (char === 'x' || char === '\u0003') {
    console.log('exiting programme')
    process.exit();

  }
  
};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data",handleUserInput);
  return stdin;
};

setupInput();

module.exports = {setupInput};