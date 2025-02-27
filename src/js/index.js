
let isDarkTheme = false;

window.addEventListener('contextmenu', (e)=> {
    e.preventDefault()
})

function loadDarkTheme() {

    const bodyElement = document.querySelector('body');
    bodyElement.classList.toggle('dark-theme');
    const icons = {
        'sun': './assets/icons/sun.png',
        'moon': './assets/icons/moon.png'
    }
    const imgElement = document.querySelector('.theme-icon');


    if (isDarkTheme) {
        imgElement.setAttribute('src', icons.moon)
        
        
    }
    else {
        imgElement.setAttribute('src', icons.sun);
    }
    isDarkTheme = !isDarkTheme;


}
