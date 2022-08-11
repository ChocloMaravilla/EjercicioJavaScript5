function moneda(){
    var monediña = Math.round(Math.random());
    return monediña;
}

if(moneda() == 0){
    console.log("cruz");
}
else{
    console.log("cara");
}
 