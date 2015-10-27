jQuery().ready(function() {

    //common js for content buttons
    $('#open').on('click', function() {
        $('header').slideToggle('slow');
    });
    $('#close').on('click', function() {
        $('header').hide('slow');
    });
    $('#contact').on('click', function() {
        $('#contact-form').slideToggle('slow');
    });

    //slider
    var myCarousel = $('#myCarousel'),
        carouselLinkedNav = $('.carousel-linked-nav'),
        carouselLinkedProjects = $('.carousel-linked-projects'),
        allSlides = $('#allSlides').find('div.item');
    // invoke the carousel
    $('#myCarousel').carousel({
        interval: false
    });

    /* SLIDE ON CLICK */
    carouselLinkedNav.find('li > a').click(function() {
        var $this = $(this)
        // grab href, remove pound sign, convert to number
            , item = $this.attr('href').substring(1) | 0;
        // slide to number -1 (account for zero indexing)
        $('#myCarousel').carousel(item - 1);
        // remove current active class
        carouselLinkedNav.find('.active').removeClass('active');
        // add active class to just clicked on item
        $this.closest('li').addClass('active');
        // don't follow the link
        return false;
    });

    carouselLinkedProjects.find(' li > a').click(function() {

        carouselLinkedProjects.find('li').removeClass('active');
        $(this).closest('li').addClass('active');

        var currentProject = $(this).data('project');

        myCarousel.find('.item').remove();
        $slides = allSlides.filter( function () {
            return $(this).data('project') == currentProject
        });
        $slides.eq(0).addClass('active');
        //console.log(this, currentProject , $slides );
        myCarousel.find('.carousel-inner').append($slides);
        //myCarousel.carousel("pause").removeData().carousel(0);

        return false;
    });
    /* AUTOPLAY NAV HIGHLIGHT */
    // bind 'slid' function
    /*myCarousel.bind('slid', function() {
        // remove active class
        carouselLinkedNav.find('.active').removeClass('active');
        // get index of currently active item
        var idx = myCarousel.find('item.active').index();
        // select currently active item and add active class
        $('.carousel-linked-nav li:eq(' + idx + ')').addClass('active');
    });*/

    // validate form on keyup and submit
    var v = jQuery("#basicform").validate({
        rules: {
            name: {
                required: true,
                minlength: 2,
                maxlength: 16
            },
            email: {
                required: true,
                minlength: 2,
                email: true,
                maxlength: 100
            },
            'checkboxes[]': {
                required: true,
                minlength: 1
            },
            'checkboxes2[]': {
                required: true
            },
            'checkboxes3[]': {
                required: true
            },
            'upload-file': {
                required: true
            },
            'upload-assets': {
                required: true
            },
            os0: {
                required: true
            }

        },
        errorElement: "span",
        errorClass: "help-inline-error",
        messages: {
            name: {
                required: "<img src='images/error-ico.png' alt=''>",
                minlength: "min 2 letters",
                maxlength: ""
            },
            email: {
                required: "<img src='images/error-ico.png' alt=''>",
                minlength: "",
                maxlength: "",
                email: "wrong format"
            },
            'checkboxes[]': {
                required: ""
            },
            'checkboxes2[]': {
                required: ""
            },
            'checkboxes3[]': {
                required: ""
            },
            'upload-file': {
                required: "ERROR - SOME REQUIRED FIELDS ARE EMPTY"
            },
            'upload-assets': {
                required: "warning: you have  not attached any content / assets, you may still proceed, and email those through latter"
            },
            os0: {
                required: ""
            }
        },
        highlight: function(label) {
            //$(label).closest('.control-group')
            //.find('.label-error-star').css('display', 'inline-block');
            $(label).closest('.control-group')
                .find('.input-label').addClass('error-color');

            $(label).closest('.form-2__col-1')
                .find('.checkbox-label').addClass('error-color').find('a').addClass('error-color')
                .closest('.custom-checkbox').find('input[type="checkbox"]').removeClass('valid');
            $(label).closest('.form-2__col-1')
                .find('.input-label').addClass('error-color')
                .find('a').addClass('error-color');

            $(label).closest('.form-2__col-2')
                .find('.checkbox-label').addClass('error-color');

            //$(label).closest('.control-group')
            //.find('.select-label').addClass('error-color');
        },
        success: function(label) {
            label.closest('.control-group')
                .find('.input-label').addClass('success-color');

            /*label.closest('.form-2__col-1')
             .find('.checkbox-label').addClass('success-color')
             .find('a').addClass('success-color');*/
        }
    });

    $(".open1").click(function() {
        if (v.form()) {
            $(".frm").hide("fast");
            $("#sf2").show("slow");
        }
    });

    $(".open2").click(function() {
        if (v.form()) {
            $(".frm").hide("fast");
            $("#sf3").show("slow");
        }
    });

    $(".open3").click(function() {
        if (v.form()) {
            $("#loader").show();
            setTimeout(function(){
                $("#basicform").html('<section class="success conteiner"><h1 class="text-center">done, check your inbox</h1><p>You can excpect a mail from us in the next couple of minutes if there seems to bea delay dont hesitate to email us at work@khockoutzero.com </p></section>');
            }, 1000);
            return false;
        } else {
            $("#loader").show();
            setTimeout(function(){
                $("#basicform").html('<section class="cancel conteiner"><h1 class="text-center">yikes! - change of heart?</h1><p>No problem we will be here when you get back </p></section>');
            }, 1000);
            return false;
        }
    });

    $(".back2").click(function() {
        $(".frm").hide("fast");
        $("#sf1").show("slow");
    });

    $(".back3").click(function() {
        $(".frm").hide("fast");
        $("#sf2").show("slow");
    });

});