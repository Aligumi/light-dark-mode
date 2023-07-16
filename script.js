const toggleSwitch = document.querySelector('input[type="checkbox"]');

const switchTheme = (event)=> {
    if (event.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark")
    } else {
        document.documentElement.setAttribute("data-theme", "light")
    }
}

//Event listner
toggleSwitch.addEventListener("change", switchTheme) ;