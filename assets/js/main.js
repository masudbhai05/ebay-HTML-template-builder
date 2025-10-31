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

    // ----------------------Overview Quill Editor--------------------
    const toolbarOptionsOverview = [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],     
        [{ 'color': ['#000', '#f15208ff', '#89ec07ff'] }, { 'background': ['#000', '#f15208ff', '#89ec07ff'] }], 
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],     
        [{ 'align': [] }],
        ['clean']                                       
    ];
    const optionsOverview = {
        debug: 'info',
        modules: {
            toolbar: toolbarOptionsOverview,
        },
        placeholder: 'Write a product overview...',
        theme: 'snow'
    };
    const overviewEditor = new Quill('#overview-editor', optionsOverview)
    // overviewEditor.enable(false);

    // ------------------Label Quill Editor-------------------
    const toolbarOptionsLabel = [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],     
        [{ 'color': ['#000', '#f15208ff', '#89ec07ff'] }, { 'background': ['#000', '#f15208ff', '#89ec07ff'] }], 
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],     
        [{ 'align': [] }],
        ['clean']                                       
    ];
    const optionsLabel = {
        debug: 'info',
        modules: {
            toolbar: toolbarOptionsLabel,
        },
        placeholder: 'Write a label about product...',
        theme: 'snow'
    };
    const LabelEditor = new Quill('#label-editor', optionsLabel)
    // LabelEditor.enable(false);

    // ------------------Label Quill Editor-------------------
    const toolbarOptionsWarranty = [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],     
        [{ 'color': ['#000', '#f15208ff', '#89ec07ff'] }, { 'background': ['#000', '#f15208ff', '#89ec07ff'] }], 
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],     
        [{ 'align': [] }],
        ['clean']                                       
    ];
    const optionsWarranty = {
        debug: 'info',
        modules: {
            toolbar: toolbarOptionsWarranty,
        },
        placeholder: 'Write a Warranty about product...',
        theme: 'snow'
    };
    const WarrantyEditor = new Quill('#warranty-editor', optionsWarranty)
    // WarrantyEditor.enable(false);

})(jQuery)