const humburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.menuLinks');

humburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    humburgerElement.classList.toggle('open');
});