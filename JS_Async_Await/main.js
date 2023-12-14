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



const renderData = function(data, table){
  // const langu = Object.values(data.languages);
  const html = `
    <tr>
      <td>${data.name.common}</td>
      <td>${data.capital}</td>
      <td>${data.capital}</td>
      <td>${data.population}</td>
    </tr>
  `;
  document.querySelector(table).insertAdjacentHTML('beforeend', html);
}

const renderEmpty = function(table){
  const html = `
    <tr>
      <td>empty</td>
      <td>empty</td>
      <td>empty</td>
      <td>empty</td>
    </tr>
  `;
  document.querySelector(table).insertAdjacentHTML('beforeend', html);
}

const getJson = function(url){
  return fetch(`${url}`)
    .then(response => {
      if(!response.ok){
        throw new Error('country not found')
      }
      return response.json()
    })
}

const getdata = function(name){
    getJson(`https://restcountries.com/v3.1/name/${name}`)
    .then(data => {
      // console.log(data[0].languages);
      console.log(data);
      renderData(data[0], '.country')

      const neigbr = data[0].borders?.[0];
      if(!neigbr) return new Error('No neighbor found');

      return getJson(`https://restcountries.com/v3.1/alpha/${neigbr}`);
    })
    .then(data => {
      console.log(data);
      renderData(data[0], '.neig');
    })
    .catch(err => console.log(err))
}

getdata('china');
getdata('usa');
getdata('philippines');

document.querySelector('.btn-country').addEventListener('click', function(){
  getdata('canada');
})