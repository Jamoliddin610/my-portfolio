$(document).ready(function(){
    $('.partner__row').slick({
        arrows:false,
        slidesToShow:4,
        infinite: true,
            speed: 500,
            arrows: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false,
                    }
                    },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: false,
                        centerMode: true,
                        arrows: false,
                    }
    },

                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                        centerMode: true,
                        arrows: false,
                    }
    }
        ] 
    });
});
