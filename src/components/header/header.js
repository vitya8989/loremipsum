const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');

burger.onclick = () => {
    nav.classList.toggle('open');
    burger.classList.toggle('burger-open');
    document.body.classList.toggle('scroll-lock');
}
nav.onclick = (e) => {
    if (!e.target.closest('.header__menu')) {
        nav.classList.remove('open');
        burger.classList.remove('burger-open');
        document.body.classList.remove('scroll-lock');
    }
}