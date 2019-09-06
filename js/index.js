!function (window, document, $, undefined) {
    function init() {
        // 导航点击事件

        // $('.quit').on('click', quitFun)
        //change nav
        navClick()
    }
    function quitFun() {
        $('.back').hide()
        $('.back').css('display')
    }

    // 导航点击事件
    function navFun() {
        var $this = $(this)
        if ($this.hasClass('deactive')) {
            return
        } else {
            $this.addClass('active').siblings('li').removeClass('active')
            let url = '../page-business/' + $this.attr('id') + '.html'
            add(url)
        }

    }
    function navClick() {
        let menus = $('.menu')
        for (let i = 0; i < menus.length; i++) {
            $('.menu')[i].onclick = function () {
                var $this = $(this)
                $this.addClass('active').siblings('li').removeClass('active')
                let address = menus[i].getAttribute('data-name')
                add(`../pages/${address}.html`)
            }
        }
    }
    function add(key) {
        $.ajax({
            url: key,
            global: false,
            dataType: "html",
            cache: false,
            type: "GET",
            // async: false,       
            success: function (html) {
                $(".content").html(html);
            }
        });
    };


    add("../pages/home.html")
    init()
}(window, document, jQuery)