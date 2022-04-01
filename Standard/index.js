
window.addEventListener('load', function () {
    var percent = [10, 50, 20, 50, 100, 20]
    var content = ["HTML", "CSS", "Javascript", "SQL", "MongoDB", "React"]
    $(window).scroll(function () {
        var distance = $(window).scrollTop();
        $('.page-section').each(function (i) {
            if ($(this).position().top
                <= distance + 250) {

                $('.navbar-nav a.active')
                    .removeClass('active');

                $('.navbar-nav a').eq(i)
                    .addClass('active');}});
    }).scroll();for (var i = 1; i < 7; i++) {
        $(".progress:nth-child(" + i + ") .progress-bar").animate({
            width: percent[i - 1] + "%",
        }, 2500);
        $(".progress:nth-child(" + i + ") .progress-bar").text(content[i - 1]);
    }
})