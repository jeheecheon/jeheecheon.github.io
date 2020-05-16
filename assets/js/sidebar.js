var navs = document.getElementsByClassName("subnav");
var sidebar = document.querySelector(".sidebar");
var page = document.querySelector(".page");
var header = document.querySelector(".header")
sidebar.style.display = "block";
sidebar.style.width = "300px"

for (i = 0; i < navs.length; i++) {
    if (navs[i].classList.contains("subnav--hide") == false) {
        navs[i].previousElementSibling.children[2].classList.toggle("fa-caret-square-down");
        navs[i].previousElementSibling.children[2].classList.toggle("fa-caret-square-up");
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

function toggle_sidebar() {
    if (sidebar.style.display == "block") {
        sidebar.style.display = "none";
        header.style.width = page.style.width = "100%";
    }
    else {
        sidebar.style.display = "block";
        header.style.width = page.style.width = (document.body.clientWidth || document.documentElement.clientWidth) - 300 + "px";
    }
}
