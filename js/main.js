
//Responsive Menu
function responsiveMenu() {
  var nav = document.getElementById("main-menu");
  if (nav.className === "main-menu") {
    nav.className += " responsive";
  } else {
    nav.className = "main-menu";
  }
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