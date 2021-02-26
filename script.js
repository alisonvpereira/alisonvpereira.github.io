

var scrollIndex = 0;
startScroll();

function startScroll() {
  var i;
  var scroll = document.getElementsByClassName("carousel");
  var bullet = document.getElementsByClassName("bullet");
  for (i = 0; i < scroll.length; i++) {
    scroll[i].style.display = "none";  
  }
  scrollIndex++;
  if (scrollIndex > scroll.length) {scrollIndex = 1}    
  for (i = 0; i < bullet.length; i++) {
    bullet[i].className = bullet[i].className.replace(" active", "");
  }
  scroll[scrollIndex-1].style.display = "block";  
  bullet[scrollIndex-1].className += " active";
  setTimeout(startScroll, 20000); // Change image every 20 seconds 
}
