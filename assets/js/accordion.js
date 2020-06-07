

// SIDEBAR DROPDOWN MENU ACCORDION
jQuery(document).ready(function($){
    var panels = $(".item__dropdown").hide();
    
     $(".item__menu").click(function(){
         var $this = $(this);
         panels.slideUp();
         $this.next().slideDown();
     });
});


$(".item__menu").on("click", function(){
    $(".item__arrow").css({
        "transform" : "rotate(0deg)",
        "transition" : "all linear .3s",
    });
});