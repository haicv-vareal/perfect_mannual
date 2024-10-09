var useful_interval = setInterval(findUseful, 500);

function findUseful() {
  if($(".is-home__useful ul").length) {
    clearInterval(useful_interval);
    $('.is-home__useful ul').slick({
      autoplay: true,
      dots: true,
      autoplaySpeed: 4000,
      swipeToSlide: true,
      slidesToShow: 1,
      arrows: true,
      centerMode: true, 
      centerPadding: '26vw', 
      focusOnSelect: true,
      prevArrow: '<div class="slide-arrow prev-arrow"><img src="./assets/img/common/ico-arrow-left.png"/></div>',
      nextArrow: '<div class="slide-arrow next-arrow"><img src="./assets/img/common/ico-arrow-right.png"/></div>',
      responsive: [{
    
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          infinite: true,
          centerMode: true,
          centerPadding: '11vw'
        },
    
      }]
    });
  }
}

var message_interval = setInterval(findMessage, 500);

function findMessage() {
  if($(".is-home__message ul").length) {
    clearInterval(message_interval);
    $('.is-home__message ul').slick({
      autoplay: true,
      dots: false,
      autoplaySpeed: 4000,
      swipeToSlide: true,
      slidesToShow: 1,
      arrows: true,
      centerMode: true, 
      centerPadding: '14vw', 
      focusOnSelect: true,
      prevArrow: '<div class="slide-arrow prev-arrow"><img src="./assets/img/common/ico-arrow-left.png"/></div>',
      nextArrow: '<div class="slide-arrow next-arrow"><img src="./assets/img/common/ico-arrow-right.png"/></div>',
      responsive: [{
    
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          infinite: true,
          centerMode: true,
          centerPadding: '8vw'
        },
        
      }]
    })
  }
}

var present_interval = setInterval(findPresent, 500);

function findPresent() {
  if($(".is-home__present ul").length) {
    clearInterval(present_interval);
    $('.is-home__present ul').slick({
      autoplay: true,
      dots: false,
      autoplaySpeed: 4000,
      swipeToSlide: true,
      slidesToShow: 1,
      arrows: true,
      centerMode: true, 
      centerPadding: '14vw', 
      focusOnSelect: true,
      prevArrow: '<div class="slide-arrow prev-arrow"><img src="./assets/img/common/ico-arrow-left.png"/></div>',
      nextArrow: '<div class="slide-arrow next-arrow"><img src="./assets/img/common/ico-arrow-right.png"/></div>',
      responsive: [{
    
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          infinite: true,
          centerMode: true,
          centerPadding: '8vw'
        },
        
      }]
    })
  }
}