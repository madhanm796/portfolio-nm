
window.addEventListener('contextmenu', (e)=> {
    e.preventDefault()
})

window.onload = () => {

    console.log("Checking theme status...")

    const themeKey = sessionStorage.getItem('theme')

    let isDarkMode = false

    if (themeKey == null)
        return

    switch (themeKey) {
        case 'dark': isDarkMode = !isDarkMode
        default: isDarkMode = false
    }

    if (!isDarkMode) return

    loadDarkTheme()        

}

function loadDarkTheme() {

    console.log("Loading dark theme...")

}