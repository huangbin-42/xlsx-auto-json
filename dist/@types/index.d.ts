export interface XlsxAutoJsonConfigProps {
    /** 翻译文案拼接key */
    initKey?: string;
    /** 翻译转换文件地址(xlsx) */
    fromXlsxPath: string;
    /** 默认对比项语言 */
    contrastLangIndex: number;
    /** 翻译文案未找到时默认文案 */
    defaultValueIndex: number;
    translate: {
        /** 翻译语言 */
        targetLang: string;
        /** 翻译语言在xlsx的index */
        targetIndex: number;
        /** 导出文件路径 */
        outPath: string;
    }[];
}
