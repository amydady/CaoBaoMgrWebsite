/**
 * 全局配置
 */

//http请求相关配置
var CommonConfig = {
    httpReqConfig: {
        headers: { 'Content-Type': 'application/json' }
    }
};

CommonConfig.configApp = function(app){
    app.config(['$locationProvider', function ($locationProvider) {
        $locationProvider.html5Mode(
          {
            enabled: true,
            requireBase: false//必须配置为false，否则<base href=''>这种格式带base链接的地址才能解析
          });
      }]);
};

var debugFlag = true

