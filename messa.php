<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="stylemessa.css">
    <title>MESSA</title>
</head>
<body>
    <div class="heading" id="heading">
        <div class="logo" id="logo"><img src="C:\Users\asus\Web\output-onlinepngtools.png" alt="" class="imgl" id="imgl"></div>
        <div id="myLinks">
            <a href="" class="headt">autumn/winter22</a>
            <a href="" class="headt">resort collection</a>
            <a href="" class="headt">summer linen</a>
            <a href="" class="headt">feel spring</a>
            <a href="" class="headt">ny21 drop</a>
        </div>
        <div class="togglehead"></div><img src="C:\Users\asus\Web\On.svg" alt="" onclick="headchange()" class="icon"></div>
    </div>
    <div class="video-container" id="videocon">
        <video autoplay muted loop class="video1car" id="video1car">
            <source src="C:\Users\asus\Web\IMG_9062.MP4" type="video/mp4" />
        </video>
        <div class="cap1" id="cap1">
          <h2></h2>
        </div>
    </div>
    <div class="lastcol" id="lastcol">
        <h1 class="text1" id="text1">Latest collections</h1>
    </div>
    <section class="carousel" aria-label="carousel" Tabindex="0">
        <div><div class="slides">
            <div class="slides-item slide-1" id="slide-1" aria-label="slide 1 of 6" tabindex="0"><img src="C:\Users\asus\Web\messaaw22.jpg" alt="" class="imgcarousel"></div> 
            <div class="slides-item slide-2" id="slide-2" aria-label="slide 2 of 6" tabindex="0"><img src="C:\Users\asus\Web\IMG_9047.JPG" alt="" class="imgcarousel"></div> 
            <div class="slides-item slide-3" id="slide-3" aria-label="slide 3 of 6" tabindex="0"><img src="C:\Users\asus\Web\IMG_9051.JPG" alt="" class="imgcarousel"></div> 
            <div class="slides-item slide-4" id="slide-4" aria-label="slide 4 of 6" tabindex="0"><img src="C:\Users\asus\Web\IMG_9054.JPG" alt="" class="imgcarousel"></div> 
            <div class="slides-item slide-5" id="slide-5" aria-label="slide 5 of 6" tabindex="0"><img src="C:\Users\asus\Web\IMG_9055.JPG" alt="" class="imgcarousel"></div>
            <div class="slides-item slide-5" id="slide-6" aria-label="slide 6 of 6" tabindex="0"><img src="C:\Users\asus\Web\IMG_9044.JPG" alt="" class="imgcarousel"></div>        
        </div>  
        <div class="carousel__nav">
            <a class="slider-nav" href="#slide-1" aria-label="Go to slide 1"> </a>
            <a class="slider-nav" href="#slide-2" aria-label="Go to slide 2"> </a>
            <a class="slider-nav" href="#slide-3" aria-label="Go to slide 3"> </a>
            <a class="slider-nav" href="#slide-4" aria-label="Go to slide 4"> </a>
            <a class="slider-nav" href="#slide-5" aria-label="Go to slide 5"> </a>
            <a class="slider-nav" href="#slide-6" aria-label="Go to slide 5"> </a>
          </div></div>
          
    </section>
    <section class="aw22" id="aw22">
        <h1 class="aww22" id="aww22">Autumn/Winter22</h1>
        <div class="aw22image" id="aw22image">
            <img src="C:\Users\asus\Web\IMG_9044.JPG" alt="" id="img1">
            <img src="C:\Users\asus\Web\IMG_9047.JPG" alt="" id="img2">
            <img src="C:\Users\asus\Web\IMG_9051.JPG" alt="" id="img3">
            <img src="C:\Users\asus\Web\IMG_9054.JPG" alt="" id="img4">
            <img src="C:\Users\asus\Web\IMG_9055.JPG" alt="" id="img5">
        </div>
        <button class="btshowaw" id="btshowaw" onclick="changeaw22()">Show collection</button>
    </section>
    <section class="aw22" id="rs">
        <h1 class="aww22" id="rs22">Resort Collection</h1>
        <div class="aw22image" id="rs22image">
            <img src="C:\Users\asus\Web\IMG_9093.JPG" alt="" id="rsimg1">
            <img src="C:\Users\asus\Web\IMG_9087.JPG" alt="" id="rsimg2">
            <img src="C:\Users\asus\Web\IMG_9083.JPG" alt="" id="rsimg3">
            <img src="C:\Users\asus\Web\IMG_9088.JPG" alt="" id="rsimg4">
            <img src="C:\Users\asus\Web\IMG_9089.JPG" alt="" id="rsimg5">
        </div>
        <button class="btshowaw" id="btshowawrs">Show collection</button>
    </section>
    <section class="aw22" id="sl">
        <h1 class="aww22" id="sl22">Summer Linen</h1>
        <div class="aw22image" id="sl22image">
            <img src="C:\Users\asus\Web\IMG_9103.JPG" alt="" id="sl22img1">
            <img src="C:\Users\asus\Web\IMG_9106.JPG" alt="" id="sl22img2">
            <img src="C:\Users\asus\Web\IMG_9115.JPG" alt="" id="sl22img3">
            <img src="C:\Users\asus\Web\IMG_9107.JPG" alt="" id="sl22img4">
            <img src="C:\Users\asus\Web\IMG_9110.JPG" alt="" id="sl22img5">
        </div>
        <button class="btshowaw" id="btshowawsl">Show collection</button>
    </section>
    <section class="aw22" id="fs">
        <h1 class="aww22" id="fs22">Feel Spring</h1>
        <div class="aw22image" id="fs22image">
            <img src="C:\Users\asus\Web\IMG_9139.JPG" alt="" id="fs22img1">
            <img src="C:\Users\asus\Web\IMG_9152.JPG" alt="" id="fs22img2">
            <img src="C:\Users\asus\Web\IMG_9156.JPG" alt="" id="fs22img3">
            <img src="C:\Users\asus\Web\IMG_9141.JPG" alt="" id="fs22img4">
            <img src="C:\Users\asus\Web\IMG_9144.JPG" alt="" id="fs22img5">
        </div>
        <button class="btshowaw" id="btshowawfs">Show collection</button>
    </section>
    <section class="aw22" id="ny">
        <h1 class="aww22" id="ny21">NY21 drop</h1>
        <div class="aw22image" id="ny21image">
            <img src="C:\Users\asus\Web\IMG_9171.JPG" alt="" id="ny21img1">
            <img src="C:\Users\asus\Web\IMG_9175.JPG" alt="" id="ny21img2">
            <img src="C:\Users\asus\Web\IMG_9179.JPG" alt="" id="ny21img3">
            <img src="C:\Users\asus\Web\IMG_9184.JPG" alt="" id="ny21img4">
            <img src="C:\Users\asus\Web\IMG_9173.JPG" alt="" id="ny21img5">
        </div>
        <button class="btshowaw" id="btshowawny">Show collection</button>
    </section>
    <section class="about">
        <h1 class="text1">Contacts</h1>
        <div class="ab">
            <div class="each">
                <a href="" class="icons"><img src="C:\Users\asus\Web\phone-62-48.png" alt="" class="icons"></a>
                <a href="" class="phone">+7 701 188 85 05</a>
            </div>
        </div>
        <div class="ab">
            <div class="each">
                <a href="https://api.whatsapp.com/send/?phone=77011888505&text&type=phone_number&app_absent=0" class="icons"><img src="C:\Users\asus\Web\whatsapp-48.png" alt="" class="icons"></a>
                <a href="https://api.whatsapp.com/send/?phone=77011888505&text&type=phone_number&app_absent=0" class="phone">+7 701 188 85 05</a>
            </div>
        </div>
        <div class="ab">
            <div class="each">
                <a href="https://www.instagram.com/messa_int/?hl=en" class="icons"><img src="C:\Users\asus\Web\whatsapp-48.png" alt="" class="icons"></a>
                <a href="https://www.instagram.com/messa_int/?hl=en" class="phone">@messa_int</a>
            </div>
        </div>
        <div class="ab">
            <div class="each">
                <a href="https://maps.apple.com/?ll=43.250660,76.888140&q=Al%20Farabi%20avenue%20140a/1,Villa%20Boutiques%20and%20Restaurants,A6%20Almaty,%20Kazakhstan&_ext=EiQpKzV7oBWgRUAxP5EnSdc4U0A5KzV7oBWgRUBBP5EnSdc4U0A%3D&t=m" class="icons"><img src="C:\Users\asus\Web\map-5-48.png" alt="" class="icons"></a>
                <a href="https://maps.apple.com/?ll=43.250660,76.888140&q=Al%20Farabi%20avenue%20140a/1,Villa%20Boutiques%20and%20Restaurants,A6%20Almaty,%20Kazakhstan&_ext=EiQpKzV7oBWgRUAxP5EnSdc4U0A5KzV7oBWgRUBBP5EnSdc4U0A%3D&t=m" class="phone">Al Farabi avenue 140a/1,Villa Boutiques and Restaurants,A6 Almaty, Kazakhstan</a>
            </div>
        </div>
    </section>    
    <script src="jsmessa.js"></script>
</body>
</html>