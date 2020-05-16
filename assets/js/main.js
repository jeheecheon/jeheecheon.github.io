includeJs("/assets/js/header.js");
includeJs("/assets/js/sidebar.js");

function includeJs(jsFilePath) {
    var js = document.createElement("script");
 
    js.type = "text/javascript";
    js.src = jsFilePath;
 
    document.body.appendChild(js);
}