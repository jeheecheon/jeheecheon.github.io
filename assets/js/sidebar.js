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

resizeLayout();
window.addEventListener("resize", function () {
  if ((document.body.clientWidth || document.documentElement.clientWidth) < 768) {
    toggleSidebar(1);
  } else {
    toggleSidebar(2);
  }
});
//
//
//
//
//
function toggleSubnav(i) {
  if (i.parentNode.nextElementSibling.nodeName == "UL") {
    i.parentNode.nextElementSibling.classList.toggle("subnav--hide");
    i.parentNode.children[2].classList.toggle("fa-caret-square-down");
    i.parentNode.children[2].classList.toggle("fa-caret-square-up");
  } else i.nextElementSibling.click();
}

function resizeLayout() {
  var pageWidth =
    document.body.clientWidth || document.documentElement.clientWidth;

  if (pageWidth < 768) {
    if (sidebar.style.right == "-300px") sidebar.style.width = "300px";
    else sidebar.style.width = pageWidth + "px";
  } else {
    sidebar.style.width = "300px";
  }

  if (sidebar.style.right == "0px") {
    header.style.width = page.style.width =
      pageWidth - parseInt(sidebar.style.width) + "px";
  } else header.style.width = page.style.width = "100%";
}

function toggleSidebar(control) {
  if (control == 1 || sidebar.style.right == "0px")
    sidebar.style.right = "-300px";
  else if (control == 2 || sidebar.style.right == "-300px")
    sidebar.style.right = "0px";
  resizeLayout();
}
