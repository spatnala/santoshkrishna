$(function () {
    //CAROUSEL ITEM HEIGHT SETTINGS
    var sectionHeight = $(window).height() - $(".navbar-fixed-top").height();
    $("#myCarousel .item").height(sectionHeight);

    $('#myCarousel').carousel({
        pause: "false",
        interval: 6000
    }); //CAROUSEL END

    //ADDING SWIPE TO CAROUSEL.
    $("#myCarousel").on("swiperight", function () {
        $(this).carousel('prev');
    });
    $("#myCarousel").on("swipeleft", function () {
        $(this).carousel('next');
    });
    $(".carousel-control.right").on("click", function () {
        $("#myCarousel").carousel('prev');
    });
    $(".carousel-control.left").on("click", function () {
        $("#myCarousel").carousel('next');
    });
    //alert("enter")
    //ADDING PADDING TO CONTENT, HEIGHT FROM NAVBAR HEIGHT 
    var bodyPadding = $(".navbar-fixed-top").height();
    $(".navbar-fixed-top").next("div").css("padding-top", bodyPadding);

    //if ($(window).width() > 767) {
        var footerHt = $(".footer").height();
        $("body").css("margin-bottom", footerHt);
        //}

        $(".blockCaption").text(function (index, currentText) {
            return currentText.substr(0, 100) + "...";
        });

        $(".servicesContentWrapper > p").text(function (index, currentText) {
            return currentText.substr(0, 250) + ".";
        });
});           //DOCUMENT END


$(window).resize(function () {
    //CAROUSEL ITEM HEIGHT SETTINGS
    var sectionHeight = $(window).height() - $(".navbar-fixed-top").height();
    $("#myCarousel .item").height(sectionHeight);

    var footerHt = $(".footer").height();
    $("body").css("margin-bottom", footerHt);
});

$(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
        $(".navbar-fixed-top").addClass("navBarShadow");
    } else {
        $(".navbar-fixed-top").removeClass("navBarShadow");
    }
});