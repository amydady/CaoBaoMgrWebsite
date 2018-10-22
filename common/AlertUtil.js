/**
 * 告警信息组件
 */


var AlertUtil = {
};

// 默认的告警消失时间
AlertUtil.defaultTimeout = 4000;

AlertUtil.alertWithCloseButton = function (type, targetElemId, content, timeout) {
    var targetElement = document.getElementById(targetElemId);

    var alertStr = " \
    <div class=\"alert alert-"+ type + " alert-dismissable\"> \
    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\"> \
      &times; \
    </button> "
        + content +
        "</div>";

    targetElement.innerHTML = alertStr;

    if (timeout != null && timeout != "undefined") {
        window.setTimeout(function () {
            $('[data-dismiss="alert"]').alert('close');
        }, timeout);
    }
};

AlertUtil.dangerWithCloseButton = function (targetElemId, content, timeout) {
    AlertUtil.alertWithCloseButton('danger', targetElemId, content, timeout);
};

AlertUtil.infoWithCloseButton = function (targetElemId, content, timeout) {
    AlertUtil.alertWithCloseButton('info', targetElemId, content, timeout);
};

AlertUtil.successWithCloseButton = function (targetElemId, content, timeout) {
    AlertUtil.alertWithCloseButton('success', targetElemId, content, timeout);
};

AlertUtil.warningWithCloseButton = function (targetElemId, content, timeout) {
    AlertUtil.alertWithCloseButton('warning', targetElemId, content, timeout);
};

AlertUtil.clearAlert = function (targetElemId) {
    var targetElement = document.getElementById(targetElemId);
    targetElement.innerHTML = "";
};