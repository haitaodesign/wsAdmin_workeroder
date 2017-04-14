layui.define(function(exports) {
    'use strict';

    var mapchart = echarts.init(document.getElementById("usermap"));




    //配置项数据    
    var options = {
        backgroundColor: '#404a59',
        title: {
            text: '注册用户趋势',
            subtext: 'From 数据中心',
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {},

        geo: {
            map: 'china',
            roam: true,
            //center: [115.91, 29.71],
            zoom: 1,
            scaleLimit: {
                min: 0.5,
                max: 3,
            },
            nameMap: {
                'China': '中国'
            },
            selectedMode: false, //多个选中
            label: {
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: '#111'
                },
                emphasis: {
                    //areaColor: '#2a333d'
                }
            },
            zlevel: 0,
            z: 2,
            left: '100px',
            top: '100px',
            right: 'auto',
            bottom: 'auto',
            layoutCneter: [],
            layoutSize: 50,
            regions: [{ //在地图中对特定的区域配置样式

            }],
            silent: false //图形是否不响应和触发鼠标事件
        }
    };



    var map = {
        init: function() {
            mapchart.setOption(options);
            $(window).resize(mapchart.resize);
        },
        set_Options: function(option) {
            mapchart.setOption(option);
            $(window).resize(mapchart.resize);
        }
    };


    exports('map', map);

});