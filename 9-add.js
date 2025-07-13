/*const args = process.argv.slice(2); 
const num1 = parseInt(args[0]); 
const num2 = parseInt(args[1]); 
const sum = num1 + num2; 
console.log(sum); */
const args = process.argv.slice(2);
function add(a, b){
    console.log(a + b);
}if (isNaN(args[0]) || isNaN(args[1])) {
    console.log("NaN");
}
else {
add(parseInt(args[0]), parseInt(args[1]));}