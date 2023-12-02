'use strict';

const getDom = (className) =>{
  return document.querySelectorAll(`${className}`)
}

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const buttonClose = document.querySelector('.close-modal')
const buttonOpen = getDom('.show-modal')

// --- Loop in For Of ---
for (const i of buttonOpen) {
  i.addEventListener('click', handlOpen)
}

// ------------------------------------------------------------
// --- Loop in For LOOP ---
// for (let i = 0; i < buttonOpen.length; i++) {
//   buttonOpen[i].addEventListener('click', handlOpen)
// }
// ------------------------------------------------------------


function handlOpen() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function handleClose(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

// close modal
// buttonClose.addEventListener('click', handleClose);
// overlay.addEventListener('click', handleClose);


document.addEventListener('keydown', function(e){
  e.key.match('Escape') ? handleClose : ''
});




// function handleKeypress(e) {
//   let keyValue = e.key == "Escape" ? 'You enter escape' : 'Wrong Key'
//   console.log(keyValue);
// }