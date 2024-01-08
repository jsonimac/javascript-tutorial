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


// -----------------------------------------------------
// Create function that accepts lat and lng
// Reverse geocode from coordinates to location
// Log the message to console "You are in philippines"
// Chain catch method to log if there is error
// Make error handlers to catch the errors that can't be handle by fetch method
// -> make if statement inside response method
// -----------------------------------------------------

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

//   function last(){
//     console.log('hellor they're');
//   }

//   function names() {
//     last()
//   }


//   fetch('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=12.8797&longitude=121.7740')
//   .then(function(res) {
//     console.log(res);
//   })
//   .then(data =>{

//   })

//   names()


//   img.addEventListener('load', () => {
//     console.log('Hello click');
//   });


// Make a sample promise assigned to a variable
// let lottery = new Promise((resolve, rejects)=>{
//   // pic a randomp number from 1 - 0 
//   let random = Math.random();
//   console.log(random);
//   console.log('ON going PCSO....');

//   // Make times 4 seconds then execute the code.
//   setTimeout(function(){

//     // Check if the random number if not greater 5 then loss
//     if(!(random >= 0.5)){
//       return rejects('You losss')
//     }

//     // Return resolve if the guard clause is not satisfied.
//     return resolve('The number is greater then 0.5')
//   }, 4000)

// })


// lottery
// // use then method to retrive the resolve
//   .then(reslv => {
//     console.log(reslv);
//   })
// // use catch method to get rejected.
//   .catch(rejc => {
//     console.log(rejc);
//   })

// -----------------------------------
// Promisifying
// -----------------------------------------------------

// const hulat = function(seconds){
//   const promise = new Promise((resolve) => {
//     setTimeout(function(){
//       resolve(`waited ${seconds}`)
//     }, seconds * 1000)
//   }); 
//   return promise;
// }

// hulat(3).then(response => {
//   console.log(response);

//   // use return to pass the value to the next "then" method. 
//   return hulat(2)
// })
// .then(res => {
//   console.log(res);

//   // return another hulat
//   return hulat(4)
// })
// .then(res =>{
//   console.log(res);
// })




// -----------------------------------------------------
// Create google maps
// Add googlemaps
// Initialize and add the map
// let map;
// -----------------------------------------------------

// async function initMap(latitude, lngitude) {
//   // The location of Uluru
//   const position = { lat: latitude, lng: lngitude };
//   // Request needed libraries.
//   //@ts-ignore
//   const { Map } = await google.maps.importLibrary("maps");
//   const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

//   // The map, centered at Uluru
//   map = new Map(document.getElementById("whereI"), {
//     zoom: 4,
//     center: position,
//     mapId: "DEMO_MAP_ID",
//   });

//   // The marker, positioned at Uluru
//   const marker = new AdvancedMarkerElement({
//     map: map,
//     position: position,
//     title: "Uluru",
//   });
// }

// End of google maps


// ----------------------
// Keep promisifying all
// -----------------------------------------------------

// const currentlocation = function(){
//   const location = new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(resolve, reject)
//   })
//   return location;
// }

// const getLocation =  function(){
//   currentlocation().then(res => {
//     let {latitude, longitude} = res.coords
//     return fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`)
//   })
//   .then(res => {
//     return res.json();
//   })
//   .then(data => {
//     // return initMap(data.latitude, data.longitude);
//   })
// }
// console.log();

// display the maps
// getLocation();
// initMap(20.910245, 17.853431);


// -----------------------------------------------------
//TODO: Challenge.
// Make image promise
// display image in 2 sec
// hide image for 2 sec
// dislay another image
// hide again the image 
// use promise apply the lessons learned.
// -----------------------------------------------------


// const imageContainer = document.querySelector('.image-container')

// const makeImage = function(path){
//   const imageEl = document.createElement('img');
//   const loadedImage = new Promise((resolve, reject)=>{
//     imageEl.src = path;
//     // listen if the image event is load
//     imageEl.addEventListener('load', function(){
//       imageContainer.append(imageEl)
//       resolve(imageEl);
//     });

//     // listen if the image event is error 
//     imageEl.addEventListener('error', function(){
//       reject(new Error('No Image found'));
//     });
//   })

//   return loadedImage;
// }

// const wait = function(seconds){
//   const waited = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve()
//     }, seconds * 1000);
//   });
//   return waited
// }

// let imge;
// makeImage('./jess.jpg')
//   .then(res => {
//     imge = res
//     console.log('displayed');
//     return wait(2)
//   })
//   .then(() => {
//     console.log('hide');
//     imge.style.display = "none"
//     return makeImage('./gwapo.jpg')
//   })
//   .then((res)=>{
//     imge = res
//     return wait(2)
//   })
//   .then(()=>{
//     imge.style.display = "none"
//   })
//   .catch(err => {
//     console.error(err);
//   })

// -----------------------------------------------------
// Do Async Await

