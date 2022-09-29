import { useEffect, useRef } from 'react';
import './App.css';
import { useConfig } from './hooks/useConfig';
import ClockContainer from './modules/clock/ClockContainer';
import { SettingContainer } from './modules/setting/SettingContainer';
import { IConfig } from './types';
import { listenerKeyboard } from './util/shortCut';

const App = () => {
  const configRef = useRef<IConfig>(useConfig());
  configRef.current = useConfig();

  useEffect(() => {
    const listener = listenerKeyboard(() => configRef.current);
    document.addEventListener('keydown', listener);
    return () => document.removeEventListener('keydown', listener);
  }, []);

  return (
    <div className={configRef.current.isSetting ? 'setting' : ''}>
      <ClockContainer />
      <SettingContainer />
    </div>
  );
};

export default App;
