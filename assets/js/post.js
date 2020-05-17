var mainContent = document.querySelector(".main-content");
var jSpace = document.querySelector(".j-space");

try {
    jSpace.style.height = (parseInt(mainContent.clientHeight) - 400) + "px";
}
catch (err) {
    console.log(err.message);
}
