// Fonts

// var font = new FontFaceObserver('Sole_Serif_Headline', {
//     weight: 700
// });

// font.load().then(function() {
//     console.log('Font is available');
// }, function() {
//     console.log('Font is not available');
// });

// (function(w4) {
//     if (w4.document.documentElement.className.indexOf("w4") > -1) {
//         return;
//     }
//     var fontA = new w4.FontFaceObserver('Whitney SSm A, Whitney SSm B', {
//         weight: 400
//     });

//     w4.Promise.all([fontA.check()]).then(function() {
//         w4.document.documentElement.className += " w4";
//         console.log('w4');
//     });
// }(this));

// (function(w6) {
//     if (w6.document.documentElement.className.indexOf("w6") > -1) {
//         return;
//     }
//     var fontA = new w6.FontFaceObserver('Whitney SSm A, Whitney SSm B', {
//         weight: 600
//     });

//     w6.Promise.all([fontA.check()]).then(function() {
//         w6.document.documentElement.className += " w6";
//         console.log('w6');
//     });
// }(this));

// (function(w7) {
//     if (w7.document.documentElement.className.indexOf("w7") > -1) {
//         return;
//     }
//     var fontA = new w7.FontFaceObserver('Whitney SSm A, Whitney SSm B', {
//         weight: 700
//     });

//     w7.Promise.all([fontA.check()]).then(function() {
//         w7.document.documentElement.className += " w7";
//         console.log('w7');
//     });
// }(this));



// dependencies enquire & sizzle

// function prependTo(parentId, childId) {
//     var parent = document.getElementById(parentId);
//     var child = document.getElementById(childId);
//     if (parent && child) {
//         parent.insertBefore(child, parent.firstChild);
//     }
// }

// function appendTo(parentId, childId) {
//     var parent = document.getElementById(parentId);
//     var child = document.getElementById(childId);
//     if (parent && child) {
//         parent.appendChild(child);
//     }
// }

// function insertAfterManyToMany(parentSelector, childSelector) {
//     var parents = Sizzle(parentSelector),
//         children = Sizzle(childSelector);
//     if (parents.length === children.length) {
//         for (var i = 0; i < parents.length; i++) {
//             parents[i].parentNode.insertBefore(children[i], parents[i].nextSibling);
//         }
//     }
// }

// function appendChildManyToMany(parentSelector, childSelector) {
//     var parents = Sizzle(parentSelector),
//         children = Sizzle(childSelector);
//     if (parents.length === children.length) {
//         for (var i = 0; i < parents.length; i++) {
//             parents[i].appendChild(children[i]);
//         }
//     }
// }


function load_vanilla() {

    var broken = document.images;
    var i;
    for (i = 0; i < broken.length; i++) {
        broken[i].onerror = function() {
            var parent = this.parentNode;
            parent.parentNode.removeChild(parent);
        };
    }

    var scroll = new SmoothScroll('a[href*="#"]', {


        // Speed & Easing
        speed: 750, // Integer. How fast to complete the scroll in milliseconds
        clip: true, // If true, adjust scroll distance to prevent abrupt stops near the bottom of the page
        offset: 52

    });




    // rightHeight.init();

    // stickyfill

    // var stickyElements = document.getElementsByClassName('sticky');
    // for (var i = stickyElements.length - 1; i >= 0; i--) {
    //     Stickyfill.add(stickyElements[i]);
    // }

    var elements = document.querySelectorAll('.sticky');
    Stickyfill.add(elements);

    // enquire

    // enquire.register("screen and (max-width: 767px)", {
    //     match: function() {
    //         insertAfterManyToMany('.inv .card-image', '.inv .card-content');
    //         insertAfterManyToMany('.inv_0 .card-image', '.inv_0 .card-content');

    //         insertAfterManyToMany('.inv_1 .card-content', '.inv_1 .card-image');



    //         appendChildManyToMany('.over_1 .card-content', '.over_1 .hero .hero-body .teaser');

    //         // insertAfterManyToMany('.over_0 .over_1', '.box_1 .videobox');


    //         //prependTo('fold', 'multi');
    //     },
    //     unmatch: function() {
    //         insertAfterManyToMany('.inv .card-content', '.inv .card-image');
    //         insertAfterManyToMany('.inv_0 .card-content', '.inv_0 .card-image');

    //         insertAfterManyToMany('.inv_1 .card-image', '.inv_1 .card-content');


    //         appendChildManyToMany('.over_1 .hero .hero-body', '.over_1 .card-content .teaser');

    //         // appendChildManyToMany('.box_1', '.over_0 .videobox');


    //         //appendTo('overlay_header', 'multi');
    //     }
    // });


    // enquire.register("screen and (min-width: 980px)", {
    //     match: function() {
    //         prependElement('two', 'one');
    //         prependElement('four', 'three');
    //         appendElement('five', 'one');
    //         appendElement('four', 'one');
    //     }
    // });

    // enquire.register("screen and (min-width: 980px)", {
    //     match: function() {
    //         prependElement('aside', 'block_1');
    //         prependElement('inset', 'block_2');
    //         appendElement('inset', 'block_3');
    //         appendElement('gist', 'block_4');
    //     }
    // });

    // enquire.register("screen and (min-width: 720px) and (max-width: 979px)", {
    //     match: function() {
    //         appendElement('aside', 'block_1');
    //         appendElement('aside', 'block_2');
    //         appendElement('gist', 'block_3');
    //         appendElement('gist', 'block_4');
    //     }
    // });

    // enquire.register("screen and (min-width: 580px) and (max-width: 719px)", {
    //     match: function() {
    //         appendElement('aside', 'block_1');
    //         appendElement('aside', 'block_2');
    //         appendElement('gist', 'block_3');
    //         appendElement('gist', 'block_4');
    //     }
    // });

    // enquire.register("screen and (min-width: 360px) and (max-width: 579px)", {
    //     match: function() {
    //         appendElement('aside', 'block_1');
    //         appendElement('gist', 'block_2');
    //         appendElement('gist', 'block_3');
    //         appendElement('gist', 'block_4');
    //     }
    // });

    // enquire.register("screen and (max-width: 359px)", {
    //     match: function() {
    //         appendElement('gist', 'block_1');
    //         appendElement('gist', 'block_2');
    //         appendElement('gist', 'block_3');
    //         appendElement('gist', 'block_4');
    //     }
    // });

    // enquire.register("screen and (max-width: 719px)", {
    //     match: function() {
    //         appendElement('above', 'big-picture');
    //     },
    //     unmatch: function() {
    //         appendElement('down-low', 'big-picture');
    //     }

    // });


    // if flickity
    // window.lazySizesConfig.loadMode = 1;
    // window.lazySizesConfig.expand = 100;
    // window.lazySizesConfig.expFactor = 1.6;



};


