var StringUtil = {

    //判断字符是否为空的方法
    isEmpty(obj) {
        return typeof obj == "undefined" || obj == null || obj == "";
    },

    isNotEmpty(obj) {
        return !StringUtil.isEmpty(obj);
    }
}