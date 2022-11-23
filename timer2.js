const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    console.log('Thanks for using me, ciao!');
    process.exit();
  }
  if (key === 'b') {
    process.stdout.write('\x07');
  }
  if (key >= 1 && key <= 9) {
    console.log(`setting timer for ${key} second\/s`);
    setTimeout(() => {
      process.stdout.write('\x07');
      // process.stdout.write('.');
    }, key + '000');
  }
});

console.log('after callback');