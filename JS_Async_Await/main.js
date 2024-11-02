'use strict';

// https://countries-api-836d.onrender.com/countries/

const btnCountry = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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

const renderCountry = (data) =>{
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
      countriesContainer.insertAdjacentHTML('beforeend', html);
      countriesContainer.style.opacity = 1;
}



// --> Use Promise <--
// const getData = fetch('https://restcountries.com/v3.1/name/philippines')
// console.log(getData);

const viewCountry = (countryName) => {
   fetch(`https://restcountries.com/v3.1/name/${countryName}`).then((res)=>{
      return res.json();
   }).then((data)=> {
      console.log(data[0])
      renderCountry(data[0])

      const neigbor = data[0].borders[0]
      console.log(neigbor);
      
      return fetch(`https://restcountries.com/v3.1/name/${neigbor}`)
   }).then((res)=>{
      return res.json();
   }).then((data)=>{
      renderCountry(data[0])
   }).catch((erro)=>console.error(erro))
}
btnCountry.addEventListener('click',function(){
   viewCountry('Canada')
})

