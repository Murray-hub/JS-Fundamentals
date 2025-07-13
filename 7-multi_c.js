const things = parseInt(process.argv.slice(2));
if (isNaN(things)) {
  console.log("Missing number of occurrences");
} else {
  for (let i = 0; i < things; i++) {
    console.log("C is fun");
  }
}