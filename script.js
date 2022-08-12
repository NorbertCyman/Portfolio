const about = document.querySelector('.about-bg');
const container = document.querySelector('.container');
container.addEventListener('scroll', function () {
    about.style.transform = "translateX(" +container.scrollTop/7+ "px)";
});