/**
 * Table处理工具
 */

//inner function

//检测给出的数据范围是否合理
function validDataRegin(tableid, dataStartIndex, dataNum) {
    var table = document.getElementById(tableid);
    var rowNum = table.rows.length;

    if (rowNum < dataStartIndex + dataNum - 1) {
        console.log('TableUtil.validDataRegin:[rowNum < dataStartIndex + dataNum - 1] is not OK!')
        return false;
    }

    return true;
}

//对外提供的接口
var TableUtil = new Object();

TableUtil.selectAllOrCncel = function (tableid, tag, dataStartIndex, dataNum) {
    var table = document.getElementById(tableid);

    if (!validDataRegin(tableid, dataStartIndex, dataNum)) {
        return;
    }

    for (var i = dataStartIndex; i < dataStartIndex + dataNum; i++) {
        var row = table.rows[i];
        var inputs = row.getElementsByTagName('input');

        for (var j = 0; j < inputs.length; j++) {
            if (inputs[j].type == 'checkbox') {
                inputs[j].checked = tag;
            }
        }
    }
};

TableUtil.getSelectedIds = function (tableid, idColIndex, dataStartIndex, dataNum) {
    var table = document.getElementById(tableid);
    var ids = [];

    if (!validDataRegin(tableid, dataStartIndex, dataNum)) {
        return ids;
    }

    for (var i = dataStartIndex; i < dataStartIndex + dataNum; i++) {
        var row = table.rows[i];
        var inputs = row.getElementsByTagName('input');

        for (var j = 0; j < inputs.length; j++) {
            if (inputs[j].type == 'checkbox' && inputs[j].checked == true) {
                ids.push(row.cells[idColIndex].innerText);
            }
        }
    }

    console.log(ids);

    return ids;
};

