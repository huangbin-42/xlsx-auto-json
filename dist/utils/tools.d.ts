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
export declare const escapeSpecialChars: (str: string) => string;
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
 * 使用正则表达式去除多余的回车
 * @param input
 * @returns
 */
export declare function removeExtraLineBreaks(input: string): string;
