
  $('.cl-full').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    nextArrow: '<button class="next-arrow">  <img src="./images/virustotal-icon.png" alt="slider-arrow-right"> </button>',
    prevArrow: '<button class="back-arrow"><img src="./images/left-chevron.png" alt="slider-arrow-left"></button>',
    responsive: [

      {
       breakpoint: 992,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
      },
     {
       breakpoint: 525,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     }
   
     ]
     
     });

  $('.outer').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    nextArrow: '<button class="next-arrow">  <img src="./images/next.png" alt="slider-arrow-right"> </button>',
    prevArrow: '<button class="back-arrow"><img src="./images/next.png" alt="slider-arrow-left"></button>',
    responsive: [

      {
       breakpoint: 992,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
      },
     {
       breakpoint: 525,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     }
   
     ]
     
     });
 