const square = parseInt(process.argv.slice(2));
if (isNaN(square)){
    console.log("Missing size");
}for (let i = 0; i < square; i++) {
  let row = '';
  for (let j = 0; j < square; j++) {
    row += 'X';
  }
  console.log(row);
}