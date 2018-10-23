/**
 * 全局配置
 */

//http请求相关配置
var CommonConfig = {

};

CommonConfig.configApp = function (app) {
    app.config(['$locationProvider', function ($locationProvider) {
        $locationProvider.html5Mode(
            {
                enabled: true,
                requireBase: false//必须配置为false，否则<base href=''>这种格式带base链接的地址才能解析
            });
    }]);
};

CommonConfig.httpReqConfig = {
    headers: { 'Content-Type': 'application/json' }
}

CommonConfig.fileUploadReqConfig = {
    headers: { 'Content-Type': undefined },
    transformRequest: angular.identity
  };


// Rest接口基路径定义
CommonConfig.RestBaseUrl = {
    // CaoBaoService: 'http://47.100.218.102:8006/rest/littlecat/caobao/'
    CaoBaoService: 'http://localhost:8006/rest/littlecat/caobao/'
};
