import React, { createContext, useContext, useEffect, useState } from 'react';
import { merge } from 'lodash-es';
import dayjs from 'dayjs';

interface IConfig {
  millionSecond: number;
  endTime: number;
  timeTags: number[];
  isTop?: boolean;
  isSetting?: boolean;
  isFlip?: boolean;
  isSplit?: boolean;
  isTimeDown?: boolean;
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


let globalConfig: IConfig = {
  millionSecond: 0,
  endTime: new Date().getTime(),
  timeTags: [3600000],
  isTop: true,
  isSetting: true,
  isSplit: true,
  showSecond: true,
};

const ConfigContext = createContext<IConfig>(globalConfig);

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
      if (newConfig.timeTags) {
        config.updateConfig?.({...merge({}, config, newConfig), timeTags: newConfig.timeTags});
      } else {
        config.updateConfig?.(merge({}, config, newConfig));
      }
    },
  };
};
