import React, { createContext, useContext, useEffect, useState } from "react";
import { isEqual, merge } from "lodash-es";
import dayjs from "dayjs";
import { IConfig } from "../types";
import store from "../util/store";

let globalConfig: IConfig = {
  millionSecond: 0,
  endTime: new Date().getTime(),
  timeTags: [5 * 60 * 1000],
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

  useEffect(() => {
    store.readConfig().then((config) => config && setConfig(config));
  }, []);

  useEffect(() => {
    if (config) {
      store.updateConfig(config);
    }
  }, [config]);

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
        config.updateConfig?.({
          ...merge({}, config, newConfig),
          timeTags: newConfig.timeTags,
        });
      } else {
        config.updateConfig?.(merge({}, config, newConfig));
      }
    },
  };
};
