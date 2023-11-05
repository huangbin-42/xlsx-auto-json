/**
 * 配置文件
 * @param config
 * @returns
 */
export var defineConfig = function (config) { return config; };
/**
 * 添加转义字符
 * @param str
 * @returns
 */
export var escapeSpecialChars = function (str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
};
