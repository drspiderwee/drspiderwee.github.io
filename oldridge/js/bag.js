$(document).ready(function() {

    $( '#block-cart > p' ).click(function() {
        $( '#block-cart > div' ).show( "slow" );
    });

    $( '#block-cart > div' ).click(function() {
        $( '#block-cart > div' ).hide( "slow" );
    });



});