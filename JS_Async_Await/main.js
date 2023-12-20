'use strict';

// document.querySelector('#intro').textContent = 'Hello from Java Script World';
// document.querySelector('#intro').classList.add('text-center');

// const renderData = function(data, table){
//   const langu = Object.values(data.languages);
//   const html = `
//     <tr>
//       <td>${data.name.common}</td>
//       <td>${data.capital}</td>
//       <td>${langu[0]}</td>
//       <td>${data.population}</td>
//     </tr>
//   `;
//   document.querySelector(table).insertAdjacentHTML('beforeend', html);
// }

// const renderEmpty = function(table){
//   const html = `
//     <tr>
//       <td>empty</td>
//       <td>empty</td>
//       <td>empty</td>
//       <td>empty</td>
//     </tr>
//   `;
//   document.querySelector(table).insertAdjacentHTML('beforeend', html);
// }


// const getdata = function(name){
//   fetch(`https://restcountries.com/v3.1/name/${name}`)
//     .then(response => {
//       if(!response.ok){
//         throw new Error('country not found')
//       }
//       return response.json()
//     })
//     .then(data => {
//       // console.log(data[0].languages);
//       renderData(data[0], '.country')

//       const neigbr = data[0].borders?.[0];
//       if(!neigbr) return new Error('No neighbor found');

//       return fetch(`https://restcountries.com/v3.1/alpha/fdfdfdf`);
//     })
//     .then(response => {
//       if(!response.ok){
//         throw new Error('country not found')
//       }
//       return response.json()
//     })
//     .then(data => {
//       renderData(data[0], '.neig');
//     })
//     .catch(err => console.log(err))
// }

// getdata('china');
// getdata('usa');
// getdata('philippines');

// document.querySelector('.btn-country').addEventListener('click', function(){
//   getdata('canada');
// })



// const renderData = function(data, table){
//   // const langu = Object.values(data.languages);
//   const html = `
//     <tr>
//       <td>${data.name.common}</td>
//       <td>${data.capital}</td>
//       <td>${data.capital}</td>
//       <td>${data.population}</td>
//     </tr>
//   `;
//   document.querySelector(table).insertAdjacentHTML('beforeend', html);
// }

// const renderEmpty = function(table){
//   const html = `
//     <tr>
//       <td>empty</td>
//       <td>empty</td>
//       <td>empty</td>
//       <td>empty</td>
//     </tr>
//   `;
//   document.querySelector(table).insertAdjacentHTML('beforeend', html);
// }

// const getJson = function(url){
//   return fetch(`${url}`)
//     .then(response => {
// 
//       // The if handles the fetch method to reject the request
//       if(!response.ok){
//         throw new Error('country not found')
//       }
//       return response.json()
//     })
// }

// const getdata = function(name){
//     getJson(`https://restcountries.com/v3.1/name/${name}`)
//     .then(data => {
//       // console.log(data[0].languages);
//       console.log(data);
//       renderData(data[0], '.country')

//       const neigbr = data[0].borders?.[0];
//       if(!neigbr) return new Error('No neighbor found');

//       return getJson(`https://restcountries.com/v3.1/alpha/${neigbr}`);
//     })
//     .then(data => {
//       console.log(data);
//       renderData(data[0], '.neig');
//     })
//     .catch(err => console.log(err))
// }

// getdata('china');
// getdata('usa');
// getdata('philippines');

// document.querySelector('.btn-country').addEventListener('click', function(){
//   getdata('canada');
// })

// Create function that accepts lat and lng
// Reverse geocode from coordinates to location
// Log the message to console "You are in philippines"
// Chain catch method to log if there is error
// Make error handlers to catch the errors that can't be handle by fetch method
// -> make if statement inside response method

// const whereI = function(lat, lng){
//   fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
//   .then(response => {
//     if(!response.ok){
//       throw new Error('No found response / response = false');
//     }
//     return response.json()
//   })
//   .then(data => {
//     const location = data.countryName;
    
    // Iterate and get all the values of all the name attribute
    // for (const iterator of location) {
    // console.log(iterator.name);
    // }
//     console.log(`You are in the ${location}`);
//   }).
//   catch(err => {
//     console.log(err.message);
//   })
// }

// whereI(12.8797, 121.7740);
// whereI(52.508, 13.381);
// whereI(19.037, 72.837);



// document.querySelector('.btn-country').addEventListener('click', function(){
// })

// let result = document.querySelector('.output');
// let img = document.querySelector('img');
// img.src = 'jess.jpg';

// function last(){
//   console.log('hellor theyre');
// }

// function names() {
//   last()
// }


// fetch('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=12.8797&longitude=121.7740')
//   .then(function(res) {
//     console.log(res);
//   })
//   .then(data =>{

//   })

// names()


// img.addEventListener('load', () => {
//   console.log('Hello click');
// });



