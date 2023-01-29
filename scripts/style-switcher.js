const styleSwitcherToggle =
    document.querySelector('.style-switcher-toggler');
const styleSwitcherElement =
    document.querySelector('.style-switcher');

styleSwitcherToggle.addEventListener('click', () => {
        styleSwitcherElement.classList.toggle('open');
});

addEventListener('scroll', () => {
   if (styleSwitcherElement.classList.contains('open'))
        styleSwitcherElement.classList.remove('open');
});


const alternateStyles =
    document.querySelectorAll('.alternate-style');

function setActiveStyle(color) {
    alternateStyles.forEach(style => {
        if (color === style.getAttribute('title')) {
            style.removeAttribute('disabled');
        } else {
            style.setAttribute('disabled', 'true');
        }
    });
}


const dayNightElement =
    document.querySelector('.day-night');

dayNightElement.addEventListener('click', () => {
    dayNightElement.querySelector('i').classList.toggle('fa-sun');
    dayNightElement.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
});

window.addEventListener('load', () => {
    if (document.body.classList.contains('dark')) {
        dayNightElement.querySelector('i').classList.add('fa-sun');
    } else {
        dayNightElement.querySelector('i').classList.add('fa-moon');
    }
});
