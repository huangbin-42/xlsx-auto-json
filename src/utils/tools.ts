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
export const escapeSpecialChars = (str: string): string => {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}