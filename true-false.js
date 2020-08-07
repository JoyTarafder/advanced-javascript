// Falsy :
// 0
// ""
// undefined
// null
// NaN
// Truthy :
// 0, ' ',[]
let age = 9;
if(age || age == 0){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}