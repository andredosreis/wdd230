const humburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.animateme');

humburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    humburgerElement.classList.toggle('open');
});

//dark mode
const darkModeButton = document.querySelector('#darkModeButton');
const main = document.querySelector('main');

darkModeButton.addEventListener('click', () => {
    main.classList.toggle('dark');
    darkModeButton.classList.toggle('dark');
});