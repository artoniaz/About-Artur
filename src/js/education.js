const animateEducation = function () {
    const scrollValue = $(this).scrollTop();
    const eduDivs = $(".education").children();

    if (scrollValue + screen.height > $(".edu:nth-child(1)").offset().top + $(".edu:nth-child(1)").outerHeight()) {
        $(".edu:nth-child(1)").addClass("eduActive");
    }
    if (scrollValue + screen.height > $(".edu:nth-child(2)").offset().top + $(".edu:nth-child(2)").outerHeight()) {
        $(".edu:nth-child(2)").addClass("eduActive");
    }
    if (scrollValue + screen.height > $(".edu:nth-child(3)").offset().top + $(".edu:nth-child(3)").outerHeight()) {
        $(".edu:nth-child(3)").addClass("eduActive");
    }
    if (scrollValue + screen.height > $(".edu:nth-child(4)").offset().top + $(".edu:nth-child(4)").outerHeight()) {
        $(".edu:nth-child(4)").addClass("eduActive");
    }
    if (scrollValue + screen.height > $(".edu:nth-child(5)").offset().top + $(".edu:nth-child(5)").outerHeight()) {
        $(".edu:nth-child(5)").addClass("eduActive");
    }
    if (scrollValue < 100) {
        eduDivs.removeClass("eduActive");
    }
};

$(document).on("scroll", animateEducation);

export {animateEducation};


