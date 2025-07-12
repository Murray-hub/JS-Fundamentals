const args = process.argv.slice(2);

if (!args[0]) {
  console.log('No argument');
} else if (!args[1]) {
  console.log('HBTN');
} else if (!args[2]){
  console.log('HBTN cool');
}