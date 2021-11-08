$(function () {  
    // MENU:
    var menu=$('#nav>ul>li'),
        bg=$('.bg');
    menu.on({mouseover:function () {  
        menu.find('ul').stop().slideDown();
        bg.stop().slideDown();
    },mouseout:function () {  
        menu.find('ul').stop().slideUp();
        bg.stop().slideUp();
    }});
    // SLIDE:
    // var slide=$('#slide ul li'),
    //     current=0;
    // setInterval(function () {  
    //     var prev=slide.eq(current);
    //     current++;
    //     move(prev,1,0); //prev에 해당하는 슬라이드의 opacity가 1이었다가 0으로 투명해져서 사라짐
    // },3000);
    var slide=$('#slide ul li'),
        current=0;
    setInterval(function () {  
        var prev = slide.eq(current);
        current++;
        move(prev,1,0);
        if (current==slide.size()) {
            current=0;
        }
        var next = slide.eq(current);
        move(next,0,1);
    },3000);
    function move(tg,start,end) {  
        tg.css({opacity:start}).stop().animate({opacity:end},1000);
    };
    // POPUP:
    $('.popup').click(function () {  
        $('.pop').fadeIn();
    });
    $('.btn').click(function () {  
        $('.pop').fadeOut();
    });
})