/*function parentFunction(name, callback) {
    setTimeout(callback,1000);
    console.log("Hey "+name);

}
function randomFunction(){
    console.log("Hey I am callbackfunction");

}
parentFunction("Random String ",randomFunction);*/


//same code can also be written in this way with anonymous function

function parentFunction(name,callback){
    setTimeout(callback,1000);
    console.log("Hey "+name);

}
parentFunction("Random String",function(){
    console.log("Hey I am a callback Function");
});
