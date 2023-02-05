// 全屏加载loadin
$(document).ready(function () {
    $('#loadingBox').fadeOut("5000");



});

// 滚动加载
$(window).on('scroll', function () {
    //当window的scrolltop距离大于1时，go to 
    if ($(this).scrollTop() > 100) {
        $('#goToTop').fadeIn();
    } else {
        $('#goToTop').fadeOut();
    }
});

// 向上顶
$('#goToTop').click(function () {
    $('html ,body').animate({
        scrollTop: 0
    }, 300);
    return false;
});

const viewer = new Viewer(document.getElementById('gallery'));
