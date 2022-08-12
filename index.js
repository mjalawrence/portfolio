$(document).ready(function loopSvg() {
    $("svg").beginElement()
setInterval(loopSvg, 20)
})


$(document).ready(function(){
    $(".fade_on_load").animate({'opacity':'1'}, 3000)
})






$(document).ready(function() {
    $(window).scroll(function () {
        var bottom_of_element = $(".parallax_scroll_about").offset().top + $(".parallax_scroll_about").outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if ((bottom_of_window) > bottom_of_element - 500) {
            $(".parallax_scroll_about").attr({"class":"about_container parallax_scroll_about sticky"})
        }
    })
})

$(document).ready(function() {
    $(window).scroll(function () {
        var bottom_of_element = $(".parallax_scroll_projects").offset().top + $(".parallax_scroll_projects").outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if ((bottom_of_window) > bottom_of_element - 100) {
            $(".parallax_scroll_projects").attr({"class":"project_container_stripe parallax_scroll-projects sticky_projects"})
            console.log('jerro')
        }
    })
})

$(document).ready(function() {
    $(window).scroll(function () {
        var bottom_of_element = $(".parallax_scroll_bottom").offset().top + $(".parallax_scroll_bottom").outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if ((bottom_of_window) > bottom_of_element - 400) {
            $(".parallax_scroll_bottom").attr({"class":"bottom_sticky parallax_scroll_bottom"})
        }
    })
})





// $(document).ready(function() {
//
//         $('.fadein-scroll').each(function(i) {
//             var bottom_of_element = $(this).offset().top + $(this).outerHeight();
//             var bottom_of_window = $(window).scrollTop() + $(window).height();
//             if ((bottom_of_window + 450) > bottom_of_element) {
//                 $(this).animate({'opacity': '1','bottom': '0'}, 1000);
//             }
//         });
//     });
// })