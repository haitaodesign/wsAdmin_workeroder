onmessage = function(e) {
    var result = e.data;
    var weiboData = result.map(function(serieData, idx) {
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
    weiboData[0].sort(function() {
        return 0.5 - Math.random();
    });
    weiboData[1].sort(function() {
        return 0.5 - Math.random();
    });
    weiboData[2].sort(function() {
        return 0.5 - Math.random();
    });

    var bigdata = [];
    bigdata.push(weiboData[0]);
    var bigdata1 = weiboData[0].concat(weiboData[1]);
    bigdata.push(bigdata1);
    var bigdata2 = bigdata1.concat(weiboData[2]);
    bigdata.push(bigdata2);

    postMessage(bigdata);
}