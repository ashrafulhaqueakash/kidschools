'use strict'
$(document).ready(function() {
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
            slidesToShow: 6,
            slidesToScroll: 1,
            asNavFor: '.t-carousel__slides',
            centerMode: true,
            centerPadding: '0',
            focusOnSelect: true,
            arrows: true,
            loop: true,
            prevArrow: '<button type="button" class="slick-prev custom-prev-button"><i class="fa fa-chevron-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next custom-next-button"><i class="fa fa-chevron-right"></i></button>',
            responsive: [{
                    breakpoint: 1170,
                    settings: {
                        slidesToShow: 6
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3
                    }
                }
            ]
        });
    }
    // Dropdown Menu
    $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');
        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
            $('.dropdown-submenu .show').removeClass("show");
        });
        return false;
    });

    // Progress Bar
    (function() {
        const containers = document.querySelectorAll('.ks-mission-progress');
        if (!containers.length) return;
        const easeInOutCubic = t => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

        function animateBarAndCounter(bar, label) {
            const target = parseFloat(bar.dataset.value || '0');
            const td = getComputedStyle(bar).transitionDuration;
            const duration = td.includes('ms') ? parseFloat(td) : parseFloat(td || '1.2') * 1000 || 1200;
            bar.style.width = '0%';
            requestAnimationFrame(() => (bar.style.width = target + '%'));
            const start = performance.now();
            function step(now) {
                const t = Math.min(1, (now - start) / duration);
                const eased = easeInOutCubic(t);
                const current = Math.round(eased * target);
                if (label) label.textContent = current + '%';
                bar.setAttribute('aria-valuenow', String(current));
                if (t < 1) requestAnimationFrame(step);
                else {
                    if (label) label.textContent = target + '%';
                    bar.setAttribute('aria-valuenow', String(target));
                }
            }
            requestAnimationFrame(step);
        }

        function run(container) {
            container.querySelectorAll('.progress').forEach(progressEl => {
                const bar = progressEl.querySelector('.progress-bar');
                if (!bar) return;
                const labelRow = progressEl.previousElementSibling;
                const label = labelRow ? labelRow.querySelector('.progress-bar-value') : null;
                animateBarAndCounter(bar, label);
            });
        }

        if ('IntersectionObserver' in window) {
            const io = new IntersectionObserver(entries => {
                entries.forEach(e => {
                    if (e.isIntersecting) {
                        run(e.target);
                        io.unobserve(e.target);
                    }
                });
            }, {
                threshold: 0.2
            });
            containers.forEach(c => io.observe(c));
        } else {
            window.addEventListener('load', () => containers.forEach(run));
        }
    })();

    // ISOTOPE: filter and active button
    $('.filter-grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });
    $('.filter-button-group').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $('.filter-grid').isotope({ filter: filterValue });
        $('.filter-button-group button').removeClass('active');
        $(this).addClass('active');
    });

    // Sticky Header
    window.onscroll = function() {
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
    // Counter-up plugin activation
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            time: 1000
        });
    }

    // Preloader: use .on('load') (not .load)
    $(window).on('load', function() {
        setTimeout(function() {
            $('#loading').fadeOut(500);
        }, 1000);
        setTimeout(function() {
            $('#loading').remove();
        }, 2000);
    });

});
