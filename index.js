/**
 * 调用dropDown插件生成最顶部下拉框
 */

//dropDown需要传入的参数
//1 dataList
//2 width 容器宽度
//3 排列方向 纵向y （默认）   横向x
//4  colWith每列列宽 

$('#my-JD').dropdown({
    width: 280,
    colWidth: 126,
    list: dropDownData.myJD
})

$('#company').dropdown({
    width: 152,
    colWidth: 56,
    list: dropDownData.company
})

$('#service').dropdown({
    width: 170,
    colWidth: 70,
    list: dropDownData.service
})
$('#app').dropdown({
    width: 1188,
    colWidth: 85,
    direction: 'x',
    list: dropDownData.app
});

/**
 * 为swiper插件中clone方法创建DOM结构 
*/
function swiper2Dom() {

    for (var j = 0; j < swiper2Data.length; j++) {

        $(`<div class="swiperPage"><div>`).appendTo('.swiper2 .domDisplay');

        for (var i = 0; i < swiper2Data[j].length; i++) {
            console.log(swiper2Data[j]);
            $($('.swiper2 .swiperPage')[j]).append($(`<a href="${swiper2Data[j][i].href}" class="multi"><img
            src="${swiper2Data[j][i].imgSrc}"
            alt="${swiper2Data[j][i].alt}"></a>`))
        }
    }
}
swiper2Dom()
function swiper3Dom() {

    for (var j = 0; j < swiper3Data.length; j++) {

        $(`<div class="swiper3List"></div>`).appendTo('.swiper3 .domDisplay');

        for (var i = 0; i < swiper3Data[j].length; i++) {
            $($('.swiper3 .swiper3List')[j]).append($(`<a href="${swiper3Data[j][i].href}" class="swiperLink">
            <div class="swiperItem">
                <img class="swiperImg"
                    src="${swiper3Data[j][i].imgSrc}"
                    alt="${swiper3Data[j][i].alt}">
                <p>${swiper3Data[j][i].alt}</p>
                <div class="swiperPrice">
                    <span class="newPrice">￥${swiper3Data[j][i].newPrice}</span><span class="oldPrice">￥${swiper3Data[j][i].oldPrice}</span>
                </div>
            </div>
        </a>`))
        }
    }
}
swiper3Dom();
function swiper4Dom() {

    for (var j = 0; j < swiper4Data.length; j++) {
        $(`<div class="wrapperAll">
        <div class="swiper4Top"><img
                src="${ swiper4Data[j].imgSrc}"
                alt="${ swiper4Data[j].alt}"></div>
        <div class="doubleTitle">
            <p class="title1">${ swiper4Data[j].title1}</p>
            <p class="title2">${ swiper4Data[j].title2}</p>
        </div>
        <div class="bottomBtn"><a href=""><span>${ swiper4Data[j].bottomBtn}></span></a></div>
    </div>`).appendTo('.swiper4 .domDisplay');


    }
}
swiper4Dom();

//调用swiper插件生成跑马灯
$('.swiper1').swiper({
    list: swiper1Data,
    animateStyle: 'fade',
    turnBtn: true,
    smallCircle: true,
    autoTime: 3000,
    isAutoChange: true
})
$('.swiper2').swiper({
    list: $('.domDisplay>.swiperPage'),
    isDom: true,
    animateStyle: 'fade',
    turnBtn: false,
    smallCircle: false,
    autoTime: 4000,
    isAutoChange: true
})
$('.swiper3').swiper({
    list: $('.domDisplay>.swiper3List'),
    animateStyle: 'animate',
    turnBtn: true,
    smallCircle: false,
    autoTime: 3000,
    isAutoChange: false,
    isDom: true
})
$('.swiper4').swiper({
    list: $('.domDisplay>.wrapperAll'),
    animateStyle: 'animate',
    turnBtn: false,
    isDom: true,
    smallCircle: false,
    autoTime: 3000,
    isAutoChange: true
});

/**
 * 渲染导航栏
 * @param {*} data 
 * @param {*} dom 
 */
function renderNavList(data, dom) {
    let oUl = $('<ul class="navAllList"><div>');
    data.forEach((ele, index) => {
        let oLi = $('<li class="content-menu"></li>');
        let length = ele.title.length;
        ele.title.forEach((item, i) => {
            $(`<a>${item}</a>`).appendTo(oLi);
            if (length > 1 && i != length - 1) {
                $('<span>/</span>').appendTo(oLi);
            }
        });
        oLi.appendTo(oUl);
    })
    oUl.appendTo(dom);
}
renderNavList(menuList, $('.leftNav'))


