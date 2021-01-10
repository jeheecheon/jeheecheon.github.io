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
    var word = document.getElementById("wordInput").value;
    // document.getElementById("wordInput").value = "";		
    window.open("http://www.forvo.com/word/" + word + "/#jp");
    // window.open("https://dictionary.cambridge.org/dictionary/learner-english/" + word);
    window.open("http://dictionary.cambridge.org/dictionary/english/" + word + "");
    window.open("https://www.merriam-webster.com/dictionary/" + word + "");
    // window.open("https://dict.naver.com/enendict/#/search?query=" + word + "");
    window.open("http://endic.naver.com/search.nhn?sLn=kr&isOnlyViewEE=N&query=" + word + "");
    window.open("https://www.google.com/search?q=" + word + " meaning");
    window.open("https://www.google.com/search?q=" + word + "&tbm=isch&ved=2ahUKEwi814qdp_PtAhUSHqYKHcpLDE8Q2-cCegQIABAA&oq=" + word + "&gs_lcp=CgNpbWcQAzIECCMQJzIECCMQJzICCAAyBAgAEEMyBAgAEEMyBAgAEEMyAggAMgQIABBDMgIIADICCABQzIoBWJuPAWCokAFoAHAAeACAAeEBiAGOBpIBBTAuNC4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=bDDrX7zxGpK8mAXKl7H4BA");
    window.open("https://www.google.com/search?q=" + word + " gif" + "&tbm=isch&ved=2ahUKEwi814qdp_PtAhUSHqYKHcpLDE8Q2-cCegQIABAA&oq=" + word + " gif" + "&gs_lcp=CgNpbWcQAzIECCMQJzIECCMQJzICCAAyBAgAEEMyBAgAEEMyBAgAEEMyAggAMgQIABBDMgIIADICCABQzIoBWJuPAWCokAFoAHAAeACAAeEBiAGOBpIBBTAuNC4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=bDDrX7zxGpK8mAXKl7H4BA");
    // window.open("https://ko.wikipedia.org/wiki/" + q + "");

    window.location.href = '/dictionaries';
}
