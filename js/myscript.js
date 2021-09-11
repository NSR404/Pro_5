$(function(){
    $(window).scroll(function(){
        var windowscroll = $(this).scrollTop()
        if(windowscroll > 500){
                $(".btn_direction").fadeIn();
        }
        else{
            $(".btn_direction").fadeOut();
        }
    })
    $(".btn_direction").on('click',function(){
     $("html").animate({
         scrollTop : 0
     },1000);
    })

})