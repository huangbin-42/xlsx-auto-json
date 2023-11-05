import { XlsxAutoJsonConfigProps } from "../@types";
/**
 * 获取xlsx数据
 * @param fromXlsxPath
 * @returns
 */
export declare const getXlsx: (path: string) => any[];
export declare const getJson: (path: string) => Promise<Record<string, any>>;
/**
 * 获取已有翻译json
 * @param config
 * @returns
 */
export declare const getTranslateMap: (config: XlsxAutoJsonConfigProps) => {
    map: Map<any, any>;
    targetLang: string;
    targetIndex: number;
    outPath: string;
}[];
