//需要传入的参数
//1 dataList
//2 width 容器宽度
//3 排列方向 纵向y （默认）   横向x
//4  colWith每列列宽 

$('#my-JD').dropdown({
    width: 280,
    colWidth: 126,
    list: [{
        title: '',
        items: [{
            href: '#',
            name: '待处理订单'
        }, {
            href: '#',
            name: '返修退换货',
        }, {
            href: '#',
            name: '降价商品'
        }, {
            href: '#',
            name: '消息'
        }, {
            href: '#',
            name: '我的问答'
        }, {
            href: '#',
            name: '我的关注'
        }]
    }, {
        title: '',
        // col: 2,
        items: [{
            href: '#',
            name: '我的京豆'
        }, {
            href: '#',
            name: '我的优惠券'
        }, {
            href: '#',
            name: '我的白条'
        }, {
            href: '#',
            name: '我的理财'
        }]
    }]
})

$('#company').dropdown({
    width: 152,
    colWidth: 56,
    list: [{
        title: '',
        items: [{
            href: '#',
            name: '企业购'
        }, {
            href: '#',
            name: '商用场景观',
        }, {
            href: '#',
            name: '工业品'
        }, {
            href: '#',
            name: '礼品卡'
        }]
    }]
})

$('#service').dropdown({
    width: 170,
    colWidth: 70,
    list: [{
        title: '客户',
        items: [{
            href: '#',
            name: '帮助中心'
        }, {
            href: '#',
            name: '售后服务',
        }, {
            href: '#',
            name: '在线客服'
        }, {
            href: '#',
            name: '意见建议'
        }, {
            href: '#',
            name: '电话客服'
        }, {
            href: '#',
            name: '客服邮箱'
        }, {
            href: '#',
            name: '金融咨询'
        }, {
            href: '#',
            name: '全球售客服'
        }]
    }, {
        title: '商户',
        items: [{
            href: '#',
            name: '帮助中心'
        }, {
            href: '#',
            name: '售后服务',
        }, {
            href: '#',
            name: '在线客服'
        }, {
            href: '#',
            name: '意见建议'
        }, {
            href: '#',
            name: '电话客服'
        }, {
            href: '#',
            name: '客服邮箱'
        }, {
            href: '#',
            name: '金融咨询'
        }, {
            href: '#',
            name: '全球售客服'
        }]
    }]
})
$('#app').dropdown({
    width: 1188,
    colWidth: 85,
    direction: 'x',
    list: [{
        title: '特色主题',
        // col: 4,
        width: 340,
        items: [{
            href: '#',
            name: '帮助中心'
        }, {
            href: '#',
            name: '售后服务',
        }, {
            href: '#',
            name: '在线客服'
        }, {
            href: '#',
            name: '意见建议'
        }, {
            href: '#',
            name: '电话客服'
        }, {
            href: '#',
            name: '客服邮箱'
        }, {
            href: '#',
            name: '金融咨询'
        }, {
            href: '#',
            name: '全球售客服'
        }, {
            href: '#',
            name: '帮助中心'
        }, {
            href: '#',
            name: '售后服务',
        }, {
            href: '#',
            name: '在线客服'
        }, {
            href: '#',
            name: '意见建议'
        }, {
            href: '#',
            name: '电话客服'
        }, {
            href: '#',
            name: '客服邮箱'
        }, {
            href: '#',
            name: '金融咨询'
        }, {
            href: '#',
            name: '全球售客服'
        }, {
            href: '#',
            name: '客服邮箱'
        }, {
            href: '#',
            name: '金融咨询'
        }, {
            href: '#',
            name: '全球售客服'
        }]
    }, {
        title: '商户',
        // col: 3,
        width: 255,
        items: [{
            href: '#',
            name: '帮助中心'
        }, {
            href: '#',
            name: '售后服务',
        }, {
            href: '#',
            name: '在线客服'
        }, {
            href: '#',
            name: '意见建议'
        }, {
            href: '#',
            name: '电话客服'
        }, {
            href: '#',
            name: '客服邮箱'
        }, {
            href: '#',
            name: '金融咨询'
        }, {
            href: '#',
            name: '全球售客服'
        }]
    }]
});
//左侧菜单栏数据
var menuList = [{
    title: ['家用电器'],
    content: {
        tabs: ['家电馆', '镇乡专卖店', '家电服务'],
        subs: [{
            title: '电视',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件", "曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件", "曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '空调',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}, {
    title: ['手机', '运营商', '数码'],
    content: {
        tabs: ['手机'],
        subs: [{
            title: '手机',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '手表',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}, {
    title: ['电脑', '办公'],
    content: {
        tabs: ['家电馆', '镇乡专卖店', '家电服务'],
        subs: [{
            title: '电视',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '空调',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}];
const hotwordsData = ['大牌直播周', '手机五折抢', '母婴好物萃']
const placeholderData = ['香奈儿香水', '欧普照明', '投影仪', '牛奶']
$('.swiper1').swiper({
    imgArr: [
        'https://img12.360buyimg.com/babel/s1180x940_jfs/t1/85809/25/13704/100868/5e5c6308E3d591a94/bd7760172e73b017.jpg.webp',
        'https://img12.360buyimg.com/pop/s1180x940_jfs/t1/86298/33/13477/99746/5e58d079E969ea839/170941f7e8e822a1.jpg.webp',
        'https://img13.360buyimg.com/pop/s1180x940_jfs/t1/107240/5/1647/103551/5e002016E0e36ba22/236fc2f3e8f68e33.jpg.webp',
        'https://imgcps.jd.com/ling/100005171461/56yU6K6w5pys57K-6YCJ5aSn54mM/5aW956S85LiN5pat/p-5bd8253082acdd181d02fa68/f1a476e4/590x470.jpg',
        'https://img11.360buyimg.com/pop/s1180x940_jfs/t1/94077/40/13431/91413/5e57629eE39ab060a/4adceb3e5e3863fe.jpg.webp',
        'https://img14.360buyimg.com/babel/s1180x940_jfs/t1/95536/21/13800/74692/5e5dd0e1E4437cd3a/3471b54be70e5189.jpg.webp',
        'https://img10.360buyimg.com/babel/s1180x940_jfs/t1/90966/12/13849/94449/5e5dd103E999afa6f/263c188c47d49894.jpg.webp'
    ],
    animateStyle: 'fade',
    turnBtn: true,
    smallCircle: true,
    autoTime: 3000,
    isAutoChange: true
})

function renderNavList(data, dom) {
    let oUl = $('<ul class="navAllList"><div>');
    data.forEach((ele, index) => {
        let oLi = $('<li class="content-menu"></li>');
        let length = ele.title.length;
        // console.log(length)
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
    $('.navAllList').on('mouseenter', 'li', function() {
        clearTimeout(timer)
        $(self).removeClass('hover');
        $(this).addClass('hover');
        renderMenu(menuList, $(this).index() - 1, $('.menu-on'))
        $('.menu-on').show();
    }).on('mouseleave', 'li', function() {
        self = this;
        timer = setTimeout(function() {
            $(self).removeClass('hover');
            $('.menu-on').hide();
        }, 300)
    });
    $('.menu-on').on('mouseenter', function() {
        clearTimeout(timer)
    }).on('mouseleave', function() {
        $('.navAllList>li').removeClass('hover');
        $('.menu-on').hide();
    })

    //鼠标移入进入iframe
    $('.service_item').on('mouseenter', function() {
        let self = this;
        if ($(this).hasClass('service_frame')) {
            timer2 = setTimeout(function() {
                $('.service_item').removeClass('service-on');
                $(self).addClass('service-on');
                $('.service_frame').css({
                    marginTop: -38,
                });
                $('.service-tab').css({
                    display: 'block',
                    marginTop: -208
                });
            }, 350)

        } else if ($(this).hasClass('service_frame2')) {
            timer2 = setTimeout(function(param) {
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
                    marginTop: -208
                })
            }, 350)
        }
    }).on('mouseleave', function() { clearTimeout(timer2) });
    //关闭iframe
    $('.closeBtn span').click(function() {
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
    $('#searchBox').keyup(function(e) {
        clearTimeout(timer3)
        if ($(e.target).val()) {
            timer3 = setTimeout(function() {
                searchRequest($(e.target).val());
                $('.search-tips').show();
            }, 300)

        } else {
            $('.search-tips').hide();
        }
    }).on('mouseleave', function() {
        timer4 = setTimeout(function() {
            $('.search-tips').hide();
        }, 300)

    });

    $('.search-tips').on('mouseenter', function() {
        clearTimeout(timer4);
    }).on('mouseleave', function() {
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
    dataContent.tabs.forEach(function(ele, i) {
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

function changeWord() {

    let i = 0;
    let j = 0;
    setInterval(function() {
        i++;

        $('.changeHotWord').text(hotwordsData[i %= 3]);
        // console.log(words[i %= 3])

    }, 3000);
    setInterval(function() {
        j++;
        ($('.search>input').attr('placeholder', placeholderData[j %= 4]));
    }, 5000);
}
changeWord()

function searchRequest(val) {
    $.ajax({
        type: "GET",
        url: "https://suggest.taobao.com/sug",
        data: {
            code: 'utf-8',
            q: val
        },
        dataType: "jsonp",
        success: function(data) {
            $('.search-key').empty();
            // $('.search-tips').show
            data.result.forEach((ele, index) => {
                $(`<li>${ele[0].replace(val,val.bold())}</li>`).appendTo('.search-key');
            })
        }
    });
}