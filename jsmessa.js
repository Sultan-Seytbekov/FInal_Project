function headchange() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
function changeaw22(){
  document.getElementById("rs22").remove();
  document.getElementById("videocon").remove();
  document.getElementById("text1").innerHTML="Autumn/Winter22";
  document.getElementById("sl22").remove();
  document.getElementById("aww22").remove();
  document.getElementById("fs22").remove();
  document.getElementById("ny21").remove();
  document.getElementById("btshowaw").remove();
  document.getElementById("btshowawrs").remove();
  document.getElementById("btshowawsl").remove();
  document.getElementById("btshowawfs").remove();
  document.getElementById("btshowawny").remove();
  document.getElementById("rsimg1").src="messaphotos/IMG_9049.JPG";
  document.getElementById("rsimg2").src="messaphotos/IMG_9056.JPG";
}
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}