$(document).ready(function(){
$('.first-slider-container .owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin:30,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoHeight:true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    stagePadding:30,
    smartSpeed:450
});// first slider in home page
$('.flower-slider .owl-carousel').owlCarousel({
    items: 3,
    loop: false,
    margin:30,
    autoplayHoverPause: true,
    autoHeight:true,
    stagePadding:20,
    smartSpeed:250,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
});
$( ".flower-slider .owl-prev").html('<i class="fa fa-chevron-left"></i>');
$( ".flower-slider .owl-next").html('<i class="fa fa-chevron-right"></i>');
// second slider in home page

$('.last-home-slider .owl-carousel').owlCarousel({
        items:3,
        loop:true,
        autoplay: true,
        autoplayTimeout: 4000,
        center:true,
        stagePadding:-3,
        margin:30,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash',
        responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
   
});// last slider in home page
$('.navbar .nav-item a').on('click',function(){

	$(this).addClass('active').parent().siblings().find('a').removeClass('active');
});
//toggle active-class in navbar

$('.search-item .fa-search').on('click',function(event){
	$('.search-popup').fadeIn();
});

$('.search-form .fa-times').click(function(event){
	$('.search-popup').fadeOut();
});
//search-popup in navbar


$('.inner .tabs li').on('click', function (){
	$(this).addClass('active').siblings().removeClass('active');
	$('.tab-container >div').hide();
	$($(this).data('content')).fadeIn();
});
//dynamic tabs in home-page

$('.main-nav .login a ,.header-icons .fa-user-div .popuserform,.tap-rwd-nav .fa-user-div .popuserform')
.on('click',function(event){
	$('.form-popup').fadeIn();
});
$(document).keydown(function(event){
	if (event.keyCode == 27) {
		$('.form-popup,.flower-popup1,.flower-popup2,.flower-popup3,.flower-popup4,.flower-popup5,.flower-popup6,.media-popup1,.media-popup2,.media-popup3,.media-popup4,.media-popup5,.media-popup6').fadeOut();
	}
});
$('.form-popup ,.inner >i').click(function(event){
	$('.form-popup').fadeOut();
});
$('.form-popup .inner,.inner-content img,.inner-content .fa-share,.media-popup1 .inner-media,.media-popup2 .inner-media,.media-popup3 .inner-media,.media-popup4 .inner-media, .media-popup5 .inner-media,.media-popup6 .inner-media').click(function(event){
	event.stopPropagation();
});
//form-popup in home-page

$('.overbox .quick-view1').on('click',function(event){
	$('.flower-popup1').fadeIn();
});
$('.overbox .quick-view2').on('click',function(event){
	$('.flower-popup2').fadeIn();
});
$('.overbox .quick-view3').on('click',function(event){
	$('.flower-popup3').fadeIn();
});
$('.overbox .quick-view4').on('click',function(event){
	$('.flower-popup4').fadeIn();
});
$('.overbox .quick-view5').on('click',function(event){
	$('.flower-popup5').fadeIn();
});
$('.overbox .quick-view6').on('click',function(event){
	$('.flower-popup6').fadeIn();
});

$('.flower-popup1 ,.inner-content .fa-times').click(function(event){
	$('.flower-popup1').fadeOut();
});

$('.flower-popup2 ,.inner-content .fa-times').click(function(event){
	$('.flower-popup2').fadeOut();
});
$('.flower-popup3 ,.inner-content .fa-times').click(function(event){
	$('.flower-popup3').fadeOut();
});

$('.flower-popup4 ,.inner-content .fa-times').click(function(event){
	$('.flower-popup4').fadeOut();
});
$('.flower-popup5 ,.inner-content .fa-times').click(function(event){
	$('.flower-popup5').fadeOut();
});

$('.flower-popup6 ,.inner-content .fa-times').click(function(event){
	$('.flower-popup6').fadeOut();
});
 $('.inner-content img').click(function(event){    
    $(this).toggleClass('enlarge');
});    


//flower-popup in home-page
$('.flower-popup1 .inner-content .fa-share').on('click',function(event){
	$('.media-popup1').fadeIn();
});
$('.media-popup1 ,.media-popup1 .inner-media .close-font').click(function(event){
	$('.media-popup1').fadeOut();
});
$('.flower-popup2 .inner-content .fa-share').on('click',function(event){
	$('.media-popup2').fadeIn();
});

$('.media-popup2 ,.media-popup2 .inner-media .close-font').click(function(event){
	$('.media-popup2').fadeOut();
});
$('.flower-popup3 .inner-content .fa-share').on('click',function(event){
	$('.media-popup3').fadeIn();
});

$('.media-popup3 ,.media-popup3 .inner-media .close-font').click(function(event){
	$('.media-popup3').fadeOut();
});
$('.flower-popup4 .inner-content .fa-share').on('click',function(event){
	$('.media-popup4').fadeIn();
});

$('.media-popup4 ,.media-popup4 .inner-media .close-font').click(function(event){
	$('.media-popup4').fadeOut();
});
$('.flower-popup5 .inner-content .fa-share').on('click',function(event){
	$('.media-popup5').fadeIn();
});

$('.media-popup5 ,.media-popup5 .inner-media .close-font').click(function(event){
	$('.media-popup5').fadeOut();
});
$('.flower-popup6 .inner-content .fa-share').on('click',function(event){
	$('.media-popup6').fadeIn();
});

$('.media-popup6 ,.media-popup6 .inner-media .close-font').click(function(event){
	$('.media-popup6').fadeOut();
});

//media-popup1 in home-page

$('.certificate-slider .owl-carousel').owlCarousel({
    loop: true,
    margin:30,
    responsiveClass:true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    autoHeight:true,
    stagePadding:30,
    smartSpeed:450,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
});//in about-us page..first slider in this page

$( ".certificate-slider .owl-prev").html('<i class="fa fa-chevron-left"></i>');
$( ".certificate-slider .owl-next").html('<i class="fa fa-chevron-right"></i>');
//in about-us page..first slider in this page

$('.testi-slider .owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin:30,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoHeight:true,
    stagePadding:30,
    smartSpeed:450
});//in about-us page..testi slider in this page

