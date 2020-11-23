    /* mobile navigation */
    
    $('.js--nav-icon').click(function() {
      var nav = $('.js--main-nav');
      var icon = $('.js--nav-icon i');
      
      nav.slideToggle(200);
      if (icon.hasClass('fa-bars')) {
          icon.addClass('fa-window-close');
          icon.removeClass('fa-bars');
      } else {
          icon.addClass('fa-bars');
          icon.removeClass('fa-window-close');
      }

  });

//   var extern = document.getElementsByTagName("link")[0].import;
//   var content = document.querySelector('link[rel="import"]').import;