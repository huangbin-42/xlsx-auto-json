import fs from 'fs'
import { loadConfig } from "unconfig"
import { XlsxAutoJsonConfigProps } from "./@types";
import { getTranslateMap } from "./utils/index.js";

(async () => {
    const { config } = await loadConfig<XlsxAutoJsonConfigProps>({
        sources: [
            {
                files: 'translate.config',
                extensions: ['ts', 'js']
            }
        ]
    })

    const translateMap = getTranslateMap(config)

    console.log(Array.from(translateMap[0].map));

})()