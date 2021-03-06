modifyHeader();
indicateProgress();

setInterval(function () {
  if (getScrolled) {
    modifyHeader();
    toggleHeader();
    indicateProgress();
    getScrolled = false;
  }
}, 100);

//display goToIndexBtn when header is clicked
headerBar.addEventListener("click", function () {
  console.log(goToIndexBtn);
  goToIndexBtn.style.visibility = "visible";
  window.addEventListener("scroll", hideGoToIndexBtn);
});


//
//
//
//
//


function modifyHeader() {
  var nowScrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;
  //in post cover
  if (nowScrollTop < postCover.clientHeight - headerBar.clientHeight) {
    //remove background color, change color of hamburger to white
    headerBar.style.backgroundColor = "rgba(100, 100, 100, 0.3)";
    headerBar.style.boxShadow = "none";
    headerBar.children[2].style.color = "rgb(255,255,255)"; //hamburger
    headerBar.children[1].style.visibility = "hidden"; //title
  }
  //the area in post content or others, except post cover
  else {
    //add background-color, change color of humburger to black
    headerBar.style.backgroundColor = "rgba(189, 218, 241, 0.7)";
    headerBar.style.boxShadow = "3px 3px 5px rgb(170, 170, 170)";
    headerBar.children[2].style.color = "rgb(70,70,70)"; //hamburger
    headerBar.children[1].style.visibility = "visible"; //title
  }
}

function hideGoToIndexBtn() {
  if (window.scrollY > delta) {
    goToIndexBtn.style.visibility = "hidden";
    window.removeEventListener("scroll", hideGoToIndexBtn);
  }
}

function indicateProgress() {
  var winScroll =
    (document.body.scrollTop || document.documentElement.scrollTop) -
    postCover.clientHeight; //Skip post-cover's height
  var height = postContent.clientHeight - postCover.clientHeight;
  var scrolled = (winScroll / height) * 100;
  if (winScroll < 0 || scrolled > 100) scrollIndicator.style.width = 0;
  else scrollIndicator.style.width = scrolled + "%";
}