$( ".testi-slider .owl-dots .owl-dot:nth-child(1)").html('<img src="images/testi1.jpg" style="border-radius: 50%;width: 40px;    margin-right: 5px;">');
$( ".testi-slider .owl-dots .owl-dot:nth-child(2)").html('<img src="images/testi2.jpg" style="border-radius: 50%;width: 40px;    margin-right: 5px;">');
$( ".testi-slider .owl-dots .owl-dot:nth-child(3)").html('<img src="images/testi3.jpg" style="border-radius: 50%;width: 40px;    margin-right: 5px;">');
//in about-us page..testi slider in this page

$('.count').each(function(){
	$(this).prop('counter',-1).animate(
	{	counter: $(this).text() },
	{
		duration: 10000,
		easing  : 'swing',
		step    : function(now){
			     $(this).text(Math.ceil(now));
		}
	});
});//about-us page

$('.submitMsg').attr('disabled','disabled');
$('#msgcheckbox').change(function(event){
	if (this.checked) {
	$('.submitMsg').removeAttr('disabled');	
	}
	else{
	$('.submitMsg').attr('disabled','disabled');	
	}

	});//in contact page

$('#subscribe').attr('disabled','disabled');
$('#checkbox').change(function(event){
	if (this.checked) {
	$('#subscribe').removeAttr('disabled');	
	}
	else{
	$('#subscribe').attr('disabled','disabled');	
	}

	});//in footer 

$(window).scroll(function(){
	if($(this).scrollTop() >= 200)
		$("#scrollup").show();
	else 
		$("#scrollup").hide();
});
$("#scrollup").click(function(){
	$("html, body").animate({scrollTop: 0}, 800);

});//scroll-up in all pages

new WOW().init();
});
