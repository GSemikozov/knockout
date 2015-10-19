jQuery(function($) {
    $('#open').on('click', function() {
       $('header').slideToggle('slow');
    });
    $('#close').on('click', function() {
     $('header').hide('slow');
    });
    $('#contact').on('click', function() {
        $('#contact-form').slideToggle('slow');
    });
});
