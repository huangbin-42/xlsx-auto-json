import { defineConfig } from './src/utils/tools';

const config = defineConfig({
    noFoundTest:'***noFoundTest***',
    initKey: 'Language.Demo.',
    contrastLangIndex: 1,
    defaultValueIndex: 1,
    fromXlsxPath: '/Users/a605/Desktop/xlsx-auto-json/example/demo/价格竞猜活动改版 页面文案.xlsx',
    translate: [
        {
            targetLang: 'zh',
            targetIndex: 1,
            outPath: `/Users/a605/Desktop/xlsx-auto-json/example/locales/lang_zh.json`,
        },
        {
            targetLang: 'tw',
            targetIndex: 2,
            outPath: `/Users/a605/Desktop/xlsx-auto-json/example/locales/lang_tw.json`,
        },
        {
            targetLang: 'en',
            targetIndex: 3,
            outPath: `/Users/a605/Desktop/xlsx-auto-json/example/locales/lang_en.json`,
        },
        {
            targetLang: 'ja',
            targetIndex: 4,
            outPath: `/Users/a605/Desktop/xlsx-auto-json/example/locales/lang_ja.json`,
        },
    ],
})

export default config