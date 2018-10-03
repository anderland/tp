// area24.ilsole24ore.com

loadCSS("dist/css/main.min.css");
// loadCSS("https://fonts.googleapis.com/css?family=Libre+Franklin:400,700");
// loadCSS("https://d1azc1qln24ryf.cloudfront.net/44188/Area24/style-cf.css?5c24tv");


// alternate method

// var loadDeferredStyles = function() {
//   var addStylesNode = document.getElementById("deferred-styles");
//   var replacement = document.createElement("div");
//   replacement.innerHTML = addStylesNode.textContent;
//   document.body.appendChild(replacement)
//   addStylesNode.parentElement.removeChild(addStylesNode);
// };
// var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
//     window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
// if (raf) raf(function() { window.setTimeout(loadDeferredStyles, 0); });
// else window.addEventListener('load', loadDeferredStyles);

loadjs(['https://j2.res.24o.it/js2015/webtrekk_v4-ndl-p.min.js'], 'webtrekk');
loadjs(['https://www.googletagmanager.com/gtag/js?id=UA-40827900-1'], 'google_1');
// loadjs(['https://www.googletagservices.com/tag/js/gpt.js'], 'google_2');

loadjs(['dist/js/after.min.js'], 'after');

// webtrekk
loadjs.ready('webtrekk', function() {
    wts.push(["send", "pageupdate"]);
});

// google_1
loadjs.ready('google_1', function() {
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'UA-40827900-1');

});

// google_2
// var googletag = googletag || {};
// googletag.cmd = googletag.cmd || [];

// googletag.cmd.push(function() {
//     googletag.defineSlot("/57491254/sole24ore.com/area24/MPU_Top", [300, 250], "div-gpt-ad-MPU_Top")
//         .addService(googletag.pubads());
//     googletag.defineSlot("/57491254/sole24ore.com/area24/Top", [1, 1], "div-gpt-ad-Top")
//         .addService(googletag.pubads());
//     googletag.pubads().enableSingleRequest();
//     googletag.pubads().collapseEmptyDivs();
//     googletag.enableServices();
// });

// after
loadjs.ready('after', function() {
    console.log("after");
});