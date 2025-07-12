const args = process.argv.slice(2);
if(!args[0]){
    console.log('No argument');
}else if(!args[1]) {
    console.log('one argument "HBNT"');
} else{
    console.log('2 argument: "HBNT cool"');
}