// ----------------
// 1. Make a function that ask for knowing location named getPosition
// 2. Make a async function name getLocation
// 3. Call the function getPosition
// 4. Get the geolocation from the GetPosition (lat, lng)
// 5. Pass the lat and lng as arguments to the fetch method
// 6. Convert to json to data.
// 7. Render to the html
// 8. Make a manual error handler for each of the promise that will call api
// 9. Wrap all in try catch block
// ----------------

// async function initMap(data) {
//   // The location of Uluru
//   const center = { lat: 8.37058, lng: 123.707013 };
//   const position = { lat: data.latitude, lng: data.longitude };

//   // Request needed libraries.
//   //@ts-ignore
//   const { Map } = await google.maps.importLibrary("maps");
//   const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

//   // The map, centered at Uluru
//   let map = new Map(document.getElementById("whereI"), {
//     zoom: 8,
//     center: center,
//     mapId: "DEMO_MAP_ID",
//   });

//   // The marker, positioned at Uluru
  
//   new AdvancedMarkerElement({
//     map: map,
//     position: position,
//     title: data.city,
//   });
// }

// 1. Make a function that ask for knowing location named getPosition
// const getPosition = function(){
//   const currentPosition = new Promise((resolve) => {
//     navigator.geolocation.getCurrentPosition(resolve);
//   });
//   return currentPosition
// }

// 2. Make a async function name getLocation
// const getLocation = async function(){
//   try {

//     // 3. Call the function getPosition
//     const location = await getPosition()

//     // 4. Get the geolocation from the GetPosition (lat, lng)
//     const {latitude, longitude} = location.coords;
    
//     // 5. Pass the lat and lng as arguments to the fetch method
//     const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude.das}&longitude=${longitude}`);
    
//     // 8. Make a manual error handler for each of the promise that will call api
//     if(!response.ok) {
//       throw new Error('Something went wrong.....')
//     }

//     // 6. Convert to json to data.
//     const data = await response.json();
//     console.log(data);
    
//     // 7. Render to the html
//     initMap(data)

//     return `This is ${data.city}`

//   }catch (error) {
//     //To immediately avoid executing the rest of the code use "throw"
//     throw new Error(error)
//   }
  
// };


// console.log(`This is 1`);
// getLocation() 
// getLocation().then(res => console.log(res)).catch(err=>{console.log(err)})
// console.log(`This is 2`);


// Calling another async from other async function.
// (async function(){
//   try {
//     const place = await getLocation();
//     console.log(place);
//   } catch (error) {
//     throw new Error(error);
//   }
// })();
// console.log('lastlyy');


// Goal is Display Multiple marks in maps
// 1. Display sample mark in maps.
// 2. Call sample api inside maps.
// 3. Convent data from api to mark.
// 4. Call multiple api inside maps and run them in parallel.
// 5. Convert to data and display them as marks.


// const result = getJson('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=8.335700&longitude=123.855124')
// console.log(result);
const getJson = async function(url){
  try {
    const response = await fetch(`${url}`);
    if(!response.ok){
      throw new Error('country not found')
    }
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(error)
  }
  
}

async function initMap() {
  // The location of Uluru
  const center = { lat: 8.37058, lng: 123.707013 };


  // ------------------------------------------------
  // Not Using parallel Promise
  // ------------------------------------------------
  // const location1 = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=8.335700&longitude=123.855124`)
  // const data = await location1.json();
  // const position = { lat: data.latitude, lng: data.longitude };
  // const position1 = { lat: 7.991384, lng: 122.944999 };
  // const position2 = { lat: 8.376312, lng: 123.290677 };
  // ------------------------------------------------

  const datas = await Promise.all([
    getJson('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=8.62622&longitude=123.393693'),
    getJson('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=-1.23706&longitude=116.847904'),
    getJson('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=-0.92398&longitude=117.20735')
  ])


  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  let map = new Map(document.getElementById("whereI"), {
    zoom: 10,
    center: center,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru

  for (const places of datas) {
    const {city, latitude, longitude} = places;
    console.log(datas[places]);
    new AdvancedMarkerElement({
      map: map,
      position: {lat: latitude, lng: longitude},
      title: city,
    });
  }
  
}

initMap()



// const result = async function(){
//   // const datas = await Promise.all([
//   //   getJson('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=8.62622&longitude=123.393693'),
//   //   getJson('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=-1.23706&longitude=116.847904'),
//   //   getJson('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=-0.92398&longitude=117.20735')
//   // ])
//   // const data1 = await getJson('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=8.62622&longitude=123.393693');
//   // const data2 = await getJson('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=-1.23706&longitude=116.847904');
//   // const data3 = await getJson('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=-0.92398&longitude=117.20735');
//   // const latlng = [data1.city, data2.city, data3.city]

//   // console.log(datas); 

//   // for (const places in datas) {
//   //   const {city, latitude, longitude} = places
//   //   // console.log(city, latitude, longitude );
//   //   console.log(datas[places].latitude);

//   // }
  
// }

// result();



