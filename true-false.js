// var name; //falsy
// var name = 0; //falsy
// var name = ""; //falsy
// var name = " "; //truly
// var name = []; //truly
// var name = {}; //truly
// var name = false //falsy
// var name = null; //falsy
// var name = undefined; //falsy
var name = NaN; //falsy
if(name){
    console.log('is true');
}
else{
    console.log("is false");
}
