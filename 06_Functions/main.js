'use strict';




// First Class Function
// -----------------------------------
// -> Treated as values
// -> Another type of Object
// const firstFunc = function(data){
//     return `This is the data: ${data} passed to the function`
// }
// console.log(firstFunc('Jessie'));
// -----------------------------------


// Higher Order Function
// -----------------------------------
// --> Accepts callback function
// const sampFunc = function(data){
//     let [firstLett, ...rest] = data.split(' ');
//     return firstLett.toLowerCase()
// }
// This is the higher order function
// const higFunc = function(str, fn){
//     let details = fn(str);
//     return details;
// }
// console.log(higFunc('JESIE CAMINOS dD dd', sampFunc));
// -----------------------------------
