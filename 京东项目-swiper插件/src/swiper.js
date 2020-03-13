(function() {
    //构造函数
    function Swiper(options, wrap) {
        this.wrap = wrap;
        this.imgArr = options.imgArr || [];
        this.divWidth = options.divWidth || wrap.width();
        this.divHeight = options.divHeight || wrap.height();
        this.animateStyle = options.animateStyle || 'fade';
        this.turnBtn = options.turnBtn != undefined ? options.turnBtn : true;
        this.smallCircle = options.smallCircle != undefined ? options.smallCircle : true;
        this.autoTime = options.autoTime || 3000;
        this.isAutoChange = options.isAutoChange != undefined ? options.isAutoChange : true;
        this.picNum = this.imgArr.length;
        this.nowIndex = 0;
        this.lock = false;
        this.timer = null;
        this.init = function() {
            this.createDiv();
            this.initStyle();
            this.bindEvent();
            if (this.isAutoChange) {
                this.autoChange();
            }
        };
    };

    //创建结构
    Swiper.prototype.createDiv = function() {
        let length = this.imgArr.length;
        let swiperDiv = $('<div class="swiperDiv"></div>');
        let swiperUl = $('<ul class="swiperUl"></ul>');
        let swiperSpanWrapper = $('<div class="spanWrapper"></div>');

        this.imgArr.forEach((ele, index) => {
            if (this.smallCircle) {
                $(`<span class="swiperSpan" data-id=${index}></span>`).appendTo(swiperSpanWrapper);
            }
            $(`<li><img src=${ele}></li>`).appendTo(swiperUl);

        });
        if (this.animateStyle === 'animate') {
            $(`<li><img src=${this.imgArr[0]}></img></li>`).appendTo(swiperUl);
            this.picNum++;
        }
        swiperUl.appendTo(swiperDiv);
        if (this.turnBtn) {
            console.log(this.turnBtn)
            $('<div class="leftBtn Btn"></div><div class="rightBtn Btn"></div>').appendTo(swiperDiv)
        }
        swiperSpanWrapper.appendTo(swiperDiv);
        swiperDiv.appendTo(this.wrap);
    };

    //初始化样式
    Swiper.prototype.initStyle = function() {
        const self = this;
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
        }).find('img').css({
            width: this.divWidth,
            height: this.divHeight
        })

        $('.swiperDiv', this.wrap).find('.spanWrapper').css({
            position: 'absolute',
            bottom: 10,
            height: 10,
            width: '100%',
            paddingLeft: `calc(50% - ${(this.imgArr.length-1)*10-5}px)`
        }).find('span').css({
            float: 'left',
            // dispaly: 'inline-block',
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
        $('.Btn', this.wrap).hover(function() {
            $('.Btn', self.wrap).css({
                backgroundColor: 'rgba(0,0,0,0.5)',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            })
        }, function() {
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
            backgroundImage: 'url(./img/back.png)',
            backgroundSize: '50% 50%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'

        });
        $('.rightBtn', self.wrap).css({
            right: 0,
            borderTopLeftRadius: '23px',
            borderBottomLeftRadius: '23px',
            backgroundImage: 'url("./img/next.png")',
            backgroundSize: '50% 50%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        });


    };

    //事件监听
    Swiper.prototype.bindEvent = function() {
        var self = this;
        //上页按钮点击事件
        $('.leftBtn', self.wrap).on('click', function() {
            self.lockTool()
            clearInterval(self.timer);
            if (self.animateStyle === 'animate') {
                if (self.nowIndex == 0) { //为后面字符串类型的隐式转换，此处不使用全等
                    // console.log('已进入判断');
                    $('.swiperUl').css({
                        left: -self.imgArr.length * self.divWidth
                    })
                    self.nowIndex = self.imgArr.length //4
                }
                self.nowIndex--
            } else {


                self.nowIndex--;
                if (self.nowIndex == -1) {
                    self.nowIndex = 4
                }
            }; //3
            // console.log(self.nowIndex)
            self.changePic();
            if (self.isAutoChange) {
                self.autoChange();
            }
        });
        //右翻页按钮点击事件
        $('.rightBtn', self.wrap).on('click', function() {
                self.lockTool();
                clearInterval(self.timer);
                if (self.animateStyle === 'animate') {
                    if (self.nowIndex === self.imgArr.length) {
                        $('.swiperUl').css({
                            left: 0
                        })
                        self.nowIndex = 0 //4
                    }
                    self.nowIndex++;
                } else {
                    self.nowIndex++;
                    if (self.nowIndex == self.imgArr.length) {
                        self.nowIndex = 0;
                    }
                }
                //3
                self.changePic();
                if (self.isAutoChange) {
                    self.autoChange();
                }
            })
            //底部中间小圆点鼠标移入移出监听
        $('.swiperSpan', self.wrap).on('mouseover', function(e) {
            self.lockTool()
            clearInterval(self.timer);
            console.log(self.timer)
            self.nowIndex = $(e.target).attr('data-id'); //注意此处最终得到的是字符串类型
            // console.log(self.nowIndex)
            self.changePic();

        }).on('mouseout', function() {
            if (self.isAutoChange) {
                self.autoChange();
            }
        });
    };

    //切换图片方法
    Swiper.prototype.changePic = function() {
        console.log(this.nowIndex)
        let self = this;
        if (self.animateStyle === 'animate') {
            $('.swiperUl', this.wrap).animate({
                left: -this.nowIndex * this.divWidth

            }, function() {
                self.lock = false;
            })
        } else if (self.animateStyle === 'fade') {
            $('.swiperUl>li', this.wrap).fadeOut().eq(self.nowIndex).fadeIn(function() {
                self.lock = false;
            })
        }
        $(this.wrap).find('.swiperSpan').each(function(index, ele) {
            if (self.nowIndex % self.imgArr.length == index) {
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

    //自动切换图片方法
    Swiper.prototype.autoChange = function() {
        var self = this;
        clearInterval(this.timer);
        console.log(this.timer)
        this.timer = setInterval(function() {
            self.lockTool();
            console.log('autoChange')
            if (self.animateStyle === 'animate') {
                if (self.nowIndex === self.imgArr.length) {
                    $('.swiperUl', self.wrap).css({
                        left: 0
                    })
                    self.nowIndex = 0 //4
                }
                self.nowIndex++;
            } else {
                self.nowIndex++;
                if (self.nowIndex == self.imgArr.length) {
                    self.nowIndex = 0;
                }

            }

            // console.log(self.nowIndex)
            //3

            self.changePic();
        }, this.autoTime)

    }

    //防抖锁
    Swiper.prototype.lockTool = function() {
        if (this.lock) {
            return;
        } else {
            this.lock = true;
        }
        // console.log('lock')
    };

    //在jQuery上加入swiper插件
    $.fn.extend({
        swiper: function(options) {
            obj = new Swiper(options, this);
            obj.init();
            return this;
        }
    })
}())