window.onload = () => {
  
  const swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    slidesPerView: '3',
    centeredSlides: true,
    direction: 'horizontal',
    loop: false,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      390: {
        slidesPerView: 2,  
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 4,  //브라우저가 768보다 클 때
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,  //브라우저가 1024보다 클 때
        spaceBetween: 40,
      },
    },

  });

  $(function () {
    $('.footer_menu_wrap a').click(function () {
      return false
    })

    $('.footer_menu_wrap h3').click(function () {
      $(this).parent().next().stop().slideToggle(500)
      console.log('test')
    })

    $(window).resize(function () {
      var win_w = $(window).width()
      if (win_w >= 1024) {
        $('.footer_menu_wrap ul').show()
      } else {
        $('.footer_menu_wrap ul').hide()
      }
    }).resize()
  })

}