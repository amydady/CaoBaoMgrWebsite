/**
 * 告警信息组件
 */


var AlertUtil = {


};

AlertUtil.dangerWithCloseButton = function (targetElemId, content) {
    var targetElement = document.getElementById(targetElemId);

    var alertStr = " \
    <div class=\"alert alert-danger alert-dismissable\"> \
    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\"> \
      &times; \
    </button> "
        + content +
        "</div>";

    targetElement.innerHTML = alertStr;
};

AlertUtil.infoWithCloseButton = function (targetElemId, content) {
    var targetElement = document.getElementById(targetElemId);

    var alertStr = " \
    <div class=\"alert alert-info alert-dismissable\"> \
    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\"> \
      &times; \
    </button> "
        + content +
        "</div>";

    targetElement.innerHTML = alertStr;
};

AlertUtil.successWithCloseButton = function (targetElemId, content) {
    var targetElement = document.getElementById(targetElemId);

    var alertStr = " \
    <div class=\"alert alert-success alert-dismissable\"> \
    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\"> \
      &times; \
    </button> "
        + content +
        "</div>";

    targetElement.innerHTML = alertStr;
};

AlertUtil.warningWithCloseButton = function (targetElemId, content) {
    var targetElement = document.getElementById(targetElemId);

    var alertStr = " \
    <div class=\"alert alert-warning alert-dismissable\"> \
    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\"> \
      &times; \
    </button> "
        + content +
        "</div>";

    targetElement.innerHTML = alertStr;
};

AlertUtil.clearAlert = function (targetElemId) {
    var targetElement = document.getElementById(targetElemId);
    targetElement.innerHTML = "";
};