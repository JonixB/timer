let arguments = process.argv.slice(2);
let parsedArgs = 0;

if (arguments.length !== 0 ){
  for (const element of arguments) {
    parsedArgs = Number(element);
    if (isNaN(parsedArgs)) {
      continue;
    }
    setTimeout(() => {
      process.stdout.write('\x07');
      // process.stdout.write('.');
    }, element + '000');
  }
}