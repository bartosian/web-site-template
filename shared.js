let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let planButton = document.querySelectorAll('.plan button');
let modalButton = document.querySelector('.modal button');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');
let sectionTitle = document.querySelector('.section-title.rotate');

for(let i = 0; i < planButton.length; i++) {
    planButton[i].addEventListener('click', openModal);
}

function openModal() {
    backdrop.classList.add('open');
    modal.classList.add('open');
}

modalButton.addEventListener('click', closeModal);
function closeModal() {
    backdrop.classList.remove('open');
    modal.classList.remove('open');
}

backdrop.addEventListener('click', function() {
    mobileNav.classList.remove('open');
    backdrop.classList.remove('open');
    modal.classList.remove('open');
    closeModal();
});


toggleButton.addEventListener('click', function () {
   mobileNav.classList.add('open');
   backdrop.classList.add('open');
});

sectionTitle.addEventListener('animationend', function() {
    console.log('Final action!');
} );

