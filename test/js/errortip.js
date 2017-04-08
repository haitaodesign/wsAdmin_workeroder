layui.define([
    'layer'
], function(exports) {
    'use strict';
    var $ = layui.jquery,
        layer = layui.layer;
    var errortip = {
        thorwError: function(msg) {
            throw new Error(msg);
            return;
        },
        msgError: function(msg) {
            layer.msg(msg, {
                icon: 5
            });
            return;
        }
    };
    exports('errortip', errortip);
});