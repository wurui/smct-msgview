define(['zepto','mustache','oxjs'],function(undef,Mustache,OXJS){
    var apiHost = '//www.shaomachetie.com';
    if(document.documentElement.getAttribute('env')=='local') {
        apiHost = 'http://192.168.1.103:8000'
    }
    var _id=OXJS.queryString('_id');
    var timeformat = function (d) {
        if (typeof d != 'object') {
            d = new Date(d);
        }
        var prefix0 = function (n) {
            return (n / 100).toFixed(2).substr(2)
        };
        return [d.getFullYear(), prefix0(d.getMonth() + 1), prefix0(d.getDate())].join('-') + ' ' + [d.getHours(), prefix0(d.getMinutes()), prefix0(d.getSeconds())].join(':')
    };

    var echoNotify=function(echo,fn){

        $.getJSON(apiHost+'/carnotify/echonotify?&callback=?',{
            _id:_id,
            echo:echo
        },function(data){
            fn && fn(data)
        });
    };
  return {
    init:function($mod){
        var tpl=$('.J_tpl', $mod).html();
        var operation=$mod.attr('data-op');
        var getAndRender=function(){
            if(_id){

                $.getJSON(apiHost+'/carnotify/getnotify?_id='+_id+'&callback=?',function(data){
                    if(data && data.sts) {
                        data.time = timeformat(data.sts);
                        data.imgs=data.imgs.split(',')
                        data.shortcuts= operation && Date.now() - data.sts  < 3600*1000;
                        $mod.html(Mustache.render(tpl, data))
                    }else{
                        $mod.html('<div class="empty">页面已过期</div>');
                    }
                });

            }else{
                $mod.html('<div class="empty">无信息</div>')
            };
        };
        getAndRender();


        $mod.on('click',function(e){
            var tar= e.target,
                role=tar.getAttribute('data-role');
            switch (role){
                case 'msd':
                    echoNotify('msd',getAndRender)
                    break
                case 'sendno':
                    echoNotify('sendno',getAndRender)
                    break
            }
        })



    }
  }
})
