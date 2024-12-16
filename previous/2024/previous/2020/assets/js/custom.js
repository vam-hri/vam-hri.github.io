// custom scripts
//---------------

$(function() {

    // initialize toasts
    $('.toast').toast({'autohide' : false})

    // load all toasts
    $.each( [...Array(3).keys()], function(i) {
        $('#alert-'+i).toast('show')
    })

    // shuffle team members
    var elements = $('#the-band').find('.member')
    $('#the-band').html("")

    $.each( elements, function(id, item) {

        if ( Math.random() > 0.5 )
            $('#the-band').append(item)
        else
            $('#the-band').prepend(item)
    })
});
