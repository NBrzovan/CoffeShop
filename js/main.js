$(window).on("scroll", function(){
    if($(window).scrollTop()>650){
        $(".header").addClass('active');
    } else {
        $(".header").removeClass("active");
    }
});

