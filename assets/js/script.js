$(function(){
    
    $('aside section a img').mouseenter(function(){
        $('.bg-img').attr('src', $(this).attr('data-url'));
    });
    
});