function bindEvent() {

    let timer, timer2, timer3, timer4 = null;

    //左侧菜单，鼠标移入展开详细列表
    $('.navAllList').on('mouseenter', 'li', function () {
        clearTimeout(timer)
        $(self).removeClass('hover');
        $(this).addClass('hover');
        renderMenu(menuList, $(this).index() - 1, $('.menu-on'))
        $('.menu-on').show();
    }).on('mouseleave', 'li', function () {
        self = this;
        timer = setTimeout(function () {
            $(self).removeClass('hover');
            $('.menu-on').hide();
        }, 300)
    });
    $('.menu-on').on('mouseenter', function () {
        clearTimeout(timer)
    }).on('mouseleave', function () {
        $('.navAllList>li').removeClass('hover');
        $('.menu-on').hide();
    })

    //鼠标移入进入iframe
    $('.service_item').on('mouseenter', function () {
        let self = this;
        if ($(this).hasClass('service_frame')) {
            timer2 = setTimeout(function () {
                $('.service_item').removeClass('service-on');
                $(self).addClass('service-on');
                $('.service_frame').css({
                    marginTop: -38,
                });
                $('.service-tab').css({
                    display: 'block',
                    marginTop: -224
                });
            }, 350)

        } else if ($(this).hasClass('service_frame2')) {
            timer2 = setTimeout(function (param) {
                $('.service_item').removeClass('service-on');
                $(self).addClass('service-on');
                $('.service_frame').css({
                    marginTop: -38,
                });
                $('.service_frame:nth-of-type(1)').css({
                    top: -60,
                });
                $('.service_frame2').css({
                    position: 'absolute',
                    top: -28,
                });
                $('.service-tab').css({
                    display: 'block',
                    marginTop: -224
                })
            }, 350)
        }
    }).on('mouseleave', function () { clearTimeout(timer2) });
    //关闭iframe
    $('.closeBtn span').click(function () {
        $('.service_item').removeClass('service-on');
        $('.service_frame').css({
            marginTop: 0,
        });
        $('.service-tab').css({
            display: 'none',
            marginTop: 0
        });
        $('.service_frame:nth-of-type(1)').css({
            top: 0,
        });
        $('.service_frame2').css({
            position: 'relative',
            top: 0
        });
    })
    //搜索框输入监听
    $('#searchBox').keyup(function (e) {
        clearTimeout(timer3)
        if ($(e.target).val()) {
            timer3 = setTimeout(function () {
                searchRequest($(e.target).val());
                $('.search-tips').show();
            }, 300)

        } else {
            $('.search-tips').hide();
        }
    }).on('mouseleave', function () {
        timer4 = setTimeout(function () {
            $('.search-tips').hide();
        }, 300)

    });

    $('.search-tips').on('mouseenter', function () {
        clearTimeout(timer4);
    }).on('mouseleave', function () {
        $(this).hide();
    });
}

bindEvent();


function renderMenu(data, selIndex, dom) {
    dom.empty();
    let nowData = data[selIndex];
    let dataContent = nowData.content;
    let dataContentSubs = dataContent.subs;
    let cartPart = $(`<div class="cart-part"><div>`);
    let nowTabs = $('<div class="channel"></div>');
    let nowItems = $(`<div class="all-kinds"><div>`)
    dataContent.tabs.forEach(function (ele, i) {
        $(`<a href="#">${ele}<span>></span></a>`).appendTo(nowTabs);
    })
    dataContentSubs.forEach((ele) => {
        let oDl = $(`<dl class="every-dl"></dl>`);
        let oDt = $(`<dt><a href="#">${ele.title}<span>></span></a></dt>`);
        oDt.appendTo(oDl);
        let oDd = $('<dd></dd>');
        oDd.appendTo(oDl);
        ele.items.forEach((kind) => {
            $(`<a href="#">${kind}</a>`).appendTo(oDd)
        })
        oDl.appendTo(nowItems)
    })
    nowTabs.appendTo(cartPart);
    nowItems.appendTo(cartPart)
    cartPart.appendTo(dom);
}

/**
 * 热搜词自动切换
 */
function changeWord() {

    let i = 0;
    let j = 0;
    setInterval(function () {
        i++;
        $('.changeHotWord').text(hotwordsData[i %= 3]);
    }, 3000);
    setInterval(function () {
        j++;
        ($('.search>input').attr('placeholder', placeholderData[j %= 4]));
    }, 5000);
}
changeWord()

/**
 * 搜索框数据请求
 * @param {*} val 
 */
function searchRequest(val) {
    $.ajax({
        type: "GET",
        url: "https://suggest.taobao.com/sug",
        data: {
            code: 'utf-8',
            q: val
        },
        dataType: "jsonp",
        success: function (data) {
            $('.search-key').empty();
            // $('.search-tips').show
            data.result.forEach((ele, index) => {
                $(`<li>${ele[0].replace(val, val.bold())}</li>`).appendTo('.search-key');
            })
        }
    });
}