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
