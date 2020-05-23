setInterval(function () {
  if (getScrolled) {
    toggleHeader();
    getScrolled = false;
  }
}, 100);
