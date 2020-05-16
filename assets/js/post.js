var mainContent = document.querySelector(".main-content");
var jSpace = document.querySelector(".j-space");

console.log(mainContent.clientHeight);
jSpace.style.height = (parseInt(mainContent.clientHeight) - 400)+ "px";