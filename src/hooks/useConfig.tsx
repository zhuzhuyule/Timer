import React, { createContext, useContext, useEffect, useState } from 'react';
import { merge } from 'lodash-es';

interface IConfig {
  isTop?: boolean;
  isSetting?: boolean;
  isFlip?: boolean;
  isSplit?: boolean;
  showSecond?: boolean;
  size?: {
    height?: number;
    width?: number;
  };
  position?: {
    left?: number;
    top?: number;
  };
  updateConfig?: (config: Omit<IConfig, 'updateConfig'>) => void;
}

const ConfigContext = createContext<IConfig>({});

let globalConfig: IConfig = {
  isTop: true,
  isSetting: true,
  isSplit: true,
  showSecond: true,
};
export const ConfigProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [config, setConfig] = useState<IConfig>(globalConfig);

  return (
    <ConfigContext.Provider value={{ ...config, updateConfig: setConfig }}>
      {props.children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const config = useContext(ConfigContext);
  return {
    ...config,
    updateConfig: (newConfig: Partial<IConfig>) => {
      config.updateConfig?.(merge({}, config, newConfig));
    },
  };
};
