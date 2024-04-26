$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,

    responsive: {
        0: {
            items: 1
        },

        520: {
            items: 2
        },
        768: {
            items: 3
        },
        1160: {
            items: 4
        }
    }
})

$('.owl-carousel3').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,

    responsive: {
        0: {
            items: 1
        },


        768: {
            items: 3
        },
        1160: {
            items: 4
        }
    }
})
window.onscroll = function () { myFunction() };
function myFunction() {
    if (document.documentElement.scrollTop > 100) {
        document.getElementById("navbar-con").style.position = "fixed"
    } else {
        document.getElementById("navbar-con").style.position = "static"
    }
}