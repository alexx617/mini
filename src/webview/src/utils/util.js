const util = {
    /**
     * 
     * 
     * @param {String || Number} num1 
     * @param {String || Number} num2    
     * @param {Number} mantissa 尾数
     */
    minus: function(num1, num2, mantissa = 2) {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        return (num1 - num2).toFixed(mantissa);
    },

    /**
         * 获取单个cookie 
         * 
         * @param {String} name cookie名
         * @returns {String} cookie值
         */
    getCookie: function(name) {
        var arr,
            reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if ((arr = document.cookie.match(reg))) {
            return arr[2];
        } else {
            return null;
        }
    },

    /**
         * 获取单个query
         * 
         * @param {String} name query名
         * @returns {String} query值
         */
    getQuery: function(name) {
        //心在query内找
        var value = decodeURIComponent(location.search).match(new RegExp("[?&]" + name + "=([^&]*)(&?)", "i"));
        if(value) return value[1];
        value = decodeURIComponent(location.hash).match(new RegExp("[?&]" + name + "=([^&]*)(&?)", "i"));
        return value ? value[1] : null;
    },

    /**
         * 
         * 
         * @param {any} queryObject 
         * @returns {String} queryString
         */
    genQuery: function(queryObject) {
        var query = "?";
        for (var name in queryObject) {
            query = query + name + "=" + queryObject[name] + "&";
        }
        return query.substring(0, query.length - 1);
    },

    /**
         * 
         * 
         * @param {String} url 
         * @param {String} query 
         * @param {String} value 
         * @returns {String} url
         */
    replaceQuery: function(url, query, value) {
        if (url.indexOf(query + "=") > 0) {
            url = url.replace(new RegExp(query + "=.+?&"), query + "=" + value + "&");
        } else {
            url = url + "&" + query + "=" + value;
        }
        return url;
    },
    addQuery: function(url, query, value) {
        if (util.getQuery(query)) {
            url = util.replaceQuery(url, query, value);
        }

        if (url.indexOf("&") > 0) {
            url = url + "&" + query + "=" + value;
        } else if (url.indexOf("?") > 0 && url[url.length - 1] !== "?") {
            url = url + "&" + query + "=" + value;
        } else {
            if(url[url.length - 1] !== "?"){
                url = url + "?" + query + "=" + value;
            }else {
                url = url + query + "=" + value;
            }
        }
        return url;
    },

    formatDateTime: function(inputTime, simple) {
        var date = new Date(inputTime);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? "0" + m : m;
        var d = date.getDate();
        d = d < 10 ? "0" + d : d;
        var h = date.getHours();
        h = h < 10 ? "0" + h : h;
        var minute = date.getMinutes();
        var second = date.getSeconds();
        minute = minute < 10 ? "0" + minute : minute;
        second = second < 10 ? "0" + second : second;
        if(simple)return y + "-" + m + "-" + d + "- " + h + ":" + minute + ":" + second;
        return y + "年" + m + "月" + d + "日 " + h + ":" + minute + ":" + second;
    },

    formatDateTimeWithoutSec: function(inputTime, simple) {
        var date = new Date(inputTime);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? "0" + m : m;
        var d = date.getDate();
        d = d < 10 ? "0" + d : d;
        var h = date.getHours();
        h = h < 10 ? "0" + h : h;
        var minute = date.getMinutes();        
        minute = minute < 10 ? "0" + minute : minute;
        if(simple)return y + "-" + m + "-" + d + "- " + h + ":" + minute;
        return y + "年" + m + "月" + d + "日 " + h + ":" + minute;
    },

    /**
     * 
     * @param {String} url 回调地址
     * @param {String} account 服务号账号
     */
    redirectToWx(url, account) {

        let appIds = { 
            'yingxiao': 'wxf57857ed05a3bec8',
            'ketang': 'wx76823cd614487b3c'
        };
        if(!account) account = 'ketang';
        if(!appIds[account]){
            account = 'ketang';
        } 

        let genRedirectUrlFns = {
            'yingxiao' : function (url) {
                return "http://yzs.tengyue360.com/redirect?account=yingxiao&redirect_url=" + encodeURIComponent(url)
            },
            'ketang': function (url) {
                return "http://m.tengyue360.com/redirect?account=ketang&redirectUrl=" + encodeURIComponent(url)
            }
        };

        let genRedirectFn = genRedirectUrlFns[account];

        let queryObject = {
            appid: appIds[account],
            redirect_uri: encodeURIComponent(genRedirectFn(url)),
            response_type: "code",
            scope: "snsapi_userinfo"
        };

        const resultUrl =
            "https://open.weixin.qq.com/connect/oauth2/authorize" +
            util.genQuery(queryObject) +
            "#wechat_redirect";
        window.location.replace(resultUrl);
    },

    /**
     * 
     * 刷新页面标题
     * @param {String} title 
     */
    reloadTitle(title) {
        var $body = document.querySelector('body');
        document.title = title;

        var $iframe = document.createElement('iframe');
        $iframe.setAttribute('style', "display:none");
        $iframe.setAttribute('src','');

        $iframe.addEventListener("load", function() {
            setTimeout(function() {
                // $iframe.removeEventListener('load');
                $iframe.remove();
            }, 0);
        });
        $body.appendChild($iframe)
    },

    setURLParams (url,arg,arg_val) {
        var pattern=arg+'=([^&]*)';
        var replaceText=arg+'='+arg_val; 
        if(url.match(pattern)){
            var tmp='/('+ arg+'=)([^&]*)/gi';
            tmp=url.replace(eval(tmp),replaceText);
            return tmp;
        }else{ 
            if(url.match('[\?]')){ 
               return url+'&'+replaceText; 
           }else{ 
               return url+'?'+replaceText; 
           } 
       }
    },

    changeStringToHtml (value) {
        return value
        .replace(/\r\n/g, "<br/>")
        .replace(/\n/g, "<br/>")
        .replace(/\s/g, "&nbsp;");
    },

    setCookie (c_name, value, expiredays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie = c_name+ "=" + escape(value) + ((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
    },

    checkMiniProgram (callback, needAlert) {
        if (!wx || !wx.miniProgram || !wx.miniProgram.getEnv) {
            callback && callback(false)
            needAlert && alert('不在微信小程序环境中。')
            return
        }
        wx.miniProgram.getEnv(function(res) {
            if (!res.miniprogram) {
                needAlert && alert('不在微信小程序环境中。')
            }
            callback && callback(res.miniprogram)
        })

    },

    goMiniPage (path) {
        util.checkMiniProgram(() => {
            wx.miniProgram.navigateTo({url: path})
        }, true)
    },

    isIphoneX () {
        return /iphone/gi.test(navigator.userAgent) && (screen.height == 812 && screen.width == 375)
    },

    isMiniprogram() {
        return new Promise((resolve)=>{
            if(!window.wx)return resolve(false);
            window.wx.miniProgram.getEnv(function(res) {
                return res.miniprogram ? resolve(true) : resolve(false);
            });
        })
    },

    setMiniProgramTitle(title){
        setTimeout(() => {
            let $header = document.querySelector('#miniProgram-header-title');
            $header.innerText = title;
            document.title = title;
        }, 0);
    },
    regmobile:function(v) {
        let reg=/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
        let a=reg.test(v)
        if(a){
            return true
        }else{
            if(!this.toast){return}
            if(!this.toast.show){
               setTimeout(()=>{this.toast.show=false},3000)
            }
            this.toast.show=true
            this.toast.toastdata="请输入正确的11位手机号"
        }
    },
    regphone:function(v){
        let reg=/^400[0-9]{7}|^800[0-9]{7}|^0[0-9]{2,3}-[0-9]{7,8}|^400-[0-9]{3,4}-[0-9]{3,4}|^800-[0-9]{3,4}-[0-9]{3,4}/
        let a=reg.test(v)
        if(a){
            return true
        }else{
            if(!this.toast){return}
            if(!this.toast.show){
              setTimeout(()=>{this.toast.show=false},3000)
             }
            this.toast.show=true
            this.toast.toastdata="请输入正确的座机号"
        }
    }
};

export default util;
