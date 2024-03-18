window.addEventListener("load", function(){
    let swiper=new Swiper(".mySwiper", {
        slidesPerView: 4,
        // spaceBetween: 30,
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
            750:{
                slidesPerView: 2,
            },
            1300:{
                slidesPerView: 3,
            },
        }
        
        });
})
