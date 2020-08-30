
//Responsive Menu
function responsiveMenu() {
  var nav = document.getElementById("main-menu");
  if (nav.className === "main-menu") {
    nav.className += " responsive";
  } else {
    nav.className = "main-menu";
  }
}

//Responsive 
var intFrameWidth = window.innerWidth;
if(intFrameWidth <= 460) {
  document.querySelector('main').classList = "";
  document.querySelector('header').classList = "header";
  document.querySelector('aside').classList = "";
}

//Animation In view

var animation = document.querySelectorAll('.animate');
animation.forEach((animate)=> {
  animate.className += " in-view";
});


//LightCase

if($('a[data-rel^=lightcase]').length){
  $('a[data-rel^=lightcase]').lightcase({
    overlayOpacity: 1
  });
}

  /* Banner Slider LightBox
  -------------------------------------------------------------------*/
  if($('.popup-gallery').length > 0){
    $('.popup-gallery').slickLightbox({
                //itemSelector: '.lightbox-link',
                caption:'caption'
        }).on({
        'show.slickLightbox': function(){
          $(this).addClass('visible');
            open_page_overlay();
            //console.log('A `show.slickLightbox` event triggered.');
        },
        // 'shown.slickLightbox': function(){ console.log('A `shown.slickLightbox` event triggered.'); },
        'hide.slickLightbox': function(){
            close_page_overlay();
            //console.log('A `hide.slickLightbox` event triggered.');
        },
        //'hidden.slickLightbox': function(){ console.log('A `hidden.slickLightbox` event triggered.'); }
    });
};