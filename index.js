// Hamburger menu open and close
$(".hamburger_icon").on("click", function(e) {
    e.preventDefault()
    const navBarListContainer =  $(".nav_bar_list_container")
    if (!navBarListContainer.hasClass("hide")) {
        navBarListContainer.addClass("hide")
    } else {
        navBarListContainer.removeClass("hide")
    }
})


//Nav bar links scroll smoothly to section
function functionalNavBarLinks (link, parallax, time) {
    $(link).on("click", function(e) {
        e.preventDefault()
        $("html, body").animate({
            scrollTop: $(parallax).offset().top
        }, time)
    })
}

functionalNavBarLinks(".about_link", ".parallax_scroll_about", 700)
functionalNavBarLinks(".projects_link", ".parallax_scroll_projects", 900)
functionalNavBarLinks(".contact_link", ".parallax_scroll_bottom", 1500)


//Puts a 10 second delay on the SVG
function loopSvg() {
    const svgImages = $(".top_circle_image, .top_left_circle_image, .bottom_left_circle_image, .bottom_circle_image, .top_right_circle_image, .bottom_right_circle_image, .main_circle_image, .bottom_polygon, .top_polygon, .polygon_frame, .polygon_frame_reverse")
    if (!svgImages.hasClass("rotate_interval")) {
        svgImages.addClass("rotate_interval")
    } else {
        svgImages.removeClass("rotate_interval")
    }
}
setInterval(loopSvg, 10000)


//Fade in greeting
$(".fade_on_load").animate({"opacity":"1"}, 3000)


//Parallax scrolling
function parallaxScrolling(element, sticky) {
    $(window).scroll(function() {
        let bottomOfElement = $(element).offset().top + $(element).outerHeight()
        let bottomOfWindow = $(window).scrollTop() + $(window).height()
        if(bottomOfWindow > bottomOfElement) {
            $(element).addClass(sticky)
        }
    })
}

parallaxScrolling(".parallax_scroll_about", "sticky_about")
parallaxScrolling(".parallax_scroll_projects", "sticky_projects")
parallaxScrolling(".parallax_scroll_bottom", "sticky_bottom")


////DESCRIPTION MODAL
//Open Modal
function openDescriptionModal(readMore, description) {
    const readMoreButton = document.getElementById(readMore)
    const fullDescription = document.getElementById(description)
    readMoreButton.addEventListener("click", e => {
        fullDescription.style.display = "block"
    })
}

openDescriptionModal("food_delivered", "food_delivered_description")
openDescriptionModal("penny_lane", "penny_lane_description")
openDescriptionModal("gopher_glory", "gopher_glory_description")

//Close Modal
function closeDescriptionModal(closeButton, description) {
    const closeModalButton = document.getElementById(closeButton)
    const fullDescription = document.getElementById(description)
    closeModalButton.addEventListener("click", e => {
        fullDescription.style.display = "none"
    })
}

closeDescriptionModal("close_food_delivered_desc_button", "food_delivered_description")
closeDescriptionModal("close_penny_desc_button", "penny_lane_description")
closeDescriptionModal("close_gopher_desc_button", "gopher_glory_description")


////BACK-TO-TOP BUTTON
//Back-to-top-button appears upon scrolling
const backToTopButton = $(".back_to_top")
if (backToTopButton.length) {
    let scrollTrigger = 100, // px
        backToTop = function () {
            let scrollTop = $(window).scrollTop()
            if (scrollTop > scrollTrigger) {
                backToTopButton.addClass("show")
            } else {
                backToTopButton.removeClass("show")
            }
        }
    backToTop()
    $(window).on("scroll", function () {
        backToTop()
    })
}

//Adds functionality to Back-to-top-button
backToTopButton.on("click", function(e) {
    e.preventDefault()
    $("html, body").animate({
        scrollTop: 0
    }, 700)
})


