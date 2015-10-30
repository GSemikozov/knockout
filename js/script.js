//prototype method to add 5 days to current days
Date.prototype.addDays = function(days) {
    this.setDate(this.getDate() + parseInt(days));
    return this;
};

//set Date with +5 Days time estimate from current Date
function tData() {
    var s;
    var estimateDate = new Date();
    estimateDate.addDays(5);
    var y = estimateDate.getFullYear();
    //var d = estimateDate.setDate(estimateDate.getDate() + 2);
    var d = estimateDate.getDate();
    var mon = estimateDate.getMonth();
    switch (mon) {
        case 0: s="Jan"; break;
        case 1: s="Feb"; break;
        case 2: s="Mar"; break;
        case 3: s="Apr"; break;
        case 4: s="May"; break;
        case 5: s="Jun"; break;
        case 6: s="Jul"; break;
        case 7: s="Aug"; break;
        case 8: s="Sep"; break;
        case 9: s="Oct"; break;
        case 10: s="Nov"; break;
        case 11: s="Dec"; break;
    }
    var result = d + " " + s + " " + y;
    var result2 = result;
    var result3 = result;
    document.getElementById('estimate-date').innerHTML = result;
    document.getElementById('estimate-date2').innerHTML = result2;
    document.getElementById('estimate-date3').innerHTML = result3;
}

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
    $('#another-payment-method').on('click', function() {
        $('#another-user-query').slideToggle('slow');
    });
    tData();

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
    $('#arrow-right').on('click', function() {


        if ($(".carousel-linked-projects li.active").next().length != 0)
            carouselLinkedProjects.find('li.active').removeClass('active').next().addClass('active');
        else {
            carouselLinkedProjects.find('li.active').removeClass('active');
            carouselLinkedProjects.find('li:first').addClass('active');
        }
        //return false;

        //carouselLinkedProjects.find('li.active').removeClass('active').eq(next).addClass('active');

        //carouselLinkedProjects.find('li.active').removeClass('active').next().addClass('active');

        //if (carouselLinkedProjects.find('li.active').is('.last-child')) {
            //$(this).removeClass('active').closest('ul').find(' li:first-child').addClass('active');
        //}

        /*var $na = $('.indicator');
        (function _loop(idx) {
            $na.removeClass('active').eq(idx).addClass('active');
            setTimeout(function () {
                _loop((idx + 1) % $na.length);
            }, 2000);
        }(0));*/

       var currentProject = carouselLinkedProjects.find('li.active > a').data('project');

        myCarousel.find('.item').remove();
        $slides = allSlides.filter( function () {
            return $(this).data('project') == currentProject
        });
        $slides.eq(0).addClass('active');
        //console.log(this, currentProject , $slides );
        myCarousel.find('.carousel-inner').append($slides);
        //myCarousel.carousel("pause").removeData().carousel(0);*/

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
            'radio1': {
                required: true
            },
            'radio2': {
                required: true
            },
            'radio3': {
                required: true
            },
            'upload-file': {
                required: true
                //accept: "documents/word,documents/powerpoint"
            },
            'upload-assets': {
                required: true
                //accept: "image/jpeg, image/png"
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
            'radio1': {
                required: ""
            },
            'radio2': {
                required: ""
            },
            'radio3': {
                required: ""
            },
            'upload-file': {
                required: ""
            },
            'upload-assets': {
                required: ""
            },
            os0: {
                required: ""
            }
        },
        /*errorPlacement: function(error, element) {
            if ( element.is(":radio") ) {
                error.appendTo( element.parents('.container') );
            } else { // This is the default behavior
                error.insertAfter( element );
            }
        },*/
        highlight: function(label) {
            //$(label).closest('.control-group')
            //.find('.label-error-star').css('display', 'inline-block');
            $(label).closest('.control-group')
                .find('.input-label').addClass('error-color');

            $(label).closest('.form-2__col-1')
                .find('.checkbox-label').addClass('error-color').find('a').addClass('error-color');
            $(label).closest('.form-2__col-1')
                .find('.input-label').addClass('error-color')
                .find('a').addClass('error-color');

            $(label).closest('.form-2__col-2')
                .find('.checkbox-label').addClass('error-color');

            $(label).closest('.upload-btn__wrap').find('.upload-btn').addClass('error-color');


            //$(label).closest('.control-group')
            //.find('.select-label').addClass('error-color');
        },
        success: function(label) {
            label.closest('.control-group')
                .find('.input-label').addClass('success-color');

            $(label).closest('.upload-btn__wrap').find('.upload-btn').removeClass('success-color');

            label.closest('.form-2__col-1')
             .find('.checkbox-label').addClass('success-color')
             .find('a').addClass('success-color');
        }
    });

    $(".open1").click(function() {
        if (v.form()) {
            $(".frm").fadeOut("fast");
            $("#sf2").fadeIn("slow");
        }
    });

    $(".open2").click(function() {
        if (v.form()) {
            $(".frm").fadeOut("fast");
            $("#sf3").fadeIn("slow");
        }
    });

    $(".open3").click(function() {
        if (v.form()) {
            setTimeout(function(){
                $("#basicform").html('<section class="success container"><h1 class="text-center">done, check your inbox</h1><p style="padding-bottom: 50px;">You can excpect a mail from us in the next couple of minutes if there seems to bea delay dont hesitate to email us at work@khockoutzero.com </p></section>');
            }, 1000);
            return false;
        } else {
            setTimeout(function(){
                $("#basicform").html('<section class="cancel container"><h1 class="text-center">yikes! - change of heart?</h1><p style="padding-bottom: 50px;">No problem we will be here when you get back </p></section>');
            }, 1000);
            return false;
        }
    });

    $("#submit-query").click(function() {
        if (v.form()) {
            setTimeout(function(){
                $("#basicform").html('<section class="success container"><h1 class="text-center">done, check your inbox</h1><p style="padding-bottom: 50px;">You can excpect a mail from us in the next couple of minutes if there seems to bea delay dont hesitate to email us at work@khockoutzero.com </p></section>');
            }, 1000);
            return false;
        } else {
            setTimeout(function(){
                $("#basicform").html('<section class="cancel container"><h1 class="text-center">yikes! - change of heart?</h1><p style="padding-bottom: 50px;">No problem we will be here when you get back </p></section>');
            }, 1000);
            return false;
        }
    });

    $(".back2").click(function() {
        $(".frm").fadeOut("fast");
        $("#sf1").fadeIn("slow");
    });

    $(".back3").click(function() {
        $(".frm").fadeOut("fast");
        $("#sf2").fadeIn("slow");
    });

    var f = jQuery(".contact-form__form").validate({
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
            }

        },
        errorElement: "span",
        errorClass: "help-inline-error",
        messages: {
            name: {
                required: "",
                minlength: "",
                maxlength: ""
            },
            email: {
                required: "",
                minlength: "",
                maxlength: "",
                email: ""
            }
        },
        highlight: function(label) {
            $(label).closest('.inputs').css('border-color', 'yellow');
        },
        success: function(input) {
            $(input).css('border-color', 'white');
        }
    });

    $("#subscribe-newslatter").click(function() {
        if (f.form()) {
            setTimeout(function(){
                $(".contact-form__form").html('<section class="success text-center" style="color: #fff; padding-top: 10px;">done, check your inbox</section>');
            }, 1000);
            return false;
        }
    });

});