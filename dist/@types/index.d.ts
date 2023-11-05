export interface XlsxAutoJsonConfigProps {
    /** 翻译文案拼接key */
    initKey?: string;
    /**
     * 翻译转换文件地址(xlsx)
     * @type {string}
     * @description
     */
    fromXlsxPath: string;
    /**
     * @type {string}
     * @default Lang.zh
     * @description 默认对比项语言
     */
    contrastLang: string;
    translate: {
        /** 翻译语言 */
        targetLang: string;
        /** 翻译语言在xlsx的index */
        targetIndex: number;
        /** 导出文件路径 */
        outPath: string;
    }[];
}
