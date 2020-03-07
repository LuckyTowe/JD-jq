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