//No numbers are provided: It should just not beep at all and end immediately 
// An input is a negative number: Ignore/skip any numbers that are negative. 
// An input is not a number: Ignore/skip these as well, 
// process.stdout.write('\x07');
// let input = 0
// let delay = 1
function beep(arg) {
  const delay = Number(arg);
  if (delay <= 0) {
    return;
  }

  if (isNaN(delay)) {
    return;
  }

  setTimeout(() => {
    process.stdout.write('\x07');
    console.log("Beep", delay);
  }, delay * 1000);

}

const args = process.argv.slice(2);
// console.log(args)
for (const arg of args) {

  beep(arg);

}


