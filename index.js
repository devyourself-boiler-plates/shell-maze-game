const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("type something, then hit enter.\n", handleUserInput);

function handleUserInput(input) {
  console.log(input);
  readline.close();
}