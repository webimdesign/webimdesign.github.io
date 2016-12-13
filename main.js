$(document).ready(function(){

//========================================================//
//var i=1;
//click si scroll la div

/* Delete the comm to see if the js works 
if ($(window).width() < 960) {
   alert('Less than 960');
}
else {
   alert('More than 960');
}
*/
//
    $('.about').click(function(){
        $('html, body').animate({scrollTop:$('.infos').position().top},900,'swing');
        if($(window).width() < 800){
          $('li.menu-li').css("display","inline");
          $('li.menu-li').css("margin-top","0px");
          $('ul li a').css("line-height","80px");
          $('.link').css({
            display :'none',
            transition :'all 1s',
          });

          i=1;
        }
        return false;

    });

    $('.worky').click(function(){
        $('html, body').animate({scrollTop:$('.mywork').position().top},1000,'swing');
        if($(window).width() < 800){
          $('li.menu-li').css("display","inline");
          $('li.menu-li').css("margin-top","0px");
          $('ul li a').css("line-height","80px");
          $('.link').css({
            display :'none',
            transition :'all 1s',
          });

          i=1;
        }
        return false;

    });

    $('.why').click(function(){
        $('html,body').animate({scrollTop:$('.whyMe').position().top},1400,'swing');
        if($(window).width() < 800){
          $('li.menu-li').css("display","inline");
          $('li.menu-li').css("margin-top","0px");
          $('ul li a').css("line-height","80px");
          $('.link').css({
            display :'none',
            transition :'all 1s',
          });

          i=1;
        }
        return false;
    });

    $('.contact').click(function(){
        $('html,body').animate({scrollTop:$('.contactMe').position().top},1800,'swing');
        if($(window).width() < 800){
          $('li.menu-li').css("display","inline");
          $('li.menu-li').css("margin-top","0px");
          $('ul li a').css("line-height","80px");
          $('.link').css({
            display :'none',
            transition :'all 1s',
          });

          i=1;
        }
        return false;
    });
    $('.scrollUp').click(function(){
        $('html, body').animate({scrollTop:$('body').position().top},2000,'swing');
      });






$(window).scroll(function(){
//if it's scrolling more than a value it will apear another nav
   if($(this).scrollTop() > 300){
     $('.fade').fadeOut(1000);
     $('.fade-btn').fadeOut(700);
   }
   if($(this).scrollTop() > 550){
     //code

     $('.scrollUp').fadeIn(1000);
   }
   if($(this).scrollTop() > 700){
     $('.nav-fixed').fadeIn(1000);
   }
   if($(this).scrollTop()===0){
     $('.nav-fixed').fadeOut(600);
     $('.scrollUp').fadeOut(1000);
     $('.fade').fadeIn(800);
     $('.fade-btn').fadeIn(1000);
   }
   if($(this).scrollTop()>=$('.home').position().top){
     $('.home').addClass('link-border');

   }
   if($(this).scrollTop()>=$('.infos').position().top){
         $('.home').removeClass('link-border');
         $('.about').addClass('link-border');
     }else if($(this).scrollTop()<$('.infos').position().top){
       $('.about').removeClass('link-border');
     }

   if($(this).scrollTop()>=$('.mywork').position().top){
      $('.about').removeClass('link-border');
     $('.worky').addClass('link-border');
     //$('.nav-fixed').css("background-color","#ab8455");
   }else if($(this).scrollTop()<$('.mywork').position().top){
     $('.worky').removeClass('link-border');
   }
   //the container fadeInLeft animation with animate.css :)
   if($(this).scrollTop()>=$('.mywork').position().top - 50){
     $('.content').css("display","block");
     $('.content').addClass('bounceIn animated');
   }

   if($(this).scrollTop()>=$('.whyMe').position().top - 50){
      $('.worky').removeClass('link-border');
     $('.why').addClass('link-border');
   }else if($(this).scrollTop()<$('.whyMe').position().top){
     $('.why').removeClass('link-border');
   }

   if($(this).scrollTop()>=$('.contactMe').position().top - 50){
      $('.why').removeClass('link-border');
     $('.contact').addClass('link-border');
     $('.icon').fadeIn(800);
   }else if($(this).scrollTop()<$('.contactMe').position().top){
     $('.contact').removeClass('link-border');
   }
   if($(this).scrollTop()>=$('.footer').position().top - 900){
     $('._required').addClass('bounce animated');
   }
   if($(this).scrollTop()>=$('.footer').position().top - 650){
     $('.linie2').css("width","90%");
     $('.scrollUp').addClass("fadeInRight animated");

   }

});
//---------another function  baased on window.scrollTop

  $('.whyMe-unit').hover(function(){
    $(this).addClass('bounceIn animated');
  });


//========CLICK TO MENU TO SHOW THE NAV CONTENT ==============
var i=1;
if($(window).width() > 800){


  $('.menu-li').click(function(){
    if(i===0){
      $('ul li a').css("line-height","80px");
      $('.link').css({
        display :'none',
        transition :'all 1s',
      });

      i=1;
    }

    else{
      $('ul li a').css("line-height","80px");
      $('.link').css({
        display :'inline',
        transition : 'all 1s',
      });
      i=0;
    }
  });
}
else if($(window).width() <= 800){

  $('.menu-li').click(function (){
    if(i===0){
      $('li.menu-li').css("display","inline");
      $('li.menu-li').css("margin-top","0px");
      $('ul li a').css("line-height","80px");
      $('.link').css({
        display :'none',
        transition :'all 1s',
      });

      i=1;
    }

    else{
      //$('ul.fixed').css("border","1px white");
      $('li.menu-li').css("display","block");
      $('li.menu-li').css("margin-top","10px");
      $('li.link').css("padding-top","10px");
      $('li.link').css("padding-bottom","10px");
      $('ul li a').css("line-height","20px");
      $('.link').css({
        display :'block',
        transition : 'all 1s',
      });
      /*$('.link').css({
        border : '1px solid black',
      });*/
      i=0;
    }
  });
}
//=================

});
