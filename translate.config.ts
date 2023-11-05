import { defineConfig } from './src/utils/tools';

const config = defineConfig({
    initKey: 'Language.Demo.',
    contrastLang: 'zh',
    fromXlsxPath: '/Users/a605/Desktop/xlsx-auto-json/example/demo/价格竞猜活动改版 页面文案.xlsx',
    translate: [
        {
            targetLang: 'zh',
            targetIndex: 1,
            outPath: `/Users/a605/Desktop/xlsx-auto-json/example/locales/lang_zh.json`,
        },
    ],
})

export default config