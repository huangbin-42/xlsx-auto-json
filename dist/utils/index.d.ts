/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import { XlsxAutoJsonConfigProps } from "../@types";
import fs from 'fs';
/**
 * 获取xlsx数据
 * @param fromXlsxPath
 * @returns
 */
export declare const getXlsx: (path: string) => any[];
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
/**
 * 使用fs生成文件
 * @param {fs.PathOrFileDescriptor} url
 * @param {(string | NodeJS.ArrayBufferView)} text
 * @param {Lang} lang
 */
export declare const writeFile: (url: fs.PathOrFileDescriptor, text: string | NodeJS.ArrayBufferView, lang?: string) => void;
export declare class TranslateItem {
    private _contrastLangIndex;
    private _defaultValueIndex;
    private _initKey?;
    constructor(props: Pick<XlsxAutoJsonConfigProps, 'contrastLangIndex' | 'defaultValueIndex' | 'initKey'>);
    /**
     * 分隔字符串
     * @param text
     * @param reg
     * @returns
     */
    private _strToMap;
    createLangMap(item: any[], config: ReturnType<typeof getTranslateMap>): void;
}
