import { loadConfig } from "unconfig"
import { XlsxAutoJsonConfigProps } from "./@types";

(async () => {
    const { config } = await loadConfig<XlsxAutoJsonConfigProps>({
        sources: [
            {
                files: 'translate.config',
                extensions: ['ts', 'js']
            }
        ]
    })

    console.log('config===>', config);
})()