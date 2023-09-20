window.onload = function () {
    document.body.classList.add('loaded');
}


window.onload = function () {
    document.body.classList.add('loaded');
}
var $page = $('html, body');
$('a[href*="#"]').click(function () {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

$(document).ready(function () {
    if ($(window).width() >= 1080) {
        function applyParallaxEffect(element, intensity) {
            var rAF;
            var currentTransform = 'translate3d(0, 0, 0)';
            var isMoving = false;

            $(document).mousemove(function (e) {
                if (element.length === 0) return; // Проверка на существование элемента

                if (!isMoving) {
                    isMoving = true;

                    var mouseX = e.pageX;
                    var mouseY = e.pageY;

                    var centerX = element.offset().left + element.width() / 2;
                    var centerY = element.offset().top + element.height() / 2;

                    var deltaX = mouseX - centerX;
                    var deltaY = mouseY - centerY;

                    var percentX = deltaX / (element.width() / 2);
                    var percentY = deltaY / (element.height() / 2);

                    var parallaxX = percentX * intensity;
                    var parallaxY = percentY * intensity;

                    var newTransform = 'translate3d(' + parallaxX + 'px,' + parallaxY + 'px, 0)';

                    if (newTransform !== currentTransform) {
                        currentTransform = newTransform;

                        cancelAnimationFrame(rAF);
                        rAF = requestAnimationFrame(function () {
                            // Используем transform для плавного движения
                            element.css({
                                'transform': newTransform
                            });
                            isMoving = false;
                        });
                    }
                }
            });
        }
        // Применить эффект к .circle с интенсивностью 20
        applyParallaxEffect($('.moove20'), 10);

        // Применить эффект к .rectangle с интенсивностью 10
        applyParallaxEffect($('.moove10'), 8);
        applyParallaxEffect($('.moove2'), 4);
        applyParallaxEffect($('.moove1'), 1);


    } else {}

    function rotateTags() {
        var $tags = $(".container-people-add .tag");
        var $activeTag = $tags.filter(".active");

        // Удаляем классы "active", "active2" и "active3" у всех блоков
        $tags.removeClass("active active2 active3");

        // Перемещаем классы к следующему блоку (или первому, если достигнут конец)
        if ($activeTag.next().length) {
            $activeTag.next().addClass("active");
            if ($activeTag.length) {
                $activeTag.addClass("active2");
                if ($activeTag.prev().length) {
                    $activeTag.prev().addClass("active3");
                }
            }
        } else {
            $tags.first().addClass("active");
            $tags.last().addClass("active2");
            $tags.eq($tags.length - 2).addClass("active3");
        }
    }

    // Вызываем функцию rotateTags() каждые 4 секунды
    setInterval(rotateTags, 4000);

});

$(document).ready(function () {
    var offcanvasNavbar = $("#offcanvasNavbar");
    var navLinks = offcanvasNavbar.find(".nav-link");

    navLinks.on("click", function () {
        offcanvasNavbar.offcanvas("hide");
    });
});
$(document).ready(function () {
    $(".coin-marquee-header").hide();
    $(".coin-marquee-container").addClass('container d-flex justify-content-center');
});