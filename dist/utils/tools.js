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
    return str.replace(/"/g, '\\"');
};
/**
 * 去除空数组
 * @param array
 * @returns
 */
export var filterArray = function (array) {
    return array.filter(function (item) { return Array.isArray(item) && item.length > 0; });
};
/**
 * 转换为首字母大写并去除空格key
 * @param str
 * @returns
 */
export function toCamelCaseFromSpace(str) {
    return str.replace(/\s(.)/g, function (_, c) { return c.toUpperCase(); });
}
