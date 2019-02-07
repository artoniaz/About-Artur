// użycie jQuery, ze względu na dostępne metody

const menu = $("#menu");
const menuBtn = $('#menu div:nth-child(1) i');
const menuUl = $("ul.menuList");
const headerMenuLis = $("header ul li");
const menuLis = $(".menuList li");
const footerLis = $("footer li");
const headerHeight = $("header").css("height").slice(0,3);
const titleHeight = $(".title").css("height").slice(0,2);

let sectionsIds = [...$("section")].map(el => el.id);

const showNavMenu = () => {
    if ($(document).scrollTop() > Number(headerHeight) + Number(titleHeight)) {
        menu.removeClass("hideMenu");
        menu.addClass("menuActive");
    } else if ($(document).scrollTop() < Number(headerHeight) + Number(titleHeight) && menu.hasClass("menuActive")) {
        menu.removeClass("menuActive");
        menu.addClass("hideMenu");
    } else {
        return;
    }
};

const showMenuOptions = () => {
    menuUl.toggleClass("menuListActive");
};

const hideMenuOptions = () => {
    menuUl.removeClass("menuListActive");
};

const scrollToSection = function () {
    let liClassName = $(this).find("a").attr("class");
    let sectionId = "#" + sectionsIds.filter(el => el == liClassName);

    $("body, html").animate({
        scrollTop: $(sectionId).offset().top - $("#menu").css("height").slice(0, 2)
    }, 1000);
};


menuBtn.on("click", showMenuOptions);
headerMenuLis.on("click", scrollToSection);
menuLis.on("click", scrollToSection);
menuLis.on("click", hideMenuOptions);
footerLis.on("click", scrollToSection);
$(document).on("scroll", showNavMenu);

export {showNavMenu, showMenuOptions, hideMenuOptions, scrollToSection};

