function toggleMenu() {
    let menuBtn = document.getElementById('menu');
    let menuItem = document.getElementById('menuItem');
    menuBtn.classList.toggle('active');
    menuItem.classList.toggle('active');
}

for (const buttonEl of document.querySelectorAll('#menuItem a')) {
    buttonEl.addEventListener('click', () => {
        toggleMenu();
    });
}
