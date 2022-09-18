import { appWindow, LogicalSize } from '@tauri-apps/api/window';
import { debounce } from 'lodash-es';
import { useRef } from 'react';
import '../App.css';
import { useConfig } from '../hooks/useConfig';
import { FlipClock } from './FlipClock';

const ClockContainer = () => {
  const { isTop, isSplit, isSetting, showSecond, updateConfig, size } =
    useConfig();

  const elRef = useRef<HTMLDivElement | null>(null);

  const handleContextMenu = debounce(async () => {
    const factor = await appWindow.scaleFactor();
    const size = (await appWindow.outerSize()).toLogical(factor);
    updateConfig({ isSetting: !isSetting });
    if (isSetting) {
      appWindow.setSize(
        new LogicalSize(size.width, elRef.current?.clientHeight || 200)
      );
    } else {
      appWindow.setSize(
        new LogicalSize(size.width, (elRef.current?.clientHeight || 200) + 300)
      );
    }
  }, 400);

  return (
    <div
      ref={elRef}
      className="clock-container"
      style={isSetting ? { height: `${elRef.current?.clientHeight}px` } : {}}
    >
      <div className="clock">
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
          updateConfig({ isTop: !isTop });
        }}
        onContextMenu={(e) => {
          e.preventDefault();
          handleContextMenu();
        }}
      ></div>
    </div>
  );
};

export default ClockContainer;
