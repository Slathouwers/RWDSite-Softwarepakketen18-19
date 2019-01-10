
$(document).ready(function () {
    $(".promotions").addClass("show");
    $(".promotions").on("click", function(){
        if($(this).hasClass("expanded")){
            $(".hidden-promotion").removeClass("show");
            $(this).animate({
                height: "-=200",
                width: "-=300",
                marginLeft: "+=200",
                opacity: 1
              }, 500, "linear");
              $(this).removeClass("expanded");
        }else{
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
});