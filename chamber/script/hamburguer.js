const humburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.animateme');

humburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    humburgerElement.classList.toggle('open');
});


