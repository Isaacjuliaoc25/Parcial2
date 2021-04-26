$(document).ready(function() {
    $('a').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();

            hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });
    $('#abrir').click(function(event) {
        $('aside#menu').animate({
            left: 0
        }, 300, 'easeOutExpo');

        $('#abrir').hide();
        $('#cerrar').show();

        event.preventDefault();
    });

    $('#cerrar, aside#menu nav a').click(function(event) {
        $('aside#menu').animate({
            left: -290
        }, 300, 'easeOutExpo');

        $('#abrir').show();
        $('#cerrar').hide();

        event.preventDefault();
    });
});