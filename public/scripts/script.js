$(document).ready(function() {
    function applyParallaxEffect(element, intensity) {
        var rAF;
        var currentTransform = 'translate3d(0, 0, 0)';
        var isMoving = false;

        $(document).mousemove(function(e) {
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
                    rAF = requestAnimationFrame(function() {
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
    applyParallaxEffect($('.moove20'), 2);

    // Применить эффект к .rectangle с интенсивностью 10
    applyParallaxEffect($('.moove10'), 10);
});