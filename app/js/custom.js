'use strict'
$(document).ready(function () {
      // Nice Select
      $('select').niceSelect();
      // AOS Animation
      AOS.init();
      window.addEventListener('load', AOS.refresh);
      // Slick Slider
      if (jQuery(".activity-slider").length > 0) {
            $('.activity-slider').slick({
                  dots: false,
                  infinite: true,
                  speed: 500,
                  slidesToShow: 1,
                  slidesToScroll: 1,
            });
      }
      if (jQuery(".t-carousel__slides").length > 0) {
            // Text slider (one at a time)
            $('.t-carousel__slides').slick({
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                  fade: false,
                  adaptiveHeight: true,
                  asNavFor: '.t-carousel__thumbs'
            });

            // Avatar nav slider (centered thumbs)
            $('.t-carousel__thumbs').slick({
                  slidesToShow: 5,
                  slidesToScroll: 1,
                  asNavFor: '.t-carousel__slides',
                  centerMode: true,
                  focusOnSelect: true,
                  arrows: false,
                  responsive: [
                        { breakpoint: 900, settings: { slidesToShow: 5 } },
                        { breakpoint: 768, settings: { slidesToShow: 3 } },
                        { breakpoint: 480, settings: { slidesToShow: 3 } }
                  ]
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
