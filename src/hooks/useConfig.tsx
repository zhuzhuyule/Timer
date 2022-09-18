import React, {createContext, useContext, useEffect, useState} from "react";
import { merge } from 'lodash-es';


interface IConfig {
    isTop?: boolean
    showSecond?: boolean
    isSplit?: boolean
    updateConfig?: (config: Omit<IConfig, 'updateConfig'>) => void;
}


const ConfigContext = createContext<IConfig>({});

let globalConfig: IConfig = {
    isTop: true,
    showSecond: true,
    isSplit: true,
};
export const ConfigProvider: React.FC<{ children: React.ReactNode}> = (props) => {
    const [config, setConfig] = useState<IConfig>(globalConfig);

    return (
        <ConfigContext.Provider value={{...config, updateConfig: setConfig} }>
            {props.children}
        </ConfigContext.Provider>
    )
}

export const useConfig = () => {
    const config = useContext(ConfigContext)
    return {
        ...config,
        updateConfig: (newConfig: Partial<IConfig>) => {
            config.updateConfig?.(merge({}, config, newConfig))
        }
    };
}
