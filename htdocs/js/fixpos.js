//to stop fixed menu to enter footer area

$(window).scroll(function () {

// distance from top of footer to top of document
footertotop = ($('#footer').position().top);
// distance user has scrolled from top, adjusted to take in height of sidebar (570 pixels inc. padding)
scrolltop = $(document).scrollTop()+570;
// difference between the two
difference = scrolltop-footertotop;

// if user has scrolled further than footer,
// pull sidebar up using a negative margin

if (scrolltop > footertotop) {

$('#cart').css('margin-top',  0-difference);
}

else  {
$('#cart').css('margin-top', 0);
}


});
