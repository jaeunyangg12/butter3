$('.char_box li').eq(0).addClass('active')

let charactor = setInterval(charRolling, 2000)


let i = 0
function charRolling(){
    i++
    if(i >= 4){
        i = 0
    }
    $('.char_box li').eq(i).addClass('active').siblings().removeClass();
}

$('.char_box li').mouseenter(function(){
    clearInterval(charactor)
    $(this).addClass('active').siblings().removeClass()
    i = $(this).index()
});

$('.char_box li').mouseleave(function(){
    charactor = setInterval(charRolling, 2000)
});


// $('.favorite').each(function(){        
//     favorite.call(this)
// })

// $('.favorite').click(function(){  
//     $(this).toggleClass('active')
//     favorite.call(this)
//     return false
// })

// function favorite(){
//     if($(this).hasClass('active')){
//         $(this).text('♥').css({color:'#ebd368'});
//     } else {
//         $(this).text('♡').css({color:''});
//     }
// }