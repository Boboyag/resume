$(document).ready(function() {
    $('#pagepiling').pagepiling({
        loopBottom: true,
        loopTop: true,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
        menu: '#menu',
        navigation: {
            position: 'right',
            tooltips: ['首页', '教育', '技能', '经历', '项目', '联系']
        },
        onLeave: function(index, nextIndex, direction) {
            var $pages = $('.section');
            for (var i = 0; i < $pages.length; ++i) {
                if (i + 1 !== nextIndex) {
                    $($pages[i]).addClass('leaving');
                } else {
                    $($pages[i]).removeClass('leaving');
                }
            }
        }
    });
});
