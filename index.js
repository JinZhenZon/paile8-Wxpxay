
// 轮播
    $('.sendRadio p').bind('click', function () {
        $('.sendRadio p').removeClass('activeSize');
        $(this).addClass('activeSize');
    });


    function jian() {
        if ($('.goodsnum').val() > 0)
            $('.goodsnum').val($('.goodsnum').val() - 1);
    }

    function add() {
        $('.goodsnum').val(Math.floor($('.goodsnum').val()) + 1);
    }