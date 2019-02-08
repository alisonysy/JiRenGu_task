!function(){
  var view = View('.mySwiper');

  var controller = {
    view: null,
    mySwiper:null,
    SwiperOptions:{
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        hideOnClick:true,
      },
      autoplay:{
        delay: 3000,
        disableOnInteraction:false,
      },
    },
    init: function(view){
      this.view = view;
      this.createSwiper();
    },
    createSwiper: function(){
      this.mySwiper = new Swiper (this.view.querySelector('.swiper-container'), this.SwiperOptions)
    }
  }

  controller.init(view);

}.call()
