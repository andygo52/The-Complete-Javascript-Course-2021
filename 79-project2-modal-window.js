// 79. Project #2: Modal Window


'use strict';

//Create variables for modal, overlay, close-modal

const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

//loop with buttons

for (let i = 0; i < btnsOpenModal.length; i++) {
   console.log(btnsOpenModal[i].textContent);
}
