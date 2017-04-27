define(['zepto','mustache','oxjs'],function(undef,Mustache,OXJS){
    var timeformat = function (d) {
        if (typeof d != 'object') {
            d = new Date(d);
        }
        var prefix0 = function (n) {
            return (n / 100).toFixed(2).substr(2)
        };
        return [d.getFullYear(), prefix0(d.getMonth() + 1), prefix0(d.getDate())].join('-') + ' ' + [d.getHours(), prefix0(d.getMinutes()), prefix0(d.getSeconds())].join(':')
    };
  return {
    init:function($mod){
        var _id=OXJS.queryString('_id');

        if(_id){
            var apiHost = 'http://www.shaomachetie.com';
            if(document.documentElement.getAttribute('env')=='local') {
                apiHost = 'http://localhost:8000'
            }
            $.getJSON(apiHost+'/carnotify/getnotify?_id='+_id+'&callback=?',function(data){
                if(data && data.sts) {
                    data.time = timeformat(data.sts);
                    data.imgs=data.imgs.split(',')
                    $mod.html(Mustache.render($('.J_tpl', $mod).html(), data))
                }else{
                    $mod.html('<div class="empty">页面已过期</div>');
                }
            })

        }else{
            $mod.html('<div class="empty">无信息</div>')
        }



    }
  }
})
