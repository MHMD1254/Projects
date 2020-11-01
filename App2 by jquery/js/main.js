$(document).ready(function(){

    // create header fix

    $(".header").height($(window).height())

    $(window).resize(function(){
        $(".header").height($(window).height())

    })

    

    // change background color

    $(window).scroll(function(){
        if($(window).scrollTop()>= 140){
            $('nav').css({
                'backgroundColor':'#051024',
                'padding':'10px 0px',
                "height":'70px',
                "box-shadow":'8px 0 5px rgb(49, 47, 47)'
            })
        }
        else
        {
            $('nav').css({
                'backgroundColor':'transparent',
                'padding':'25px 0px',
                "box-shadow":'none'
            })

        }
    })

    if($(window).scrollTop()>= 140){
        $('nav').css({
            'backgroundColor':'#051024',
            'padding':'10px 0px',
            "height":'70px',
            "box-shadow":'8px 0 5px rgb(49, 47, 47)'
        })
    }
    else
    {
        $('nav').css({
            'backgroundColor':'transparent',
            'padding':'25px 0px',
            "box-shadow":'none'
        })

    }

    // smooth scroll

    $('nav li a').on("click",function(){

        $("html,body").animate({

            scrollTop: $("#" + $(this).data("scroll")).offset().top - 80 
        },1000)


    })

    // add active class

    $('nav li a').on('click', function(){
        
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');

    })

    

    $(window).scroll(function(){
        $("section").each(function(){
            
           if($(window).scrollTop() + 100 >= $(this).offset().top){
               var secID = $(this).attr('id')
               $('nav li a').removeClass("active")
               $('nav li a[data-scroll = "'+secID +'"]').addClass('active')
           } 
        })
        // button up
        if ($(window).scrollTop()>= 1000)
        {
            $(".up").fadeIn(1000)

        }
        else
        {
            $(".up").fadeOut(1000)
        }
    })
    
    // click on button UP 
    $('.up').on('click',function(){

        $("html,body").animate({
            scrollTop:0
        },600)
    })
    // nice scroll
    $(function() {  
        $("body").niceScroll({
            cursorcolor: "#ff275E",
            cursorwidth: "10px",
            cursorborder:"none",
            zindex: "10000000"
        });
    });

    // swiper
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 6,
        spaceBetween: 0,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    

})