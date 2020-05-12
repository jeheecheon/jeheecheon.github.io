var navs = document.getElementsByClassName("subnav");

for (nav of navs) {
    if (nav.classList.contains("subnav--hide") == false) {
        nav.previousElementSibling.firstElementChild.classList.toggle("fa-caret-square-down");
        nav.previousElementSibling.firstElementChild.classList.toggle("fa-caret-square-up");
    }
}

function toggle_subnav(i) {
    i.parentNode.nextElementSibling.classList.toggle("subnav--hide");
    i.classList.toggle("fa-caret-square-down");
    i.classList.toggle("fa-caret-square-up");
}
