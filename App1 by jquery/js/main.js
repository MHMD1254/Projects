$(document).ready(function(){

    $('.header').height($(window).height());

    $(window).resize(function(){
        $('.header').height($(window).height());

    })

   

    $(window).scroll(function(){
        if($(window).scrollTop()>= 150){
            $('nav').css({
                'backgroundColor':'#0E184D',
                "height":"95px",
                
                
                "box-shadow":'8px 0 5px rgb(49, 47, 47)'
            })
        }
        else
        {
            $('nav').css({
                'backgroundColor':'transparent',
                "box-shadow":'none'
            })

        }
    })

    if($(window).scrollTop()>= 150){
        $('nav').css({
            'backgroundColor':'#0E184D',
            "height":"95px",
            "margin":"0",
            
            "box-shadow":'8px 0 5px rgb(49, 47, 47)'
        })
    }
    else
    {
        $('nav').css({
            'backgroundColor':'transparent',
            "box-shadow":'none'
        })

    }

    // venobox 

    $('.venobox').venobox(); 

    // owl carousal

    $('.owl-carousel').owlCarousel({
        loop:true,
        dots:true,
        center:true,
        autoplay:true,
        
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    // F.A.Q
    $(".faq .content .list ul i").on('click',function(){

       $(this).parent().parent().find('p').slideToggle(300);
       if($(this).hasClass('fa-plus-circle')){
           $(this).attr('class',"fa fa-minus-circle")
           $(this).css({
               'color':"#F8234A"
           })
           $(this).siblings().css('color','#F8234A')
       }
       else
       {
        $(this).attr('class','fa fa-plus-circle')
        $(this).css({
            'color':"#000"
        })
        $(this).siblings().css('color','#000')
         }
    })

    // smooth scroll

    $('nav li a').on('click',function(){
        $('html,body').animate({
            scrollTop:$("#" + $(this).data('scroll')).offset().top - 110
        },1000)
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
        },1000)
    })

    // AOS
  
    $(function(){
        
        AOS.init();

        window.addEventListener('load',AOS.refresh)
    })


  
})