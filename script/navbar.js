const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-list');

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show');
});