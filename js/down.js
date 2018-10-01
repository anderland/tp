// https://github.com/filamentgroup/font-loading/blob/master/font-events.html
// prepend fontfaceobserver.js
//    Fonts are loaded through @font-face rules in the CSS whenever an element references them.
//    FontFaceObserver creates a referencing element to trigger the font request, and lsisten for font load events.
//    When all 3 fonts are loaded, we enable them by adding a class to the html element
// var fontA = new FontFaceObserver('Family A');
// var fontB = new FontFaceObserver('Family B');
// Promise.all([fontA.load(), fontB.load()]).then(function () {
//   console.log('Family A & B have loaded');
// });


function downloadJSAtOnload() {
    (function(scripts) {
        var i = 0,
            l = scripts.length;
        for (; i < l; ++i) {
            var element = document.createElement("script");
            element.src = scripts[i];
            document.body.appendChild(element);
        }
    })(['dist/js/after.min.js']);
}
if (window.addEventListener) window.addEventListener("load", downloadJSAtOnload, false);
else if (window.attachEvent) window.attachEvent("onload", downloadJSAtOnload);
else window.onload = downloadJSAtOnload;