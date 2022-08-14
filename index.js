// $(document).ready(function loopSvg() {
//     $("svg").beginElement()
// setInterval(loopSvg, 20)
// })

//Fade in greeting
$(document).ready(function(){
    $(".fade_on_load").animate({'opacity':'1'}, 3000)
})

//Back button appears upon scrolling
if ($('.back_to_top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop()
            if (scrollTop > scrollTrigger) {
                $('.back_to_top').addClass('show')
            } else {
                $('.back_to_top').removeClass('show')
            }
        }
    backToTop()
    $(window).on('scroll', function () {
        backToTop()
    })
}


//Back to top button
$('.back_to_top').on('click', function(e) {
    e.preventDefault()
    $('html,body').animate({
        scrollTop: 0
    }, 700)
})


//Nav bar links jump to section
$('.about_link').on('click', function(e) {
    e.preventDefault()
    $('html,body').animate({
        scrollTop: $(".parallax_scroll_about").offset().top
    }, 700)
})

$('.projects_link').on('click', function(e) {
    e.preventDefault()
    $('html,body').animate({
        scrollTop: $(".parallax_scroll_projects").offset().top
    }, 900)
})

$('.contact_link').on('click', function(e) {
    e.preventDefault()
    $('html,body').animate({
        scrollTop: $(".parallax_scroll_bottom").offset().top
    }, 1100)
})


//Parallax scrolling
$(window).scroll(function () {
        let bottom_of_element = $(".parallax_scroll_about").offset().top + $(".parallax_scroll_about").outerHeight()
        let bottom_of_window = $(window).scrollTop() + $(window).height()
        if ((bottom_of_window) > bottom_of_element) {
            $(".parallax_scroll_about").addClass('sticky')
        }
    })

$(window).scroll(function () {
    let bottom_of_element = $(".parallax_scroll_projects").offset().top + $(".parallax_scroll_projects").outerHeight()
    let bottom_of_window = $(window).scrollTop() + $(window).height()
    if ((bottom_of_window) > bottom_of_element) {
        $(".parallax_scroll_projects").addClass('sticky_projects')
    }
})

$(window).scroll(function () {
    let bottom_of_element = $(".parallax_scroll_bottom").offset().top + $(".parallax_scroll_bottom").outerHeight()
    let bottom_of_window = $(window).scrollTop() + $(window).height()
    if ((bottom_of_window) > bottom_of_element) {
        $(".parallax_scroll_bottom").addClass('bottom_sticky')
    }
})

////MODALS
//Food Delivered Modal
function readMoreFoodDeliveredModal(e) {
    const readMoreButton = document.getElementById("food_delivered")
    const fullDescription = document.getElementById("food_delivered_description")
    readMoreButton.addEventListener('click', e => {
        fullDescription.style.display= "block"
    })
}
readMoreFoodDeliveredModal()

function closeFoodDeliveredModal(e) {
    const closeButton = document.getElementById("close_food_delivered_desc_button")
    const fullDescription = document.getElementById("food_delivered_description")
    closeButton.addEventListener('click', e => {
        fullDescription.style.display= "none"
    })
}
closeFoodDeliveredModal()


//Penny Lane Modal
function readMorePennyLaneModal(e) {
    const readMoreButton = document.getElementById("penny_lane")
    const fullDescription = document.getElementById("penny_lane_description")
    readMoreButton.addEventListener('click', e => {
        fullDescription.style.display= "block"
    })
}
readMorePennyLaneModal()

function closePennyLaneModal(e) {
    const closeButton = document.getElementById("close_penny_desc_button")
    const fullDescription = document.getElementById("penny_lane_description")
    closeButton.addEventListener('click', e => {
        fullDescription.style.display= "none"
    })
}
closePennyLaneModal()

//Gopher Glory Modal
function readMoreGopherGloryModal(e) {
    const readMoreButton = document.getElementById("gopher_glory")
    const fullDescription = document.getElementById("gopher_glory_description")
    readMoreButton.addEventListener('click', e => {
        fullDescription.style.display= "block"
    })
}
readMoreGopherGloryModal()

function closeGopherGloryModal(e) {
    const closeButton = document.getElementById("close_gopher_desc_button")
    const fullDescription = document.getElementById("gopher_glory_description")
    closeButton.addEventListener('click', e => {
        fullDescription.style.display= "none"
    })
}
closeGopherGloryModal()


