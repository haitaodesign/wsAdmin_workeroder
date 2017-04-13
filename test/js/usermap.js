layui.config({
    // dir:'',          //layui.js 所在路径（注意，如果是script单独引入layui.js，无需设定该参数。），一般情况下可以无视
    version: false, //一般用于更新模块缓存，默认不开启。设为true即让浏览器不缓存。也可以设为一个固定的值，如：201610
    debug: false, //用于开启调试模式，默认false，如果设为true，则JS模块的节点会保留在页面
    base: '/test/js/' //设定扩展的Layui模块的所在目录，一般用于外部模块扩展
});
layui.use(['map'], function() {
    var map = layui.map;
    //传入id,初始化echart实例
    map.init();
    $.get('/test/data/weibodata.json', function(weiboData) {
        var weiboData = weiboData.map(function(serieData, idx) {
            var px = serieData[0] / 1000;
            var py = serieData[1] / 1000;
            var res = [
                [px, py]
            ];

            for (var i = 2; i < serieData.length; i += 2) {
                var dx = serieData[i] / 1000;
                var dy = serieData[i + 1] / 1000;
                var x = px + dx;
                var y = py + dy;
                res.push([x.toFixed(2), y.toFixed(2), 1]);

                px = x;
                py = y;
            }
            return res;
        });
        option = {
            series: [{
                name: '弱',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbolSize: 1,
                large: true,
                itemStyle: {
                    normal: {
                        shadowBlur: 2,
                        shadowColor: 'rgba(37, 140, 249, 0.8)',
                        color: 'rgba(37, 140, 249, 0.8)'
                    }
                },
                data: weiboData[0].slice(0, 100),
            }]
        };
        var count = 100;
        console.log(weiboData[0].length);

        function getdata(count) {
            return weiboData[0].slice(count, count + 100);
        }
        console.log(getdata(100));
        console.log(option.series[0].data);

        function add_data() {

        }

        // setInterval(function() {
        //     var getarr = getdata(count);
        //     var concatarr = option.series[0].data;
        //     concatarr.concat(getarr);
        //     option.series[0].data = concatarr;

        //     console.log(concatarr.concat(getarr));
        //     map.set_Options(option);
        //     count += 100;
        //     //console.log(count);
        //     //console.log(getarr);
        // }, 1000);



    });

});