// 79. Project #2: Modal Window
// 80. Working with Classes

'use strict';

//Create variables for modal, overlay, close-modal

const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

//console.log(btnsOpenModal);

const openModal = function () {
  console.log('Button clicked!');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//loop with buttons

for (let i = 0; i < btnsOpenModal.length; i++) {
  //    btnsOpenModal[i].addEventListener('click', function () {
  //     console.log('Button clicked!');
  //     modal.classList.remove('hidden');
  //     overlay.classList.remove('hidden');
  //   });

  btnsOpenModal[i].addEventListener('click', openModal);

  const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };

  //   btnCloseModal.addEventListener('click', function () {
  //     modal.classList.add('hidden');
  //     overlay.classList.add('hidden');
  //   });

  btnCloseModal.addEventListener('click', closeModal);

  //   overlay.addEventListener('click', function () {
  //     modal.classList.add('hidden');
  //     overlay.classList.add('hidden');
  //   });

  overlay.addEventListener('click', closeModal);
}
