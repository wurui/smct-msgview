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
            $.getJSON('http://localhost:8000/carnotify/getnotify?_id='+_id+'&callback=?',function(data){
                if(data && data.sts) {
                    data.time = timeformat(data.sts);
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
