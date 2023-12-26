import { XlsxAutoJsonConfigProps } from "../@types";

/**
 * 配置文件
 * @param config 
 * @returns 
 */
export const defineConfig = (config: XlsxAutoJsonConfigProps) => config

/**
 * 添加转义字符
 * @param str 
 * @returns 
 */
export const escapeSpecialChars = (inputString: string): string => {
    return inputString.replace(/(["{}])/g, '\\$1');
}

/**
 * 删除转义字符
 * @param str 
 * @returns 
 */
export const removeSpecialChars = (str: string): string => {
    const specialCharacters = /[-\/\\^$*+?,():|[\]{}]/g;
    const result = str?.replace(specialCharacters, "");
    return result;
}


/**
 * 去除空数组
 * @param array 
 * @returns 
 */
export const filterArray = (array: any[]) => {
    return array?.filter((item) => Array.isArray(item) && item.length > 0)
}

/**
 * 转换为首字母大写并去除空格key
 * @param str 
 * @returns 
 */
export function toCamelCaseFromSpace(str: string) {
    return str?.replace(/\s(.)/g, (_, c) => c.toUpperCase());
}

/**
 * 去除多余的回车
 * @param input 
 * @returns 
 */
export function removeExtraLineBreaks(input: string): string {
    return input?.replace(/(\r\n|\n|\r)+/g, '\n');
}