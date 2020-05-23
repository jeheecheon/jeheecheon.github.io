
resizePostContentHeight();
resizeLayout();

window.addEventListener("resize", function () {
  resizePostContentHeight();
  if (
    (document.body.clientWidth || document.documentElement.clientWidth) > 768
  ) {
    sidebar.style.right = "0px";
    resizeLayout();
  } else {
    sidebar.style.right = "-300px";
    resizeLayout();
  }
});

modifyHeader();
indicateProgress();
setInterval(function () {
  if (getScrolled) {
    modifyHeader();
    toggleHeader(document.body.scrollTop || document.documentElement.scrollTop);
    indicateProgress();
    getScrolled = false;
  }
}, 100);

//display goToIndexBtn when header is clicked
headerBar.addEventListener("click", function () {
  goToIndexBtn.style.visibility = "visible";
  window.addEventListener("scroll", hideGoToIndexBtn);
});
// 
//
//
//
//


function hideGoToIndexBtn() {
  if (window.scrollY > delta) {
    goToIndexBtn.style.visibility = "hidden";
    window.removeEventListener("scroll", hideGoToIndexBtn);
  }
}

function resizePostContentHeight() {
  postContent.style.height = postContent.clientHeight + parseInt(window.getComputedStyle(mainContent, null).top) + "px";
}
