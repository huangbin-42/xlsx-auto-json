# xlsx-auto-json

## 安装

```bash
  npm i xlsx-auto-json
```

## 使用

在您的项目根目录下创建 `translate.config.(js|ts)` 进行配置
```js
const config = {
  noFoundTest: '***noFoundTest***',
  initKey: 'Language.Demo.',
  contrastLangIndex: 1,
  defaultValueIndex: 1,
  fromXlsxPath: '(path).xlsx',
  translate: [
    {
      targetLang: 'zh',
      targetIndex: 1,
      outPath: `(path)/(...).json`,
    },
    {
      targetLang: 'tw',
      targetIndex: 2,
      outPath: `(path)/(...).json`,
    },
    {
      targetLang: 'en',
      targetIndex: 3,
      outPath: `(path)/(...).json`,
    },
    {
      targetLang: 'ja',
      targetIndex: 4,
      outPath: `(path)/(...).json`,
    },
    {
      targetLang: 'br',
      targetIndex: 5,
      outPath: `(path)/(...).json`,
    },
    {
      targetLang: 'tr',
      targetIndex: 6,
      outPath: `(path)/(...).json`,
    },
    {
      targetLang: 'ru',
      targetIndex: 7,
      outPath: `(path)/(...).json`,
    },
    {
      targetLang: 'vn',
      targetIndex: 8,
      outPath: `(path)/(...).json`,
    },
    {
      targetLang: 'id',
      targetIndex: 8,
      outPath: `(path)/(...).json`,
    },
  ],
}

export default config
```

在 `package.json` 中加入 scripts 命令

```json
"scripts": {
  "translate": "translate"
}
```

在终端执行命令启动翻译

```bash
npm run translate
```

不出意外的话就成功了 