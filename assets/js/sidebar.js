var navs = document.getElementsByClassName("subnav");
var sidebar = document.querySelector(".sidebar");
var page = document.querySelector(".page");
var header = document.querySelector(".header");

if (sidebar.currentStyle) {
  sidebar.style.right = sidebar.currentStyle.right;
  sidebar.style.width = sidebar.currentStyle.width;
} else {
  sidebar.style.right = window.getComputedStyle(sidebar, null).right;
  sidebar.style.width = window.getComputedStyle(sidebar, null).width;
}

resizeLayout();

window.addEventListener("resize", function() {
    if ((document.body.clientWidth || document.documentElement.clientWidth) > 768) {
        sidebar.style.right = "0px";
        resizeLayout(); 
    }
    else {
        sidebar.style.right = "-300px";
        resizeLayout();
    }
});

for (i = 0; i < navs.length; i++) {
  if (navs[i].classList.contains("subnav--hide") == false) {
    navs[i].previousElementSibling.children[2].classList.toggle(
      "fa-caret-square-down"
    );
    navs[i].previousElementSibling.children[2].classList.toggle(
      "fa-caret-square-up"
    );
  }
}

function toggle_subnav(i) {
  if (i.parentNode.nextElementSibling.nodeName == "UL") {
    i.parentNode.nextElementSibling.classList.toggle("subnav--hide");
    i.parentNode.children[2].classList.toggle("fa-caret-square-down");
    i.parentNode.children[2].classList.toggle("fa-caret-square-up");
  } else i.nextElementSibling.click();
}

function resizeLayout() {
  if (sidebar.style.right == "0px") {
    header.style.width = page.style.width =
      (document.body.clientWidth || document.documentElement.clientWidth) -
      parseInt(sidebar.style.width) +
      "px";
  } else header.style.width = page.style.width = "100%";
}

function toggle_sidebar() {
  if (sidebar.style.right == "0px") {
    sidebar.style.right = "-300px";
    resizeLayout();
  } else if (sidebar.style.right == "-300px") {
    sidebar.style.right = "0px";
    resizeLayout();
  }
}
