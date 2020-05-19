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

if (!window.getComputedStyle) {
  window.getComputedStyle = function (element) {
    return element.currentStyle;
  };
}
//
//
//
//
//
function toggleHeader(nowScrollTop) {
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

//includeJs("/assets/js/sidebar.js");
function includeJs(jsFilePath) {
  var js = document.createElement("script");

  js.type = "text/javascript";
  js.src = jsFilePath;

  document.body.appendChild(js);
}
