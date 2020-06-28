var headerBar = document.querySelector(".header__bar");
var lastScrollTop = window.scrollY;
const delta = 40;
var getScrolled = false;

window.addEventListener("scroll", function () {
  getScrolled = true;
});

//respon when scrolling
//In post
if (document.querySelector(".post-cover")) {
  var postCover = document.querySelector(".post-cover");
  var postContent = document.querySelector(".post-content");
  var scrollIndicator = document.querySelector(".scroll-indicator");
  var goToIndexBtn = document.querySelector(".button--goToIndex");

  //make reponsive header
  modifyHeader();
  setInterval(function () {
    if (getScrolled) {
      indicateProgress();
      modifyHeader();
      getScrolled = false;
    }
  }, 100);

  //display goToIndexBtn when header is clicked
  headerBar.addEventListener("click", function () {
    goToIndexBtn.style.visibility = "visible";
    window.addEventListener("scroll", hideGoToIndexBtn);
  });
} //In Page
else {
  //toggle header
  setInterval(function () {
    if (getScrolled) {
      toggleHeader(window.scrollY);
      getScrolled = false;
    }
  }, 100);
}

//It could Invoke function toggleHeader
function modifyHeader() {
  var nowScrollTop = window.scrollY;
  //in post cover
  if (nowScrollTop < postCover.clientHeight - headerBar.clientHeight) {
    //remove background color, change color of hamburger to white
    headerBar.style.backgroundColor = "initial";
    headerBar.childNodes[1].style.color = "white"; //hamburger
    //hide title
    headerBar.childNodes[3].style.visibility = "hidden"; //title
  }
  //in post content or others, except post cover
  else {
    //add background-color, change color of humburger to black
    headerBar.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    headerBar.childNodes[1].style.color = "black"; //hamburger
    //display title
    headerBar.childNodes[3].style.visibility = "visible"; //title

    toggleHeader(nowScrollTop);
  }
}

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

function indicateProgress() {
  var winScroll = window.scrollY - postCover.clientHeight; //Skip post-cover's height
  var height = postContent.clientHeight - window.innerHeight;
  var scrolled = (winScroll / height) * 100;

  if (winScroll < 0 || scrolled > 100) scrollIndicator.style.width = 0;
  else scrollIndicator.style.width = scrolled + "%";
}

function hideGoToIndexBtn() {
  if (window.scrollY > delta) {
    goToIndexBtn.style.visibility = "hidden";
    window.removeEventListener("scroll", hideGoToIndexBtn);
  }
}
