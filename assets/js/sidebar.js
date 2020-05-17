var navs = document.getElementsByClassName("subnav");
var sidebar = document.querySelector(".sidebar");
var page = document.querySelector(".page");
var header = document.querySelector(".header")
sidebar.style.display = "block";
sidebar.style.width = "300px"


window.addEventListener("resize", resizeLayout);

for (i = 0; i < navs.length; i++) {
    if (navs[i].classList.contains("subnav--hide") == false) {
        navs[i].previousElementSibling.children[2].classList.toggle("fa-caret-square-down");
        navs[i].previousElementSibling.children[2].classList.toggle("fa-caret-square-up");
    }
}

function toggle_subnav(i) {
    if (i.parentNode.nextElementSibling.nodeName == "UL") {
        i.parentNode.nextElementSibling.classList.toggle("subnav--hide");
        i.parentNode.children[2].classList.toggle("fa-caret-square-down");
        i.parentNode.children[2].classList.toggle("fa-caret-square-up");
    }
    else
        i.nextElementSibling.click();
}

function resizeLayout() {
    if (sidebar.style.display == "block")
        header.style.width = page.style.width = ((document.body.clientWidth || document.documentElement.clientWidth) - parseInt(sidebar.style.width)) + "px";
    else
        header.style.width = page.style.width = "100%";
}

function toggle_sidebar() {
    if (sidebar.style.display == "block") {
        sidebar.style.display = "none";
        header.style.width = page.style.width = "100%";
    }
    else {
        sidebar.style.display = "block";
        header.style.width = page.style.width = ((document.body.clientWidth || document.documentElement.clientWidth) - parseInt(sidebar.style.width)) + "px";
        console.log(((document.body.clientWidth || document.documentElement.clientWidth) - parseInt(sidebar.style.width)) + "px");
    }
}
