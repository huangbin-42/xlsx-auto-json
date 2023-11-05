import { XlsxAutoJsonConfigProps } from "../@types"
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
            const json = JSON.parse(jsonData);

            Object.entries(json).forEach(([key, value]) => {
                translateMap[index].map.set(key, value)
            })

        } catch (error) {
            console.error('Read JSON Error:', error);
        }
    })

    return translateMap
}

