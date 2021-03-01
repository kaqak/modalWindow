'use strict';
// Selectiong the buttons or events we want to happen
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
//Open Modal function
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
//Close modal function
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
//Looping through Modals using for lopp, to reach each one and on click event to add some functionality
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}
//Closing the modal in case of clicking the btn close or clicking in outside space off Modal
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
