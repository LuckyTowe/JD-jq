(function () {
    /**
     * 跑马灯构造器
     */
    function Swiper(options, wrap) {
        this.wrap = wrap;
        this.list = options.list || [];
        this.divWidth = options.divWidth || wrap.width();
        this.divHeight = options.divHeight || wrap.height();
        this.animateStyle = options.animateStyle || 'fade';
        this.turnBtn = options.turnBtn != undefined ? options.turnBtn : true;
        this.smallCircle = options.smallCircle != undefined ? options.smallCircle : true;
        this.autoTime = options.autoTime || 3000;
        this.isAutoChange = options.isAutoChange != undefined ? options.isAutoChange : true;
        this.picNum = this.list.length;
        this.isDom = options.isDom!=undefined?options.isDom:false;
        this.nowIndex = 0;
        this.lock = false;
        this.timer = null;
        this.init = function () {
            this.createDiv();
            this.initStyle();
            this.bindEvent();
            if (this.isAutoChange) this.autoChange();
        };
    };

    /**
     * 创建跑马灯结构
     */
    Swiper.prototype.createDiv = function () {
        var self = this
        let length = this.list.length;
        let swiperDiv = $('<div class="swiperDiv"></div>');
        let swiperUl = $('<ul class="swiperUl"></ul>');
        let swiperSpanWrapper = $('<div class="spanWrapper"></div>');
        Array.from(this.list).forEach((ele, index) => {
            if (this.isDom) {//判断，插入dom
                $('<li></li>').append($(ele).clone()).appendTo(swiperUl);
            } else {//插入图片
                $(`<li><a href="#"><img src=${ele}></a></li>`).appendTo(swiperUl);
            }
            
        });

        if (this.animateStyle === 'animate') {
            // 如果动画类型是animate，将多生成一张图片或dom
            if(this.isDom){
                $(`<li></li>`).append($(Array.from(this.list)[0]).clone()).appendTo(swiperUl);
                this.picNum++;
            }else{
                $(`<li><img src=${this.list[0]}></img></li>`).appendTo(swiperUl);
                this.picNum++;
            }
           
        }
        if (this.smallCircle) {//生成小圆点
            this.list.forEach((ele, index) => {
                $(`<span class="swiperSpan" data-id=${index}></span>`).appendTo(swiperSpanWrapper);
            })
        }
        
        swiperUl.appendTo(swiperDiv);
        //插入翻页键
        $('<div class="leftBtn Btn"></div><div class="rightBtn Btn"></div>').appendTo(swiperDiv)
        swiperSpanWrapper.appendTo(swiperDiv);
        swiperDiv.appendTo(this.wrap);
    };

    /**
     * 初始跑马灯样式
     */
    Swiper.prototype.initStyle = function () {
        const self = this;
        if(!self.turnBtn){
            $('.Btn',self.wrap).css({
                display:'none'
            })
        }
        $('.swiperDiv*', this.wrap).css({
            margin: 0,
            padding: 0,
            listStyle: 'none'
        })
        $(this.wrap).find('.swiperDiv').css({
            width: this.divWidth,
            height: this.divHeight,
            position: 'relative',
            overflow: 'hidden',
        }).find('li>a>img').css({
            width: this.divWidth,
            height: this.divHeight
        })
        $('.swiperDiv', this.wrap).find('.spanWrapper').css({
            position: 'absolute',
            bottom: 10,
            height: 10,
            width: '100%',
            paddingLeft: `calc(50% - ${(this.list.length - 1) * 10 - 5}px)`
        }).find('span').css({
            float: 'left',
            width: 10,
            height: 10,
            marginRight: 10,
            backgroundColor: 'rgba(255,255,255,0.5)',
            borderRadius: '50%',
            cursor: 'pointer',
        }).eq(0).css({
            backgroundColor: '#fff'
        })

        if (this.animateStyle === 'animate') {
            $(this.wrap).find('.swiperUl').css({
                height: this.divHeight,
                width: this.divWidth * this.picNum,
                margin: 0,
                padding: 0,
                position: 'absolute',
                left: 0,
            })
                .find('li').css({
                    float: 'left',
                    listStyle: 'none',
                })
        } else {
            $(this.wrap).find('.swiperUl').css({
                height: this.divHeight,
                width: this.divWidth,
                margin: 0,
                padding: 0,
                position: 'relative',
                left: 0,
            }).find('li').css({
                position: 'absolute',
                display: 'none',
            }).eq(this.nowIndex).show()
        }

        $('.Btn', this.wrap).css({
            position: 'absolute',
            width: 25,
            height: 35,
            top: 'calc(50% - 17.5px)',
            backgroundColor: 'rgba(0,0,0,0.3)',
            cursor: 'pointer'
        });
        $('.Btn', this.wrap).hover(function () {
            $('.Btn', self.wrap).css({
                backgroundColor: 'rgba(0,0,0,0.5)',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            })
        }, function () {
            $('.Btn', self.wrap).css({
                backgroundColor: 'rgba(0,0,0,0.3)',
                backgroundSize: '70% 70%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            })
        });
        $('.leftBtn', self.wrap).css({
            left: 0,
            borderTopRightRadius: '23px',
            borderBottomRightRadius: '23px',
            backgroundImage: "url(./swiper/img/back.png)",
            backgroundSize: '50% 50%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'

        });
        $('.rightBtn', self.wrap).css({
            right: 0,
            borderTopLeftRadius: '23px',
            borderBottomLeftRadius: '23px',
            backgroundImage: 'url("./swiper/img/next.png")',
            backgroundSize: '50% 50%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        });
    };

    /**
     * 事件监听
     */
    Swiper.prototype.bindEvent = function () {
        var self = this;
        //左按钮点击
        $('.leftBtn', self.wrap).on('click', function () {
            if(self.lock) return
            clearInterval(self.timer);
            if (self.animateStyle === 'animate') {
                if (self.nowIndex == 0) { //为后面字符串类型的隐式转换，此处不使用全等
                    $('.swiperUl',self.wrap).css({
                        left: -self.list.length * self.divWidth
                    })
                    self.nowIndex = self.list.length 
                }
                self.nowIndex--
            } else {
                self.nowIndex--;
                if (self.nowIndex == -1) {
                    self.nowIndex = 4
                }
            }; 
            self.changePic();
            if (self.isAutoChange) self.autoChange();
        });
        //右按钮点击
        $('.rightBtn', self.wrap).on('click', function () {
            if(self.lock) return
            clearInterval(self.timer);
            if (self.animateStyle === 'animate') {
                if (self.nowIndex === self.list.length) {
                    $('.swiperUl',self.wrap).css({
                        left: 0
                    })
                    self.nowIndex = 0 
                }
                self.nowIndex++;
            } else {
                self.nowIndex++;
                if (self.nowIndex == self.list.length) {
                    self.nowIndex = 0;
                }
            }
            self.changePic();
            if (self.isAutoChange) self.autoChange();
        })
        //底部小圆点鼠标移入移出
        $('.swiperSpan', self.wrap).on('mouseover', function (e) {
            clearInterval(self.timer);
            if(self.nowIndex== $(e.target).attr('data-id')) return; //如果移入的就是当前页则不执行后续
            self.nowIndex = $(e.target).attr('data-id'); //注意此处最终得到的是字符串类型
            self.changePic();
        }).on('mouseout', function () {
            if (self.isAutoChange) self.autoChange();
        });
    };

    /**
     * 切换图片
     */
    Swiper.prototype.changePic = function () {
        let self = this;
       
        if (self.animateStyle === 'animate') {
            self.lock=true
            $('.swiperUl', this.wrap).animate({
                left: -this.nowIndex * this.divWidth
               
            }, function () {
                self.lock = false;
            })
        } else if (self.animateStyle === 'fade') {
            self.lock=true
            $('.swiperUl>li', this.wrap).fadeOut().eq(self.nowIndex).fadeIn(function () {
                self.lock = false;
            })
        }
        $(this.wrap).find('.swiperSpan').each(function (index, ele) {
            if (self.nowIndex % self.list.length == index) {
                $(ele).css({
                    backgroundColor: '#fff'
                })
            } else {
                $(ele).css({
                    backgroundColor: 'rgba(255,255,255,0.5)'
                })
            }
        })
    };

    /**
     * 自动切换图片 
     */
    Swiper.prototype.autoChange = function () {
        var self = this;
        clearInterval(this.timer);
        this.timer = setInterval(function () {
            // if (self.animateStyle === 'animate') {
            //     // if (self.nowIndex === self.list.length) {
            //     //     $('.swiperUl', self.wrap).css({
            //     //         left: 0
            //     //     })
            //     //     self.nowIndex = 0 //4
            //     // }
            //     // self.nowIndex++;

            // } else {
            //     self.nowIndex++;
            //     if (self.nowIndex == self.list.length) {
            //         self.nowIndex = 0;
            //     }

            // }
            // self.changePic();
            $('.rightBtn', self.wrap).trigger('click');
        }, this.autoTime)

    }
    //在jQuery上扩展swiper插件
    $.fn.extend({
        swiper: function (options) {
            obj = new Swiper(options, this);
            obj.init();
            return this;
        }
    })
}())