$(document).ready(function() {

        $('#scroller').click(function(){

            $('html,body').animate({scrollTop:$(document).height()}, 'slow');

            return false;

        });

        $('#firstscr').click(function(){

            $('html,body').animate({scrollTop:$(document).height()}, 'slow');

            return false;

        });

});