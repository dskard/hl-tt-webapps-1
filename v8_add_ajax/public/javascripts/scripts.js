/*
 * For more information on using jquery post, see:
 * https://api.jquery.com/jquery.post/
 */

$(document).ready( function() {

    // attach a submit handler to the form
    $("#myForm").submit( function(event) {

        // stop form from submitting normally
        event.preventDefault();

        // get some values from elements on the page:
        var $form = $( this ),
            n1 = $form.find( '#n1' ).val(),
            n2 = $form.find( '#n2' ).val(),
            n3 = $form.find( '#n3' ).val(),
            action = $form.attr( 'action' );

        // send the data using post
        url = location.href.replace(/\/$/,'') + action;
        data = { n1 : n1, n2 : n2, n3 : n3 };
        var posting = $.post(url, data);

        // put the results in a div
        posting.done(function(data,status) {
            spirograph = document.getElementById('spirograph');
            Plotly.newPlot(
                spirograph,
                [{
                    x: data.x,
                    y: data.y
                }],
                {
                    margin: { t: 0 }
                }
            );
        }); // end posting.done
    }); // end form.submit
}); // end document.ready
