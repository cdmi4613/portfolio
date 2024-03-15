window.addEventListener("load", function(){
    let swiper=new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        // loop: true,
        // loopedSlides: 1,
        pagination: { 
            el: ".swiper-pagination",
            type: "fraction",
        },
        
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
         hide:false
        },
        
        navigation: {
        nextEl: ".swiper .controller ul li a.next",
        prevEl: ".swiper .controller ul li a.prev",
        },
        
        // autoplay: {
        // delay: 2000,
        //    },
        breakpoints: { 
            100:{
                slidesPerView: 1,
            },
            500:{
                slidesPerView: 1,
            },
            700:{
                slidesPerView: 2,
                spaceBetween: 20,
            },
            850:{
                slidesPerView: 3,
                spaceBetween: 30,
            },
            
            1170:{
                slidesPerView: 3,
            },
        }
        
        });
})
