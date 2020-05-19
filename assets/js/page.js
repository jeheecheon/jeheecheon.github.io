setInterval(function () {
  if (getScrolled) {
    toggleHeader(document.body.scrollTop || document.documentElement.scrollTop);
    getScrolled = false;
  }
}, 100);