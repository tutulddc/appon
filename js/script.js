
$('.banner_slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay:true,
});
// ------------banner part ends--------------
// ------------screenSlider start--------------
$('.screen-slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 575.98,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
  
    ]
});
// ------------screenSlider end--------------


// --------------venoBox start------------
new VenoBox({
    selector: '.my-video-links',
});
// --------------venoBox end------------



// --------------team slider start------------


$('.team-slider').slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',    
    // autoplay:true,
});

// --------------team slider end------------


// --------------feedback Slider start------------

  $('.top_slider').slick({
    arrows: false,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor:'.bottom_slider',
    fade:true
 });  

  $('.bottom_slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    arrows: false,
    asNavFor:'.top_slider',  
    centerMode: true,
    centerPadding:'0' , 

    responsive: [
        // {
        //     breakpoint: 1400,
        //     settings: {
        //         slidesToShow: 2,
        //         slidesToScroll: 1,
        //     }
        // },
        // {
        //     breakpoint: 991,
        //     settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1
        //     }
        // },
        {
            breakpoint: 575.98,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
  
    ]    
 });  
 
// --------------feedback Slider end------------


