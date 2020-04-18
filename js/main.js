// Переключатель стилів //
function loadCss(href) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
}
document.addEventListener('change', function () {
  var chk = event.target
  if (chk.tagName === 'INPUT' && chk.type === 'checkbox') {
    if(chk.checked != false){
      loadCss("css/white.css")
      loadCss("css/adaptation.css")
    }
    else {
      loadCss("css/style.css")
      loadCss("css/adaptation.css")
    }
  }
});
// Кінець //

// Прелоадер початок //
function preloader (){
	$(() => {
		setInterval(() =>{
			let p = $('.preloader');
			p.css('opacity',0);

			setInterval(
				() => p.remove(),
				parseInt(p.css('--duration')) * 1000
			);
		}, 1000)
	});
}
setInterval(() => preloader(), 500)
// Кінець //


// Slick slider //

$('.single-item').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  dots:true,
  responsive: [
   {
     breakpoint: 480,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 1,
       dots: true,
       centerMode: true,
       variableWidth: true
     }
   }
 ]

});

// END //

// Animation //

$(function(){
	$("a").click(function() {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});
  $(window).scroll(function() {
    	$('.left').each(function(){
        	var imagePos = $(this).offset().top;

        	var topOfWindow = $(window).scrollTop();
        	if (imagePos < topOfWindow+650) {
            	$(this).addClass("fadeInLeft");
       	 }
    	});
			$('.right').each(function(){
        	var imagePos = $(this).offset().top;

        	var topOfWindow = $(window).scrollTop();
        	if (imagePos < topOfWindow+650) {
            	$(this).addClass("fadeInRight");
       	 }
    	});
			$('.top').each(function(){
        	var imagePos = $(this).offset().top;

        	var topOfWindow = $(window).scrollTop();
        	if (imagePos < topOfWindow+650) {
            	$(this).addClass("fadeInDown");
       	 }
    	});
			$('.stat').each(function(){
        	var imagePos = $(this).offset().top;

        	var topOfWindow = $(window).scrollTop();
        	if (imagePos < topOfWindow+650) {
            	$(this).addClass("fadeIn");
       	 }
    	});
		});
});
  //
