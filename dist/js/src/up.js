!function(e){"use strict";var n=function(n,t,o){function i(e){if(a.body)return e();setTimeout(function(){i(e)})}function r(){l.addEventListener&&l.removeEventListener("load",r),l.media=o||"all"}var d,a=e.document,l=a.createElement("link");if(t)d=t;else{var f=(a.body||a.getElementsByTagName("head")[0]).childNodes;d=f[f.length-1]}var s=a.styleSheets;l.rel="stylesheet",l.href=n,l.media="only x",i(function(){d.parentNode.insertBefore(l,t?d:d.nextSibling)});var u=function(e){for(var n=l.href,t=s.length;t--;)if(s[t].href===n)return e();setTimeout(function(){u(e)})};return l.addEventListener&&l.addEventListener("load",r),l.onloadcssdefined=u,u(r),l};"undefined"!=typeof exports?exports.loadCSS=n:e.loadCSS=n}("undefined"!=typeof global?global:this);
loadjs=function(){var l=function(){},c={},f={},u={};function s(e,n){if(e){var t=u[e];if(f[e]=n,t)for(;t.length;)t[0](e,n),t.splice(0,1)}}function o(e,n){e.call&&(e={success:e}),n.length?(e.error||l)(n):(e.success||l)(e)}function h(t,r,i,c){var s,o,e=document,n=i.async,f=(i.numRetries||0)+1,u=i.before||l,a=t.replace(/^(css|img)!/,"");c=c||0,/(^css!|\.css$)/.test(t)?(s=!0,(o=e.createElement("link")).rel="stylesheet",o.href=a):/(^img!|\.(png|gif|jpg|svg)$)/.test(t)?(o=e.createElement("img")).src=a:((o=e.createElement("script")).src=t,o.async=void 0===n||n),!(o.onload=o.onerror=o.onbeforeload=function(e){var n=e.type[0];if(s&&"hideFocus"in o)try{o.sheet.cssText.length||(n="e")}catch(e){n="e"}if("e"==n&&(c+=1)<f)return h(t,r,i,c);r(t,n,e.defaultPrevented)})!==u(t,o)&&e.head.appendChild(o)}function t(e,n,t){var r,i;if(n&&n.trim&&(r=n),i=(r?t:n)||{},r){if(r in c)throw"LoadJS";c[r]=!0}!function(e,r,n){var t,i,c=(e=e.push?e:[e]).length,s=c,o=[];for(t=function(e,n,t){if("e"==n&&o.push(e),"b"==n){if(!t)return;o.push(e)}--c||r(o)},i=0;i<s;i++)h(e[i],t,n)}(e,function(e){o(i,e),s(r,e)},i)}return t.ready=function(e,n){return function(e,t){e=e.push?e:[e];var n,r,i,c=[],s=e.length,o=s;for(n=function(e,n){n.length&&c.push(e),--o||t(c)};s--;)r=e[s],(i=f[r])?n(r,i):(u[r]=u[r]||[]).push(n)}(e,function(e){o(n,e)}),t},t.done=function(e){s(e,[])},t.reset=function(){c={},f={},u={}},t.isDefined=function(e){return e in c},t}();
// The following code is based off a toggle menu by @Bradcomp
// source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
// (function() {
//     var burger = document.querySelector('.nav-toggle');
//     var menu = document.querySelector('.nav-menu');
//     burger.addEventListener('click', function() {
//         burger.classList.toggle('is-active');
//         menu.classList.toggle('is-active');
//     });
// })();


/// https://github.com/hunzaboy/bulma-megamenu

document.addEventListener('DOMContentLoaded', function() {

    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any nav burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(function($el) {
            $el.addEventListener('click', function() {

                // Get the target from the "data-target" attribute
                var target = $el.dataset.target;
                var $target = document.getElementById(target);

                // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                $el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

});




// quickview


function closest(el, selector) {
    var matchesFn;

    // find vendor prefix
    ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function(fn) {
        if (typeof document.body[fn] == 'function') {
            matchesFn = fn;
            return true;
        }
        return false;
    });

    var parent;

    // traverse parents
    while (el) {
        parent = el.parentElement;
        if (parent && parent[matchesFn](selector)) {
            return parent;
        }
        el = parent;
    }

    return null;
}

document.addEventListener('DOMContentLoaded', function() {
    // Get all document sliders
    var showQuickview = document.querySelectorAll('[data-show="quickview"]');
    [].forEach.call(showQuickview, function(show) {
        var quickview = document.getElementById(show.dataset['target']);
        if (quickview) {
            // Add event listener to update output when slider value change
            show.addEventListener('click', function(event) {
                quickview.classList.add('is-active');
            });
        }
    });

    // Get all document sliders
    var dismissQuickView = document.querySelectorAll('[data-dismiss="quickview"]');
    [].forEach.call(dismissQuickView, function(dismiss) {
        var quickview = closest(dismiss, '.quickview');
        if (quickview) {
            // Add event listener to update output when slider value change
            dismiss.addEventListener('click', function(event) {
                quickview.classList.remove('is-active');
            });
        }
    });
});

/// 

// document.addEventListener('DOMContentLoaded', function() {

//     // Get all "navbar-search" elements
//     var $navbarSearch = Array.prototype.slice.call(document.querySelectorAll('.navbar-search'), 0);

//     // Check if there are any nav searches
//     if ($navbarSearch.length > 0) {

//         // Add a click event on each of them
//         $navbarSearch.forEach(function($el) {
//             $el.addEventListener('click', function() {

//                 // Get the target from the "data-target" attribute
//                 var target = $el.dataset.target;
//                 var $target = document.getElementById(target);

//                 // Toggle the class on both the "navbar-search" and the "navbar-menu"
//                 $el.classList.toggle('is-active');
//                 $target.classList.toggle('is-active');

//             });
//         });
//     }

// });
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