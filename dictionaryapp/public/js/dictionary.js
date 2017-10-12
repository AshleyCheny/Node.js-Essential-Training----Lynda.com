$(document).ready(function () {

    // front end(client) send get request to the server
    $.getJSON('/dictionary-api', printTerms);
    $('form').submit(function (e) {
        e.preventDefault();
        // front end(client) send post request to the server
        $.post('/dictionary-api', {term: $('#term').val(), defined: $('#defined').val()}, printTerms);
        this.reset();
    });

});

function printTerms(terms) {
    $('body>dl').empty();
    $.each(terms, function () {
        $('<dt>').text(this.term).appendTo('body>dl');
        $('<dd>').text(this.defined).appendTo('body>dl');
    });
    $('dt').off('dblclick').dblclick(function() {
        // front end(client) send delete request to the server
        $.ajax({
            url: '/dictionary-api/' + $(this).text(),
            type: 'DELETE',
            success: printTerms
        });
    });
}
