"use strict";
// https://countries-api-836d.onrender.com/countries/

// const getCountry = (countryName)=>{
//    const request = new XMLHttpRequest();
//    request.open('GET',`https://restcountries.com/v3.1/name/${countryName}`)
//    request.send();
//    // console.log(request.responseText);

//    request.addEventListener('load',function(){
//       // console.log(this.responseText);
//       const [data] = JSON.parse(this.responseText)
//       console.log(data);
//       const html = `
//       <article class="country">
//       <img class="country__img" src="${data.flags.svg}" />
//       <div class="country__data">
//          <h3 class="country__name">${data.name.common}</h3>
//          <h4 class="country__region">REGION</h4>
//          <p class="country__row"><span>👫</span>POP people</p>
//          <p class="country__row"><span>🗣️</span>LANG</p>
//          <p class="country__row"><span>💰</span>CUR</p>
//       </div>
//       </article>
//       `;
//       countriesContainer.insertAdjacentHTML('beforeend', html);
//       countriesContainer.style.opacity = 1;
//    })
// }

// getCountry('canada')
// getCountry('philippines')
// getCountry('japan')
const btnCountry = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = (data) => {
  const html = `
<article class="country">
<img class="country__img" src="${data.flags.svg}" />
<div class="country__data">
<h3 class="country__name">${data.name.common}</h3>
<h4 class="country__region">REGION</h4>
<p class="country__row"><span>👫</span>${data.population}</p>
<p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
<p class="country__row"><span>💰</span>${Object.keys(data.currencies)}</p>
</div>
</article>
`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

// --> Use Promise <--
// const getData = fetch('https://restcountries.com/v3.1/name/philippines')
// console.log(getData);

// const getData = (url, errorMessage) => {
//   return fetch(`${url}`).then((res) => {
//     if (!res.ok) throw new Error(`${errorMessage} ${res.status}`);
//     return res.json();
//   });
// };

// const renderError =(err)=>{
//    countriesContainer.insertAdjacentHTML('afterend', err)
// }

// const viewCountry = (countryName) => {
//   getData(
//     `https://restcountries.com/v3.1/name/${countryName}`,
//     "Country not found"
//   )
//     .then((data) => {
//       renderCountry(data[0]);
//       if (!data[0]?.borders) {
//         throw new Error("No Neigbor Found");
//       }
//       return getData(
//         `https://restcountries.com/v3.1/name/${neighbor}`,
//         "Country not found"
//       );
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//     })
//     .catch((erro) => {
//       console.log(erro);
//       renderError(erro);
//     });
// };
// btnCountry.addEventListener("click", function () {
//   viewCountry("philippines");
// });
// viewCountry("australia");

const getLoc = () => {
  return new Promise((resolve)=>{
    navigator.geolocation.getCurrentPosition(resolve)
  })
}



// Make a function "whereAmI" that accept 2 argument Lat and Lang
// const whereAmI = () => {
//   // Reverse geocode the lat and lng
//   getLoc().then((location)=>{
//     const {latitude: lat, longitude: lng} = location.coords;
//     return fetch(
//       `https://api-bdc.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
//     )
//   })
//     .then((res) => {
//       // Create new promise
//       if (!res.ok) {
//         throw new Error("Latitude and Longitude not exist");
//       }
//       return res.json();
//     })
//     .then((data) => {
//       // Log to the console the location like name
//       console.log(
//         `You are in the: ${data.countryName}, ${data.locality}, ${data.principalSubdivision}`
//       );
//       const removeThe = data.countryName
//         .toLowerCase()
//         .replace("(the)", "")
//         .slice(0, -1)
//         .split(" ")
//         .map((char) => {
//           return char[0].toUpperCase() + char.slice(1);
//         })
//         .join(" ");
//       // console.log(removeThe);
//       return fetch(`https://restcountries.com/v3.1/name/${removeThe}`);
//     })
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       // console.log(data);
//       renderCountry(data[0]);
//     })
//     .catch((err) => {
//       return console.error(`Something went wrong` + err);
//     });
// };



// btnCountry.addEventListener("click", function () {
  // whereAmI(11.13234, 122.24918);
  // whereAmI();
  // whereAmI(13.065489, 105.800326);
  // whereAmI(19.100458, 102.614291);
  // whereAmI(20.444439, 96.747592);
  // whereAmI(5.02192, 101.427768);
  // whereAmI(11.13234, 122.24918);
// });

const getCurrentPosition = () =>{
  const currLoc = new Promise((res, err)=>{
    navigator.geolocation.getCurrentPosition(res, err);
  })
  return currLoc  
}


const whereAmI = async () => {
  try {
    const loc = await getCurrentPosition()
    const {latitude: lat, longitude: lng} = loc.coords
    // console.log(latitude, longitude);
    
    const res = await fetch(`https://api-bdc.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`)
    if(!res.ok){
      throw new Error("❌Something went wrong in getting Lat and Long👎");
    }
    const data = await res.json();
    const removeThe = data.countryName
    .toLowerCase()
    .replace("(the)", "")
    .slice(0, -1)
    .split(" ")
    .map((char) => {
      return char[0].toUpperCase() + char.slice(1);
    })
    .join(" ");
    console.log(data.countryName);
    const country = await fetch(`https://restcountries.com/v3.1/name/${removeThe}`);
    if(!country.ok){
      throw new Error(`❌Something went wrong in country👎 ${country.status}`);
    }
    const countryDet = await country.json();
    // console.log(countryDet[0].name.common);

    return `You are in ${countryDet[0].name.common}`;
    // renderCountry(countryDet[0])
  } catch (error) {
    console.error(error);
    throw error
  }
}

console.log('This is 1');
// whereAmI().then(res=>console.log(res)).catch(err=>console.error(`2333 Error ${err}`))
console.log('This is 2');
console.log('Render 4 country in thesame time');

const getJson = (url) =>{

}
function getData(countryName) {
  return fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then((res)=>{
      if(!res.ok){
        throw new Error("❌ Something went wrong in the Country Name 👊");
      }
      return res.json()
    })
}
// console.log(getData('canada'))
// Promise.all([getData('canada'),getData('philippines'), getData('thailand'), getData('mexico')]).then((data)=>{
//   console.log(data);
// }
// )
const getAll = async () =>{
  try {
    const datas = await Promise.all([
        getData('canada'),
        getData('philippines'),
        getData('thailand'),
        getData('mexico')
      ])
    const countryName = datas.map((data)=>{
      return data[0].name.common
    })
    console.log(countryName);
  } catch (error) {
    console.error(error)
  }
}
getAll()
// THIS IS THE FINAL PROJECT FOR ME
// TODO: Make function with all different request and make it run parallel to avoid time consumming.




// function lotto(data) {
//   const rolling = new Promise(function(resolve, reject){
//     console.log('Happening now!!!1');
//     setTimeout(()=>{
//       const result = Math.random();
//       if(result >= 0.6){
//         resolve(`You win !! ${result} \nGreater or equal to 0.6`);
//       }
//       reject(`You loss 🤧 ${result}\nYou  get less than 6`);
//     },data * 1000)
//   });
//   return rolling;
// }

// lotto(1).then((response)=>{
//   console.log(response);
// }).catch(function(erro){
//   console.error(erro);
// })

// const hulat = function(data){
//   const prom = new Promise((res)=>{
//     setTimeout(res, data * 1000)
//   })
//   return prom;
// }
// hulat(6)
// .then(()=>{
//   console.log('Waited for 6 secs');
// })

//TODO: Recreate all by using async await

