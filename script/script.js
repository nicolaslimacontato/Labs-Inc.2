// menu hamburguer
$("i").click(function () {
    $("ul").toggleClass("open")
})

//dropdown
$(function () {
    $('.navBar li').hover(
        function () {
            $('>ul.sub:not(:animated)', this).slideDown(500);
        },
        function () {
            $('>ul.sub', this).slideUp(300);
        }
    );
});

//
window.addEventListener("load", function () {
    let video = this.window.document.querySelector("#video")
    video.play();
    video.loop = true;
});

// carousel
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
})

// cards
if ($(window).width() < 769) {
    var swiper = new Swiper(".aboutInner", {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
    });
} else {
    var swiper = new Swiper(".aboutInner", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

}

//about
//reload
window.addEventListener('resize', function (event) {
    recarrega();
});

function recarrega() {
    document.location.reload();
};

// aos

AOS.init({
    duration: 1800,
});