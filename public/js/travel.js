$(document).ready(function () {
    $(".promotions").addClass("show");
    $(".promotions").on("click", function () {
        if ($(this).hasClass("expanded")) {
            $(".hidden-promotion").removeClass("show");
            $(this).animate({
                height: "-=200",
                width: "-=300",
                marginLeft: "+=200",
                opacity: 1
            }, 500, "linear");
            $(this).removeClass("expanded");
        } else {
            $(this).animate({
                height: "+=200",
                width: "+=300",
                marginLeft: "-=200",
                opacity: 0.9
            }, 500, "linear");
            $(".hidden-promotion").addClass("show").slideToggle("slow");
            $(this).addClass("expanded");
        }

    });


    $(".travel-box.type-cruise").on("click", function () {
        $(".card")
            .filter(function () {
                return $(this).hasClass("type-cruise");
            })
            .toggle();
            $(".box.type-cruise").toggleClass("box-dark");
    });
    $(".travel-box.type-world").on("click", function () {
        $(".card")
            .filter(function () {
                return $(this).hasClass("type-world");
            })
            .toggle();
            $(".box.type-world").toggleClass("box-dark");
    });
    $(".travel-box.type-road").on("click", function () {
        $(".card")
            .filter(function () {
                return $(this).hasClass("type-road");
            })
            .toggle();
            $(".box.type-road").toggleClass("box-dark");
    });
    $(".travel-box.type-flight").on("click", function () {
        $(".card")
            .filter(function () {
                return $(this).hasClass("type-flight");
            })
            .toggle();
            $(".box.type-flight").toggleClass("box-dark");
    });
});