function load_jquery() {

    basket
        .require({
            url: 'dist/js/jquery.min.js'
        }).then(function() {


            // $.getJSON('https://ipapi.co/json/', function(data) {
            //     console.log(data);
            //     document.getElementById('geo_jquery').innerHTML = JSON.stringify(data, null, 4);
            // })


            // $('#sidebar_tray_items').prependTo('#sidebar_tray');
            // $('#sidebar_header_items').prependTo('#sidebar_header');
            // $('#bar').prependTo('#content');

            // $('#box__1').insertAfter('#copy__0 p:nth-child(1)');
            // $('#rm__1').insertAfter('#copy__0 p:nth-child(2)');
            // $('#rm__2').insertAfter('#copy__0 p:nth-child(5)');
            // $('#rm__3').insertAfter('#copy__0 p:nth-child(7)');
            // $('#rm__4').insertAfter('#copy__0 p:nth-child(10)');
            // $('#rm__5').insertAfter('#copy__0 p:nth-child(12)');

            // $('.copy').each(function() {
            // $('.copy .pull-quote').insertAfter('.copy p:nth-child(1)');                      
            // });

            // disqus
            // $('.show-comments').on('click', function() {
            //     var disqus_shortname = 'a24';
            //     $.ajax({
            //         type: "GET",
            //         url: "http://" + disqus_shortname + ".disqus.com/embed.js",
            //         dataType: "script",
            //         cache: true
            //     });
            //     // $(this).fadeOut();
            //     $(this).closest("div").fadeOut();
            // });

            // $(function() {
            //     var header = $(".sticky--details");
            //     $(window).scroll(function() {
            //         var scroll = $(window).scrollTop();

            //         if (scroll >= 1000) {
            //             header.removeClass('no').addClass("yes");
            //         } else {
            //             header.removeClass("yes").addClass('no');
            //         }
            //     });
            // });



            // enquire.register("screen and (max-width: 768px)", {
            //     match: function() {
            //         $("figure").addClass("is-mob");
            //     },
            //     unmatch: function() {
            //         $("figure").removeClass("is-mob");
            //     }
            // });


            // Close mobile & tablet menu on item click
            $('.navbar-item').each(function(e) {
                $(this).click(function() {
                    if ($('#navbarMenu').hasClass('is-active')) {
                        $('#navbarMenu').removeClass('is-active');
                    }
                });
            });



            var $animation_elements = $('.sticky--details');
            var $window = $(window);

            function in_view() {
                var window_height = $window.height();
                var window_top_position = $window.scrollTop();
                var window_bottom_position = (window_top_position + window_height);

                $.each($animation_elements, function() {
                    var $element = $(this);
                    var element_height = $element.outerHeight();
                    var element_top_position = $element.offset().top;
                    var element_bottom_position = (element_top_position + element_height);

                    //check to see if this current container is within viewport
                    if ((element_bottom_position >= window_top_position) &&
                        (element_top_position <= window_bottom_position)) {
                        $element.addClass('in-view');
                    } else {
                        $element.removeClass('in-view');
                    }
                });
            }

            // $window.on('scroll resize', in_view);
            // $window.trigger('scroll');



            // When our page loads, check to see if it contains and anchor
            // scroll_if_anchor(window.location.hash);
            // // Intercept all anchor clicks
            // $("body").on("click", "a", scroll_if_anchor);



        }, function(error) {
            console.log("jq problem");
            console.log(error);
        });


};


basket
    .require({
        url: 'dist/js/vanilla.min.js'
    })
    .then(function() {
        load_vanilla();

        console.log("vanilla");

    }, function(error) {
        console.log("vanilla problem");
        console.log(error);
    });

basket.require({
    // url: '//ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js'
    url: 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js'
}).then(function() {
    load_jquery();
    console.log("jq");
}, function(error) {
    basket.require({
        url: 'dist/jquery.min.js'
    }).then(function() {
        console.log("jq from local");
        load_jquery();
    });
});