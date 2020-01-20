$('.cl-full').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    dots: true,
    nextArrow: '<button class="next-arrow">  <img src="./images/virustotal-icon.png" alt="slider-arrow-right"> </button>',
    prevArrow: '<button class="back-arrow"><img src="./images/left-chevron.png" alt="slider-arrow-left"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });




  $('.outer').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    speed: 300,
    dots: true,
    nextArrow: '<button class="next-arrow">  <img src="./images/next.png" alt="slider-arrow-right"> </button>',
    prevArrow: '<button class="back-arrow"><img src="./images/next.png" alt="slider-arrow-left"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });