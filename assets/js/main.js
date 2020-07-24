var getScrolled = false;
var lastScrollTop = window.scrollY;
const delta = 40;
var postCover = document.querySelector(".post-cover");
var postContent = document.querySelector(".post__content");
var mainContent = document.querySelector(".main-content");
var goToIndexBtn = document.querySelector(".button--goToIndex");

var sidebar = document.querySelector(".sidebar");
var navs = document.getElementsByClassName("subnav");
var sidebarHamburger = document.querySelector(".sidebar__hamburger");

var page = document.querySelector(".page");

var header = document.querySelector(".header");
var headerBar = document.querySelector(".header__bar");
var scrollIndicator = document.querySelector(".scroll-indicator");
//
//
//
//
//

if (!window.getComputedStyle) {
  window.getComputedStyle = function (element) {
    return element.currentStyle;
  };
}

sidebar.style.right = window.getComputedStyle(sidebar, null).right;
sidebar.style.width = window.getComputedStyle(sidebar, null).width;
//
//
//
//
//

window.addEventListener("scroll", function () {
  getScrolled = true;
});

window.addEventListener("resize", initializeLayout);
//
//
//
//
//
function initializeLayout() {
  var pageWidth =
    document.body.clientWidth || document.documentElement.clientWidth;

  if (pageWidth < 1068) toggleSidebar(1);
  else toggleSidebar(2);
}

function resizeLayout() {
  var pageWidth =
    document.body.clientWidth || document.documentElement.clientWidth;

  if (pageWidth < 1068) {
    if (sidebar.style.right == "-300px") {
      sidebar.style.width = "300px";
      // page.style.display = "block";
      // header.style.display = "block";
    } else {
      sidebar.style.width = pageWidth + "px";
      // page.style.display = "none";
      // header.style.display = "none";
    }

    sidebarHamburger.style.display = "inline-block";
  } else {
    sidebar.style.width = "300px";

    sidebarHamburger.style.display = "none";
  }

  if (sidebar.style.right == "0px") {
    header.style.width = page.style.width =
      pageWidth - parseInt(sidebar.style.width) + "px";
  } else header.style.width = page.style.width = "100%";
}

//
//
//
//
//
//if control value is 1, sidebar will appear and the value is 2, sidebar will disappear
function toggleSidebar(control) {
  if (control) {
    sidebar.style.right = control == 1 ? "-300px" : "0px";
  } else {
    if (sidebar.style.right == "0px") sidebar.style.right = "-300px";
    //(sidebar.style.right == "-300px")
    else sidebar.style.right = "0px";
  }
  resizeLayout();
}

function toggleSubnav(i) {
  if (i.parentNode.nextElementSibling.nodeName == "UL") {
    i.parentNode.nextElementSibling.classList.toggle("subnav--hide");
    i.parentNode.children[2].classList.toggle("fa-caret-square-down");
    i.parentNode.children[2].classList.toggle("fa-caret-square-up");
  } else i.nextElementSibling.click();
}
//
//
//
//
//
function toggleHeader() {
  var nowScrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;

  if (Math.abs(lastScrollTop - nowScrollTop) <= delta) return;

  //when scrolling down
  if (nowScrollTop > lastScrollTop) {
    headerBar.parentElement.classList.add("header--hide");
  }
  //when scrolling up
  else {
    headerBar.parentElement.classList.remove("header--hide");
  }
  lastScrollTop = nowScrollTop;
}
//
//
//
//
//

function includeJs(jsFilePath) {
  var js = document.createElement("script");

  js.type = "text/javascript";
  js.src = jsFilePath;

  document.body.appendChild(js);
}
