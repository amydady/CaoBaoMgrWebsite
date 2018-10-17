var StringUtil = {
    
    //判断字符是否为空的方法
    isEmpty(obj) {
        if (typeof obj == "undefined" || obj == null || obj == "") {
            return true;
        } else {
            return false;
        }
    },

    isNotEmpty(obj) {
        return !StringUtil.isEmpty(obj);
    }
}