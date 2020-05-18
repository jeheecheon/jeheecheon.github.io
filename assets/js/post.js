var postContent;
var mainContent = document.querySelector(".main-content");

if (postContent  = document.querySelector(".post__content")) { //In post
  window.addEventListener("resize", resizePostContentHeight);
  resizePostContentHeight();
}

function resizePostContentHeight() {
  postContent.style.height = mainContent.clientHeight - 400 + "px";
}