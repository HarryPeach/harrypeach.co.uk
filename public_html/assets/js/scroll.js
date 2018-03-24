/*
 * scroll.js
 * Scrolls smoothly when anchors are used
 * Copyright (c) Harry Peach 2018
 */
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 800);
    return false;
});