// custom scripts
//---------------

$(function() {

    // shuffle team members
    var elements = $('#the-team').find('.member')
    $('#the-team').html("")

    $.each( elements, function(id, item) {

        if ( Math.random() > 0.5 )
            $('#the-team').append(item)
        else
            $('#the-team').prepend(item)
    })

    // shuffle team members
    var elements = $('#steering').find('.member')
    $('#steering').html("")

    $.each( elements, function(id, item) {

        if ( Math.random() > 0.5 )
            $('#steering').append(item)
        else
            $('#steering').prepend(item)
    })
});
