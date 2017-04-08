layui.define([
    'layer'
], function(exports) {
    'use strict';
    var $ = layui.jquery,
        layer = layui.layer;
    var channeloptions = {
        url: '',
        fixedColumns: true, //是否启用固定列
        fixedNumber: 3, //固定列列数
        minimumCountColumns: 5, //最小显示列数
        striped: true, //隔行显示颜色
        search: true, //是否启用搜索框
        pageList: [20, 30, 50], //分页下拉框条数
        showExport: true, //是否启用导出
        showColumns: false, //是否显示/隐藏列下来框
        pagination: true, //是否启用分页
        pageSize: 15, //设置分页之后，页面的显示条数
        reorderableColumns: true, //是否启用列拖拽
        height: '700', //表格固定高度
        maxMovingRows: 15, //当前拖动的行数
        columns: [{
                //field: 'Number',
                title: 'No.',
                formatter: function(value, row, index) {
                    return index + 1;
                },
                switchable: false, //是否启用该字段隐藏
                width: '40'
            },
            {
                field: 'id',
                title: '编号',
                width: '67',
                sortable: true,
                switchable: false
            },
            {
                field: 'name',
                title: '渠道名称',
                sortable: true,
                switchable: false,
                width: '94',
                //formatter: subChannelListFormatter
            },
            {
                field: 'TotalInvited',
                title: '被邀请用户数',
                sortable: true,
                titleTooltip: '通过老用户介绍的用户',
                visible: false
            },
            {
                field: 'Inviter',
                title: '邀请占比(%)',
                sortable: true,
                titleTooltip: '注册用户到绑卡用户的转化百分比',
                visible: false
            },
            {
                field: 'TotalReg',
                title: '注册用户数',
                sortable: true
            },
            {
                field: 'MaxReg',
                title: '日最高注册人数',
                sortable: true,
                visible: false
            },
            {
                field: 'MinReg',
                title: '日最低注册人数',
                sortable: true,
                visible: false
            },
            {
                field: 'AvgReg',
                title: '日平均注册人数',
                sortable: true,
                visible: false
            },
            {
                field: 'Reg',
                title: '注册转化率(%)',
                sortable: true,
                titleTooltip: '注册用户到绑卡用户的转化百分比'
            },
            {
                field: 'TotalBindCard',
                title: '绑卡用户数',
                sortable: true
            },
            {
                field: 'MaxBindCard',
                title: '日最高绑卡人数',
                sortable: true,
                visible: false
            },
            {
                field: 'MinBindCard',
                title: '日最低绑卡人数',
                sortable: true,
                visible: false
            },
            {
                field: 'AvgBindCard',
                title: '日平均绑卡人数',
                sortable: true,
                visible: false
            },
            {
                field: 'Card',
                title: '绑卡转化率(%)',
                sortable: true,
                titleTooltip: '绑卡用户到充值用户的转化百分比'
            },
            {
                field: 'TotalRechargeNum',
                title: '充值用户数',
                sortable: true
            },
            {
                field: 'MaxRechargeNum',
                title: '日最高充值人数',
                sortable: true,
                visible: false
            },
            {
                field: 'MinRechargeNum',
                title: '日最低充值人数',
                sortable: true,
                visible: false
            },
            {
                field: 'AvgRechargeNum',
                title: '日平均充值人数',
                sortable: true,
                visible: false
            },
            {
                field: 'MaxRechargeJe',
                title: '日最高充值金额',
                sortable: true,
                visible: false
            },
            {
                field: 'MinRechargeJe',
                title: '日最低充值金额',
                sortable: true,
                visible: false
            },
            {
                field: 'AvgRechargeJe',
                title: '日平均充值金额',
                sortable: true,
                visible: false
            },
            {
                field: 'Recjarge',
                title: '充值转化率(%)',
                sortable: true,
                titleTooltip: '充值用户到投资用户的转化百分比'
            },
            {
                field: 'TotalInvestNum',
                title: '投资用户数',
                sortable: true
            },
            {
                field: 'MaxInvestNum',
                title: '日最高投资人数',
                sortable: true,
                visible: false
            },
            {
                field: 'MinInvestNum',
                title: '日最低投资人数',
                sortable: true,
                visible: false

            },
            {
                field: 'AvgInvestNum',
                title: '日平均投资人数',
                sortable: true,
                visible: false
            },
            {
                field: 'MaxInvestJe',
                title: '日最高投资金额',
                sortable: true,
                visible: false
            },
            {
                field: 'MinInvestJe',
                title: '日最低投资金额',
                sortable: true,
                visible: false
            },
            {
                field: 'AvgInvestJe',
                title: '日平均投资金额',
                sortable: true,
                visible: false
            },
            {
                field: 'TotalDownloadappNum',
                title: 'APP下载次数',
                sortable: true,
                visible: false
            },
            {
                field: 'MaxDownloadappNum',
                title: '日最高APP下载次数',
                sortable: true,
                visible: false
            },
            {
                field: 'MinDownloadappNum',
                title: '日最低APP下载次数',
                sortable: true,
                visible: false
            },
            {
                field: 'AvgDownloadappNum',
                title: '日平均APP下载次数',
                sortable: true,
                visible: false
            },
            {
                field: 'MaxWithdrawalNum',
                title: '日最高提现人数',
                sortable: true,
                visible: false
            },
            {
                field: 'MinWithdrawalNum',
                title: '日最低提现人数',
                sortable: true,
                visible: false
            },
            {
                field: 'AvgWithdrawalNum',
                title: '日平均提现人数',
                sortable: true,
                visible: false
            },
            {
                field: 'MaxWithdrawalJe',
                title: '日最高提现金额',
                sortable: true,
                visible: false
            },
            {
                field: 'MinWithdrawalJe',
                title: '日最低提现金额',
                sortable: true,
                visible: false
            },
            {
                field: 'AvgWithdrawalJe',
                title: '日平均提现金额',
                sortable: true,
                visible: false
            },
            {
                field: 'TotalJcz',
                title: '净充值总额',
                sortable: true,
                visible: true
            },
            {
                field: 'MaxJcz',
                title: '日最高净充值',
                sortable: true,
                visible: false
            },
            {
                field: 'MinJcz',
                title: '日最低净充值',
                sortable: true,
                visible: false
            },
            {
                field: 'TotalDs',
                title: '待收总额',
                sortable: true,
                visible: true
            },
            {
                field: 'MaxDs',
                title: '日最高待收',
                sortable: true,
                visible: false
            },
            {
                field: 'MinDs',
                title: '日最低待收',
                sortable: true,
                visible: false
            },
            {
                field: 'AvgDs',
                title: '人均待收额',
                sortable: true,
                visible: false,
                visible: false
            },
            {
                field: 'Roi',
                title: 'ROI',
                sortable: true,
                visible: true
            },
            {
                field: 'TotalCost',
                title: '累计费用',
                sortable: true,
                visible: true
            },
            {
                field: 'MaxCost',
                title: '日最高费用',
                sortable: true,
                visible: false
            },
            {
                field: 'MinCost',
                title: '日最低费用',
                sortable: true,
                visible: false
            },
            {
                field: 'AvgCost',
                title: '日平均费用',
                sortable: true,
                visible: false
            },
            {
                field: 'jqroiScore',
                title: '加权日ROI评分',
                sortable: true,
                visible: false
            },
            {
                field: 'jqjtzScore',
                title: '加权均投资评分',
                sortable: true,
                visible: false
            },
            {
                field: 'rjzcScore',
                title: '日均注册量评分',
                sortable: true,
                visible: false
            },
            {
                field: 'qdzhlScore',
                title: '渠道转化率评分',
                sortable: true,
                visible: false
            },
            {
                field: 'ljjczScore',
                title: '累计净充值评分',
                sortable: true,
                visible: false
            },
            {
                field: 'Score',
                title: '评分',
                sortable: true,
                visible: true
            },
            {
                field: 'operate',
                title: '操作',
                align: 'center',
                formatter: operateFormatter
            },
            {
                field: 'cnt',
                title: '子渠道数量',
                visible: false
            }
        ]
    };

    function operateFormatter(value, row, index) {
        var detailbtnhtml = '<a class="layui-btn layui-btn-mini add" data-id="' + row.id + '" data-name="';
        var cname;
        if (row.name == null) {
            cname = "无渠道名称";
        } else {
            cname = row.name;
        }
        detailbtnhtml += cname + '" data-url="/Channel/ChannelView?id=' + row.id + '&cpid=' + row.cpid;
        detailbtnhtml += '">详情</a>';
        return detailbtnhtml;
    };







    var channellist = {
        seturl: function(url) {
            channeloptions.url = url;
        },
        init: function($tablechannel) {
            if ($tablechannel !== undefined) {
                $tablechannel.bootstrapTable(channeloptions);
            } else {
                return;
            }
        },
    };
    exports('channellist', channellist);
});