for (i = 0; i < navs.length; i++) {
  if (navs[i].classList.contains("subnav--hide") == false) {
    navs[i].previousElementSibling.children[2].classList.toggle(
      "fa-caret-square-down"
    );
    navs[i].previousElementSibling.children[2].classList.toggle(
      "fa-caret-square-up"
    );
  }
}


