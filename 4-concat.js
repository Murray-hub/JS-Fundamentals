let john = ""
const names = process.argv.slice(2);
if (!names[0]){
    console.log (`0 argument is ${john}`);
}else if (!names[1]){
console.log(`HBTN is ${john}`);
}else{
    console.log('python fun');
}