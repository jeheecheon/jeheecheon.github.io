var getScrolled = false;
var lastScrollTop = window.scrollY;
const delta = 40;
var postCover = document.querySelector(".post-cover");
var postContent = document.querySelector(".post__content");
var mainContent = document.querySelector(".main-content");
var goToIndexBtn = document.querySelector(".button--goToIndex");

var sidebar = document.querySelector(".sidebar");
var navs = document.getElementsByClassName("subnav");

var page = document.querySelector(".page");

var header = document.querySelector(".header");
var headerBar = document.querySelector(".header__bar");
var scrollIndicator = document.querySelector(".scroll-indicator");
//
//
//
//
//
window.addEventListener("scroll", function () {
  getScrolled = true;
});

includeJs("/assets/js/sidebar.js");
includeJs("/assets/js/sidebar.js");

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

function includeJs(jsFilePath) {
  var js = document.createElement("script");

  js.type = "text/javascript";
  js.src = jsFilePath;

  document.body.appendChild(js);
}
