var navs = document.getElementsByClassName("subnav");

for (nav of navs) {
    if (nav.classList.contains("subnav--hide") == false) {
        nav.previousElementSibling.children[2].classList.toggle("fa-caret-square-down");
        nav.previousElementSibling.children[2].classList.toggle("fa-caret-square-up");
    }
}

function toggle_subnav(i) {
    i.parentNode.nextElementSibling.classList.toggle("subnav--hide");
    if (i.nextElementSibling) {
        i = i.parentNode.children[2];
    }
    i.classList.toggle("fa-caret-square-down");
    i.classList.toggle("fa-caret-square-up");
}
