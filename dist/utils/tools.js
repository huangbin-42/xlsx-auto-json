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
    var specialCharacters = /[\\^$*+?()|[\]:"]/g;
    var result = str === null || str === void 0 ? void 0 : str.replace(specialCharacters, "\\$&");
    return result;
};
export var removeSpecialChars = function (str) {
    var specialCharacters = /[-\/\\^$*+?,():|[\]{}]/g;
    var result = str === null || str === void 0 ? void 0 : str.replace(specialCharacters, "");
    return result;
};
/**
 * 去除空数组
 * @param array
 * @returns
 */
export var filterArray = function (array) {
    return array === null || array === void 0 ? void 0 : array.filter(function (item) { return Array.isArray(item) && item.length > 0; });
};
/**
 * 转换为首字母大写并去除空格key
 * @param str
 * @returns
 */
export function toCamelCaseFromSpace(str) {
    return str === null || str === void 0 ? void 0 : str.replace(/\s(.)/g, function (_, c) { return c.toUpperCase(); });
}
/**
 * 使用正则表达式去除多余的回车
 * @param input
 * @returns
 */
export function removeExtraLineBreaks(input) {
    return input === null || input === void 0 ? void 0 : input.replace(/(\r\n|\n|\r)+/g, '\n');
}
