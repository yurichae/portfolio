$(window).load(function () {
    intro();
    setTimeout(function () {
        $(".loading").fadeOut(1000);
        $("body").off("scroll touchmove mousewheel");
    }, 3000);
}); //loading
$(function () {
    $(".btn,#gnb ul li a").click(function () {
        $(".wrap").toggleClass("open");
    }); //Toggle btn
    $("#topBtn").click(function () {
        $("html, body").animate(
            {
                scrollTop: 0
            },
            400
        ); //topBtn
    });
    $(".glitch").mouseover(function () {
        $(".glitch,.page1").addClass("invert");
    });
    $(".glitch").mouseleave(function () {
        $(".glitch,.page1").removeClass("invert");
    });
});
function intro() {
    $("body").on("scroll touchmove mousewheel", function (event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    });
}
