const darkToggleIcon = document.querySelector('#darktoggle');
const panels = document.querySelectorAll('.panel');

darkToggleIcon.addEventListener('click', e => {
    e.target.classList.toggle('fa-sun');
    document.body.classList.toggle('dark-mode');
});

const r = document.querySelector(':root');
const colors = document.querySelectorAll('.colors li');

colors.forEach(color => {
    color.addEventListener('click', () => {
        const element = window.getComputedStyle(color);
        let bg = element.getPropertyValue("background-color");
        r.style.setProperty('--accent', bg);
    });
});