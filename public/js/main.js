//indicator for current section position on sidenav
var section_indicator = function(){
  $(this).siblings().removeClass('active-list');
  $(this).addClass('active-list');
}
$(document).ready(function(){
  //Initialization of materialize css component
  $(".button-collapse").sideNav({closeOnClick: true});
  $('.scrollspy').scrollSpy();
  $('.slider').slider({full_width: true});
  $('.parallax').parallax();

  //My custom jQuery
  $('.list-item').click(section_indicator);

});
