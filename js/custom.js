$(function () {

  $(window).scroll(function(){
    var scrolling = $(this).scrollTop()
     if(scrolling > 50){
      $(".navbar").addClass("nav-bg")
     }else{
      $(".navbar").removeClass("nav-bg")
     }
  
     if(scrolling > 30){
      $(".back-to-top").fadeIn(500)
     }else{
      $(".back-to-top").fadeOut(500)
     }
  })

  // bannerslide
  var myCarousel = document.querySelector("#carouselExample");
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 4000,
    wrap: true,
  });

  // bannerslide

  // gallery
  document.querySelectorAll(".quicktech-gal-img img").forEach((image) => {
    image.addEventListener("click", function () {
      const imgSrc = this.getAttribute("data-bs-img-src");
      document.getElementById("modalImage").src = imgSrc;
    });
  });
  // gallery

  // gallery for Page 2
document.querySelectorAll(".quicktech-gal-img img").forEach((image) => {
  image.addEventListener("click", function () {
    const imgSrc = this.getAttribute("data-bs-img-src");
    document.getElementById("modalImagePage2").src = imgSrc;
  });
});

});
