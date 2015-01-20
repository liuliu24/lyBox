var h;

$(function () {
    $(document.body).append('<div class="overlay"></div><div class="showbox"></div>');

    h = $(document).height();

    $(".overlay").css({
        "height": h
    });

})
var ly = {};
ly.loading = {
    c: h / 2 - 32,
    show: function (Mask) {
        if (Mask == true) {
            $(".overlay").css({
                'display': 'block',
                'opacity': '0.1'
            });
        }
        ;

        $(".showbox").css({
            'display': 'block',
            'margin-top': h / 2 - 32,
            'opacity': '1'
        });
    },
    hide: function (Mask) {

        $(".showbox").css({
            'margin-top': this.c - 50,
            'opacity': '0',
            'display': 'none'
        });
        if (Mask == true) {
            $(".overlay").css({
                'display': 'none',
                'opacity': '0'
            });
        }
    }
}