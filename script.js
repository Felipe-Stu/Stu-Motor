var navStatus = false;

$(document).ready(function(){
    $('header button').click(function(){
        if (navStatus === false) {
            $('header nav').slideDown();
            navStatus = true;
        } else {
            $('header nav').slideUp();
                navStatus = false;
            }
        });
});
