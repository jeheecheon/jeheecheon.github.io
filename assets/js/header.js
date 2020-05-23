setInterval(function () {
    if (getScrolled) {
      toggleHeader(document.body.scrollTop || document.documentElement.scrollTop);
      getScrolled = false;
    }
  }, 100);

function modifyHeader(nowScrollTop) {
    var nowScrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    //in post cover
    if (nowScrollTop < postCover.clientHeight - headerBar.clientHeight) {
      //remove background color, change color of hamburger to white
      headerBar.style.backgroundColor = "rgba(255, 255, 255, 0)";
      headerBar.style.boxShadow = "none";
      headerBar.children[2].style.color = "white"; //hamburger
      headerBar.children[1].style.visibility = "hidden"; //title
    }
    //the area in post content or others, except post cover
    else {
      //add background-color, change color of humburger to black
      headerBar.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
      headerBar.style.boxShadow = "3px 3px 5px rgb(170, 170, 170)";
      headerBar.children[2].style.color = "black"; //hamburger
      headerBar.children[1].style.visibility = "visible"; //title
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