'use strict'
$(document).ready(function () {
      // Nice Select
      $('select').niceSelect();
      // AOS Animation
      AOS.init();
      window.addEventListener('load', AOS.refresh);
      // Slick Slider
      if (jQuery(".testimonial-slider").length > 0) {
            $('.testimonial-slider').slick({
                  dots: true,
                  infinite: true,
                  speed: 500,
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  responsive: [
                        {
                              breakpoint: 768,
                              settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                              }
                        }]
            });
      }
      // Dropdown Menu
      $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
            if (!$(this).next().hasClass('show')) {
                  $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
            }
            var $subMenu = $(this).next(".dropdown-menu");
            $subMenu.toggleClass('show');
            $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
                  $('.dropdown-submenu .show').removeClass("show");
            });
            return false;
      });
      // Sticky Header
      window.onscroll = function () {
            scrollFunction()
      };
      function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                  $(".sticky-header").addClass("scrolling");
            } else {
                  $(".sticky-header").removeClass("scrolling");
            }
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                  $(".sticky-header.scrolling").addClass("reveal-header");
            } else {
                  $(".sticky-header.scrolling").removeClass("reveal-header");
            }
      }
      /* Counter-up plugin activation */
if ($.fn.counterUp) {
      $('.counter').counterUp({
            // delay: 10,
            time: 1000
      });
}
      // Preloader
$(window).load(function () {
      setTimeout(function () {
            $('#loading').fadeOut(500);
      }, 1000);
      setTimeout(function () {
            $('#loading').remove();
      }, 2000);
})
})
