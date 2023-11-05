import { defineConfig } from './src/utils/tools';

const config = defineConfig({
    noFoundTest: '***noFoundTest***',
    initKey: 'Language.Demo.',
    contrastLangIndex: 1,
    defaultValueIndex: 1,
    fromXlsxPath: 'path',
    translate: [
        {
            targetLang: 'zh',
            targetIndex: 1,
            outPath: 'path',
        },
        {
            targetLang: 'tw',
            targetIndex: 2,
            outPath: 'path',
        },
        {
            targetLang: 'en',
            targetIndex: 3,
            outPath: 'path',
        },
        {
            targetLang: 'ja',
            targetIndex: 4,
            outPath: 'path',
        },
    ],
})

export default config