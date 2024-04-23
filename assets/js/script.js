
    document.addEventListener('DOMContentLoaded', function () {
        var carousel = document.querySelector('#carouselExample');
        if (carousel) {
            var carouselInstance = new bootstrap.Carousel(carousel, {
                interval: 2000,
                wrap: true,
                keyboard: true,
            });
        } else {
            console.error('No se encontró el elemento del Carousel.');
        }
    })
