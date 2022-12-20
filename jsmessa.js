function headchange() {
  document.getElementById("toggle").style.marginLeft = "0px";
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
document.getElementById("rsimg3").src="messaphotos/IMG_9057.JPG";
document.getElementById("rsimg4").src="messaphotos/IMG_9058.JPG";
document.getElementById("rsimg5").src="messaphotos/IMG_9059.JPG";
document.getElementById("sl22img1").src="messaphotos/IMG_9060.JPG";
document.getElementById("sl22img2").src="messaphotos/IMG_9061.JPG";
document.getElementById("sl22img3").src="messaphotos/IMG_9063.JPG";
document.getElementById("sl22img4").src="messaphotos/IMG_9064.JPG";
document.getElementById("sl22img5").src="messaphotos/IMG_9067.JPG";
document.getElementById("fs22img1").src="messaphotos/IMG_9074.JPG";
document.getElementById("fs22img2").src="messaphotos/IMG_9075.JPG";
document.getElementById("fs22img3").src="messaphotos/IMG_9076.JPG";
document.getElementById("fs22img4").src="messaphotos/IMG_9077.JPG";
document.getElementById("fs22img5").src="messaphotos/IMG_9078.JPG";
document.getElementById("ny").remove();
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

function changers22(){
document.getElementById("text1").innerHTML="Resort Collection"
document.getElementById("sl22").remove();
document.getElementById("aww22").remove();
document.getElementById("fs22").remove();
document.getElementById("ny21").remove();
document.getElementById("btshowaw").remove();
document.getElementById("btshowawrs").remove();
document.getElementById("btshowawsl").remove();
document.getElementById("btshowawfs").remove();
document.getElementById("btshowawny").remove();
document.getElementById("video1car").src="messaphotos/IMG_9133.MP4";
document.getElementById("rs22").remove();
document.getElementById("sl22img1").src="messaphotos/IMG_9060.JPG";
document.getElementById("sl22img2").src="messaphotos/IMG_9061.JPG";
document.getElementById("sl22img3").src="messaphotos/IMG_9063.JPG";
document.getElementById("sl22img4").src="messaphotos/IMG_9064.JPG";
document.getElementById("sl22img5").src="messaphotos/IMG_9067.JPG";
document.getElementById("fs22img1").src="messaphotos/IMG_9074.JPG";
document.getElementById("fs22img2").src="messaphotos/IMG_9075.JPG";
document.getElementById("fs22img3").src="messaphotos/IMG_9076.JPG";
document.getElementById("fs22img4").src="messaphotos/IMG_9077.JPG";
document.getElementById("fs22img5").src="messaphotos/IMG_9078.JPG";
document.getElementById("aw22").remove();
document.getElementById("ny").remove();
}
function changesl22(){
document.getElementById("text1").innerHTML="Summer Linen";
document.getElementById("sl22").remove();
document.getElementById("aww22").remove();
      document.getElementById("fs22").remove();
      document.getElementById("ny21").remove();
      document.getElementById("btshowaw").remove();
      document.getElementById("btshowawrs").remove();
      document.getElementById("btshowawsl").remove();
      document.getElementById("btshowawfs").remove();
      document.getElementById("btshowawny").remove();
      document.getElementById("video1car").remove();
      document.getElementById("rs22").remove();
      document.getElementById("rsimg1").src="messaphotos/IMG_9102.JPG";
      document.getElementById("rsimg2").src="messaphotos/IMG_9104.JPG";
      document.getElementById("rsimg3").src="messaphotos/IMG_9108.JPG";
      document.getElementById("rsimg4").src="messaphotos/IMG_9109.JPG";
      document.getElementById("rsimg5").src="messaphotos/IMG_9111.JPG";
      document.getElementById("fs22img1").src="messaphotos/IMG_9113.JPG";
      document.getElementById("fs22img2").src="messaphotos/IMG_9115.JPG";
      document.getElementById("fs22img3").src="messaphotos/IMG_9117.JPG";
      document.getElementById("fs22img4").src="messaphotos/IMG_9119.JPG";
      document.getElementById("fs22img5").src="messaphotos/IMG_9121.JPG";
      document.getElementById("aw22").remove();
      document.getElementById("ny").remove();
}
function changefs22(){
document.getElementById("text1").innerHTML="Feel Spring";
document.getElementById("sl22").remove();
document.getElementById("aww22").remove();
      document.getElementById("fs22").remove();
      document.getElementById("ny21").remove();
      document.getElementById("btshowaw").remove();
      document.getElementById("btshowawrs").remove();
      document.getElementById("btshowawsl").remove();
      document.getElementById("btshowawfs").remove();
      document.getElementById("btshowawny").remove();
      document.getElementById("video1car").remove();
      document.getElementById("rs22").remove();
      document.getElementById("rsimg1").src="messaphotos/IMG_9151.JPG";
      document.getElementById("rsimg2").src="messaphotos/IMG_9154.JPG";
      document.getElementById("rsimg3").src="messaphotos/IMG_9157.JPG";
      document.getElementById("rsimg4").src="messaphotos/IMG_9155.JPG";
      document.getElementById("rsimg5").src="messaphotos/IMG_9154.JPG";
      document.getElementById("sl22img1").src="messaphotos/IMG_9137.JPG";
      document.getElementById("sl22img2").src="messaphotos/IMG_9139.JPG";
      document.getElementById("sl22img3").src="messaphotos/IMG_9141.JPG";
      document.getElementById("sl22img4").src="messaphotos/IMG_9145.JPG";
      document.getElementById("sl22img5").src="messaphotos/IMG_9148.JPG";
      document.getElementById("aw22").remove();
      document.getElementById("ny").remove();
}
function changeny21(){
document.getElementById("text1").innerHTML="NY21 drop";
      document.getElementById("sl22").remove();
      document.getElementById("aww22").remove();
      document.getElementById("fs22").remove();
      document.getElementById("ny21").remove();
      document.getElementById("btshowaw").remove();
      document.getElementById("btshowawrs").remove();
      document.getElementById("btshowawsl").remove();
      document.getElementById("btshowawfs").remove();
      document.getElementById("btshowawny").remove();
      document.getElementById("video1car").src="messaphotos/IMG_9178.MP4"
      document.getElementById("rs22").remove();
      document.getElementById("rs").remove();
      document.getElementById("sl22img1").src="messaphotos/IMG_9167.JPG";
      document.getElementById("sl22img2").src="messaphotos/IMG_9169.JPG";
      document.getElementById("sl22img3").src="messaphotos/IMG_9172.JPG";
      document.getElementById("sl22img4").src="messaphotos/IMG_9182.JPG";
      document.getElementById("sl22img5").src="messaphotos/IMG_9183.JPG";
      document.getElementById("fs22img1").src="messaphotos/IMG_9177.JPG";
      document.getElementById("fs22img2").src="messaphotos/IMG_9180.JPG";
      document.getElementById("fs22img3").src="messaphotos/IMG_9181.JPG";
      document.getElementById("fs22img4").src="messaphotos/IMG_9174.JPG";
      document.getElementById("fs22img5").src="messaphotos/IMG_9176.JPG";
      document.getElementById("aw22").remove();
}
function change(element) {
var a=element.innerHTML;
   
switch (a) {
    case "autumn-winter22":
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
      document.getElementById("rsimg3").src="messaphotos/IMG_9057.JPG";
      document.getElementById("rsimg4").src="messaphotos/IMG_9058.JPG";
      document.getElementById("rsimg5").src="messaphotos/IMG_9059.JPG";
      document.getElementById("sl22img1").src="messaphotos/IMG_9060.JPG";
      document.getElementById("sl22img2").src="messaphotos/IMG_9061.JPG";
      document.getElementById("sl22img3").src="messaphotos/IMG_9063.JPG";
      document.getElementById("sl22img4").src="messaphotos/IMG_9064.JPG";
      document.getElementById("sl22img5").src="messaphotos/IMG_9067.JPG";
      document.getElementById("fs22img1").src="messaphotos/IMG_9074.JPG";
      document.getElementById("fs22img2").src="messaphotos/IMG_9075.JPG";
      document.getElementById("fs22img3").src="messaphotos/IMG_9076.JPG";
      document.getElementById("fs22img4").src="messaphotos/IMG_9077.JPG";
      document.getElementById("fs22img5").src="messaphotos/IMG_9078.JPG";
      document.getElementById("ny").remove();
      break;
    case "resort collection":
      document.getElementById("text1").innerHTML="Resort Collection";
      document.getElementById("sl22").remove();
      document.getElementById("aww22").remove();
      document.getElementById("fs22").remove();
      document.getElementById("ny21").remove();
      document.getElementById("btshowaw").remove();
      document.getElementById("btshowawrs").remove();
      document.getElementById("btshowawsl").remove();
      document.getElementById("btshowawfs").remove();
      document.getElementById("btshowawny").remove();
      document.getElementById("video1car").src="messaphotos/IMG_9133.MP4";
      document.getElementById("rs22").remove();
      document.getElementById("sl22img1").src="messaphotos/IMG_9066.JPG";
      document.getElementById("sl22img2").src="messaphotos/IMG_9065.JPG";
      document.getElementById("sl22img3").src="messaphotos/IMG_9084.JPG";
      document.getElementById("sl22img4").src="messaphotos/IMG_9085.JPG";
      document.getElementById("sl22img5").src="messaphotos/IMG_9091.JPG";
      document.getElementById("fs22img1").src="messaphotos/IMG_9086.JPG";
      document.getElementById("fs22img2").src="messaphotos/IMG_9092.JPG";
      document.getElementById("fs22img3").src="messaphotos/IMG_9094.JPG";
      document.getElementById("fs22img4").src="messaphotos/IMG_9095.JPG";
      document.getElementById("fs22img5").src="messaphotos/IMG_9081.JPG";
      document.getElementById("aw22").remove();
      document.getElementById("ny").remove();
      break;
    case "summer linen":
      document.getElementById("text1").innerHTML="Summer Linen";
      document.getElementById("sl22").remove();
      document.getElementById("aww22").remove();
      document.getElementById("fs22").remove();
      document.getElementById("ny21").remove();
      document.getElementById("btshowaw").remove();
      document.getElementById("btshowawrs").remove();
      document.getElementById("btshowawsl").remove();
      document.getElementById("btshowawfs").remove();
      document.getElementById("btshowawny").remove();
      document.getElementById("video1car").remove();
      document.getElementById("rs22").remove();
      document.getElementById("rs22img1").src="messaphotos/IMG_9102.JPG";
      document.getElementById("rs22img2").src="messaphotos/IMG_9104.JPG";
      document.getElementById("rs22img3").src="messaphotos/IMG_9108.JPG";
      document.getElementById("rs22img4").src="messaphotos/IMG_9109.JPG";
      document.getElementById("rs22img5").src="messaphotos/IMG_9111.JPG";
      document.getElementById("fs22img1").src="messaphotos/IMG_9113.JPG";
      document.getElementById("fs22img2").src="messaphotos/IMG_9115.JPG";
      document.getElementById("fs22img3").src="messaphotos/IMG_9117.JPG";
      document.getElementById("fs22img4").src="messaphotos/IMG_9119.JPG";
      document.getElementById("fs22img5").src="messaphotos/IMG_9121.JPG";
      document.getElementById("aw22").remove();
      break;
    case "feel spring":
      document.getElementById("text1").innerHTML="Feel Spring";
      document.getElementById("sl22").remove();
      document.getElementById("aww22").remove();
      document.getElementById("fs22").remove();
      document.getElementById("ny21").remove();
      document.getElementById("btshowaw").remove();
      document.getElementById("btshowawrs").remove();
      document.getElementById("btshowawsl").remove();
      document.getElementById("btshowawfs").remove();
      document.getElementById("btshowawny").remove();
      document.getElementById("video1car").remove();
      document.getElementById("rs22").remove();
      document.getElementById("rsimg1").src="messaphotos/IMG_9151.JPG";
      document.getElementById("rsimg2").src="messaphotos/IMG_9154.JPG";
      document.getElementById("rsimg3").src="messaphotos/IMG_9157.JPG";
      document.getElementById("rsimg4").src="messaphotos/IMG_9155.JPG";
      document.getElementById("rsimg5").src="messaphotos/IMG_9154.JPG";
      document.getElementById("sl22img1").src="messaphotos/IMG_9137.JPG";
      document.getElementById("sl22img2").src="messaphotos/IMG_9139.JPG";
      document.getElementById("sl22img3").src="messaphotos/IMG_9141.JPG";
      document.getElementById("sl22img4").src="messaphotos/IMG_9145.JPG";
      document.getElementById("sl22img5").src="messaphotos/IMG_9148.JPG";
      document.getElementById("aw22").remove();
      document.getElementById("ny").remove();
      break;
      case "ny21 drop":
        document.getElementById("text1").innerHTML="NY21 drop";
        document.getElementById("sl22").remove();
        document.getElementById("aww22").remove();
        document.getElementById("fs22").remove();
        document.getElementById("ny21").remove();
        document.getElementById("btshowaw").remove();
        document.getElementById("btshowawrs").remove();
        document.getElementById("btshowawsl").remove();
        document.getElementById("btshowawfs").remove();
        document.getElementById("btshowawny").remove();
        document.getElementById("video1car").src="messaphotos/IMG_9178.MP4"
        document.getElementById("rs22").remove();
        document.getElementById("rs").remove();
        document.getElementById("sl22img1").src="messaphotos/IMG_9167.JPG";
        document.getElementById("sl22img2").src="messaphotos/IMG_9169.JPG";
        document.getElementById("sl22img3").src="messaphotos/IMG_9172.JPG";
        document.getElementById("sl22img4").src="messaphotos/IMG_9182.JPG";
        document.getElementById("sl22img5").src="messaphotos/IMG_9183.JPG";
        document.getElementById("fs22img1").src="messaphotos/IMG_9177.JPG";
        document.getElementById("fs22img2").src="messaphotos/IMG_9180.JPG";
        document.getElementById("fs22img3").src="messaphotos/IMG_9181.JPG";
        document.getElementById("fs22img4").src="messaphotos/IMG_9174.JPG";
        document.getElementById("fs22img5").src="messaphotos/IMG_9176.JPG";
        document.getElementById("aw22").remove();
      break;
    }
  }
  function GoToHomePage(){
  window.location = 'messa.html';   
}
var fadeElements = document.getElementsByClassName('scrollFade');

function scrollFade() {
var viewportBottom = window.scrollY + window.innerHeight;

for (var index = 0; index < fadeElements.length; index++) {
  var element = fadeElements[index];
  var rect = element.getBoundingClientRect();

  var elementFourth = rect.height/4;
  var fadeInPoint = window.innerHeight - elementFourth;
  var fadeOutPoint = -(rect.height/2);

  if (rect.top <= fadeInPoint) {
    element.classList.add('scrollFade--visible');
    element.classList.add('scrollFade--animate');
    element.classList.remove('scrollFade--hidden');
  } else {
    element.classList.remove('scrollFade--visible');
    element.classList.add('scrollFade--hidden');
  }

  if (rect.top <= fadeOutPoint) {
    element.classList.remove('scrollFade--visible');
    element.classList.add('scrollFade--hidden');
  }
}
}

document.addEventListener('scroll', scrollFade);
window.addEventListener('resize', scrollFade);
document.addEventListener('DOMContentLoaded', function() {
  scrollFade();
});