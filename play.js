const { connect } = require('./client');
const {setupInput} = require('./input')



console.log('Connecting ...');
let connection = connect();


/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */


setupInput(connection);

//exports.modules = {handleUserInput};
