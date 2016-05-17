$( document ).ready( function(){
	$( ".button-collapse" ).sideNav();
	$(".main").onepage_scroll();
} )

function move( numero ){ 
	$(".main").moveTo( numero );
}