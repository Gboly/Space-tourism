// JavaScript source code
function navInteractivity() {
    let navLinks = document.querySelectorAll(".nav-link")
    for (let j = 0; j < navLinks.length; j++) {
        if (j !== 0) {
            navLinks[j].addEventListener("mouseover", () => {
                navLinks[j].classList.add("nav-link-hover");
            })
            navLinks[j].addEventListener("mouseout", () => {
                navLinks[j].classList.remove("nav-link-hover");
            })
        }
    }
}

navInteractivity();