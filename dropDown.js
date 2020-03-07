(function() {
    class Dropdown {
        constructor({ width, colWidth, list, direction }, wrap) {
            this.wrap = wrap || $('body');
            this.list = list;
            this.width = width || 280;
            this.colWidth = colWidth;
            this.direction = direction || 'y';
            this.init = function() {
                this.createDom();
                this.initStyle();
            }
        }

        createDom() {
            let wrapper = $('<div class="dropDownWrapper"></div>');
            this.list.forEach((ele, index) => {
                let dl = $(`<dl></dl>`);
                dl.appendTo(wrapper);
                let title = ele.title;
                if (title) {
                    $(`<dt>${title}</dt>`).appendTo(dl)
                }
                dl.appendTo(wrapper);
                ele.items.forEach((item, i) => {
                    let dd = $(`<dd><a href="${item.href}">${item.name}</a></dd>`);
                    dd.appendTo(dl);
                })
            });

            wrapper.appendTo(this.wrap);
        }
        initStyle() {
            let self = this
            $(this.wrap).css({
                position: 'relative'
            }).hover(function() {
                $('.dropDownWrapper', self.wrap).css({
                    display: 'block'
                })
            }, function() {
                $('.dropDownWrapper', self.wrap).css({
                    display: 'none'
                })
            }).find('dt').css({
                fontWeight: 'bold',
                color: '#000'
            }).end().find('dd').css({
                float: 'left',
                width: this.colWidth
            });
            if (this.direction === 'y') {
                this.wrap.find('.dropDownWrapper').css({
                    position: 'absolute',
                    border: '1px solid #ccc',
                    borderTopColor: ' transparent',
                    width: this.width,
                    top: 29,
                    backgroundColor: 'white',
                    display: 'none'
                })
                if (this.list.length > 1) {
                    this.wrap.find('dl:not(:first)').css({
                        borderTop: '1px solid #f1f1f1'
                    })
                }
                this.wrap.find('dl').css({
                    width: '100%',
                    overflow: 'hidden',
                    padding: '10px 0px 10px 15px',
                    boxSizing: 'border-box',
                    whiteSpace: 'nowrap'
                })
            } else {
                this.wrap.find('.dropDownWrapper').css({
                    position: 'absolute',
                    border: '1px solid #ccc',
                    borderTopColor: ' transparent',
                    width: this.width,
                    top: 29,
                    backgroundColor: 'white',
                    display: 'none',
                    right: -87,
                    padding: '15px 0'
                });
                this.wrap.find('.dropDownWrapper dl').css({
                    float: 'left',
                    width: 300,
                    overflow: 'hidden',
                    padding: '0px 0px 0px 20px',
                    boxSizing: 'border-box',
                    whiteSpace: 'nowrap',
                })
                if (this.list.length > 1) {
                    this.wrap.find('dl:not(:first)').css({
                        borderLeft: '1px solid #f1f1f1'
                    })
                }
            }

        }

    }

    $.fn.extend({
        dropdown: function(options) {
            const obj = new Dropdown(options, this);
            obj.init();
        }
    })
}())