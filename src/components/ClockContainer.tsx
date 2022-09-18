import React from 'react';
import '../App.css';
import {FlipClock} from './FlipClock';
import {appWindow} from '@tauri-apps/api/window';
import {useConfig} from "../hooks/useConfig";

const ClockContainer = () => {
   const {isTop, isSplit, showSecond, updateConfig} = useConfig()


  return (
    <>
      <div className="container">
        <FlipClock
          isSplit={isSplit}
          showSecond={showSecond}
          key={`${isSplit} ${showSecond}`}
        />
        {/*<TextClock showSecond={showSecond} key={`${showSecond}`} />*/}
      </div>
      <div
        data-tauri-drag-region
        className="mask"
        onDoubleClick={async (e) => {
          await appWindow.setAlwaysOnTop(!isTop);
          updateConfig({ isTop: !isTop});
        }}
      ></div>
    </>
  );
};

export default ClockContainer;
