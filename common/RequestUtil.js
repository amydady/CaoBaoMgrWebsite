var RequestUtil={}

//截取url数据方法
RequestUtil.getQueryParamByName = function (name) {
    var search = document.location.search;
    // console.log("RequestUtil.getQueryParamByName:search:",document.location);

    var pattern = new RegExp("[?&]" + name + "\=([^&]+)", "g");
    var matcher = pattern.exec(search);
    var items = null;
    if (null != matcher) {
        try {
            items = decodeURIComponent(decodeURIComponent(matcher[1]));
        } catch (e) {
            try {
                items = decodeURIComponent(matcher[1]);
            } catch (e) {
                items = matcher[1];
            }
        }
    }
    // console.log("RequestUtil.getQueryParamByName:items:",items);
    return items;
};