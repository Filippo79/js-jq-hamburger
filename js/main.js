$(document).ready(function() {
    $('.header-right > a').click(function() {
        $('.hamburger-menu').addClass('active');
    });
});
$(document).ready(function() {
    $('.close').click(function(){
        $('.hamburger-menu').removeClass('active');
    });
});
