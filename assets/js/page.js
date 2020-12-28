setInterval(function () {
  if (getScrolled) {
    toggleHeader();
    getScrolled = false;
  }
}, 100);


// document.getElementById("wInput").onkeydown = function(e) {if (e.keyCode === 13) {
//         event.preventDefault();
//         lookUp();
//     }};
var x = document.getElementById("wordInput");
if (x.addEventListener) {                    // For all major browsers, except IE 8 and earlier
    x.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        lookUp();
    }
});
} else if (x.attachEvent) {                  // For IE 8 and earlier versions
    x.attachEvent("keydown", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        lookUp();
    }
});
}
///////

// document.getElementById("wButton").onclick = function() {lookUp()};
x = document.getElementById("wordButton");
if (x.addEventListener) {                    // For all major browsers, except IE 8 and earlier
    x.addEventListener("click", lookUp);
} else if (x.attachEvent) {                  // For IE 8 and earlier versions
    x.attachEvent("click", lookUp);
}


function lookUp()
{
    var q = document.getElementById("wordInput").value;
    document.getElementById("wordInput").value = "";		
    window.open("http://dictionary.cambridge.org/dictionary/english/" + q + "");
    window.open("https://www.google.com/search?q=" + q + " meaning");
    window.open("https://dict.naver.com/enendict/#/search?query=" + q + "");
    // window.open("http://endic.naver.com/search.nhn?sLn=kr&isOnlyViewEE=N&query=" + q + "");
    window.open("http://www.forvo.com/word/" + q + "/#jp");
    window.open("http://images.google.com/search?q=" + q + "&sout=1&tbm=isch&oq=�� + q + ��&gs_l=img.3..0i67l4j0j0i67j0j0i67l3.5010.5563.0.5640.5.5.0.0.0.0.120.322.2j2.4.0....0...1.1.34.img..2.3.202.eNvXidYF42w" + q);
    // window.open("https://ko.wikipedia.org/wiki/" + q + "");
}
