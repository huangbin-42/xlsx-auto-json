import { XlsxAutoJsonConfigProps } from "../@types";
/**
 * 配置文件
 * @param config
 * @returns
 */
export declare const defineConfig: (config: XlsxAutoJsonConfigProps) => XlsxAutoJsonConfigProps;
/**
 * 添加转义字符
 * @param str
 * @returns
 */
export declare const escapeSpecialChars: (inputString: string) => string;
/**
 * 删除转义字符
 * @param str
 * @returns
 */
export declare const removeSpecialChars: (str: string) => string;
/**
 * 去除空数组
 * @param array
 * @returns
 */
export declare const filterArray: (array: any[]) => any[];
/**
 * 转换为首字母大写并去除空格key
 * @param str
 * @returns
 */
export declare function toCamelCaseFromSpace(str: string): string;
/**
 * 去除多余的回车
 * @param input
 * @returns
 */
export declare function removeExtraLineBreaks(input: string): string;
/**
 * 处理字符串，添加转义字符并去除多余的回车
 * @param str 输入字符串
 * @returns 处理后的字符串
 */
export declare const processString: (inputString: string) => string;
