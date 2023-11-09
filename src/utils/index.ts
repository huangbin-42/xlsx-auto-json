import { XlsxAutoJsonConfigProps } from "../@types"
import { toCamelCaseFromSpace, escapeSpecialChars, removeExtraLineBreaks } from "../utils/tools.js";
import XLSX from 'xlsx';
import fs from 'fs';



/**
 * 获取xlsx数据
 * @param fromXlsxPath 
 * @returns 
 */
export const getXlsx = (path: string): any[] => {
    const workbook = XLSX.readFile(path ?? '/');
    // 获取第一个工作表
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    // 将工作表转换为JSON对象
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    return jsonData
}

/**
 * 获取已有翻译json
 * @param config 
 * @returns 
 */
export const getTranslateMap = (config: XlsxAutoJsonConfigProps) => {
    const translateMap = config.translate?.map(item => ({
        ...item,
        map: new Map()
    }))

    translateMap.forEach(async (item, index) => {
        try {
            const jsonData = fs.readFileSync(item.outPath, 'utf8');
            const json = JSON.parse(jsonData ?? '{}');

            Object.entries(json).forEach(([key, value]) => {
                translateMap[index].map.set(key, value)
            })

        } catch (error) {
            console.error('Read JSON Error:', error);
        }
    })

    return translateMap
}

/**
 * 使用fs生成文件
 * @param {fs.PathOrFileDescriptor} url
 * @param {(string | NodeJS.ArrayBufferView)} text
 * @param {Lang} lang
 */
export const writeFile = (url: fs.PathOrFileDescriptor, text: string | NodeJS.ArrayBufferView, lang?: string) => {
    fs.writeFile(url, text, (err) => {
        if (err) {
            console.error('Error writing file:===>', err);
        } else {
            if (lang) {
                console.log(`${lang} 翻译完成====>`);
            }
        }
    });
}

export class TranslateItem {
    private _contrastLangIndex: number
    private _defaultValueIndex: number
    private _initKey?: string

    constructor(props: Pick<XlsxAutoJsonConfigProps, 'contrastLangIndex' | 'defaultValueIndex' | 'initKey'>) {
        this._initKey = props?.initKey
        this._contrastLangIndex = props.contrastLangIndex
        this._defaultValueIndex = props.defaultValueIndex
    }

    /**
     * 分隔字符串
     * @param text 
     * @param reg 
     * @returns 
     */
    private _strToMap(text: string, reg = /\n+|\s{2,}/) {
        return text.split(reg)
    }

    public createLangMap(item: any[], config: ReturnType<typeof getTranslateMap>) {
        const valueList = item?.map(str => this._strToMap(str))
        const keyList = valueList[this._contrastLangIndex]
        const defaultList = valueList[this._defaultValueIndex]

        config.forEach(lang => {
            const value = valueList[lang.targetIndex]
            keyList.forEach((key, index) => {
                lang.map.set(removeExtraLineBreaks(escapeSpecialChars(`${this._initKey}${toCamelCaseFromSpace(key)}`.trim())), removeExtraLineBreaks(escapeSpecialChars(value?.[index] ?? defaultList?.[index]).trim()))
            })
        })
    }
}

