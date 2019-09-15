$(function() {
  // $('.member-title').css('color','blue');

  // Wow
  new WOW().init();

  // スライダー
  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    speed: 1500,
    width: 300,
  });
});

// タブメニュー
$('.tabmenu-tab').on('click', function(){
  $('.tabmenu-body').removeClass('is-active-body');
  $($(this).attr("href")).addClass("is-active-body");
  $('.tabmenu-tab').removeClass('is-active-tab');
  $(this).addClass('is-active-tab');
});


