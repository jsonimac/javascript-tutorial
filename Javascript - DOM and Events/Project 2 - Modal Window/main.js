'use strict';

const getDom = (className) =>{
  return document.querySelectorAll(`${className}`)
}

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const buttonClose = document.querySelector('.close-modal')
const buttonOpen = getDom('.show-modal')

// Loop in for loop
// for (let i = 0; i < buttonOpen.length; i++) {
//   buttonOpen[i].addEventListener('click', handlOpen)
// }
function handlOpen() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
// close modal
buttonClose.addEventListener('click', handleClose);
overlay.addEventListener('click', handleClose);

function handleClose(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

document.addEventListener('keypress', function(){
  console.log(`you press somting`);
});

// Loop in for of
for (const i of buttonOpen) {
  i.addEventListener('click', handlOpen)
}
