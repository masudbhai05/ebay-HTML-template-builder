(function ($) {
    "use strict";

    var windowOn = $(window);
    // wow
    windowOn.on('load', function () {
        wowAnimation();
    });

    // preloader 
    windowOn.on('load', function () {
        $("#loading").fadeOut(500);
    })

    // back-to-top
    var btn = $('#back-to-top');
    windowOn.scroll(function () {
        if (windowOn.scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, '300');
    });

    // background image attribute
    $('[data-background]').each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    })
    // background color attribute
    $('[data-bg-color]').each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"))
    })
    // color attribute 
    $('[data-color]').each(function () {
        $(this).css("color", $(this).attr("data-color"))
    })

     // Initialize Quill Editor
    const quill = new Quill('#editor-container', {
      modules: {
        toolbar: '#toolbar'
      },
      theme: 'snow'
    });

})(jQuery)