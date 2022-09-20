import { appWindow, LogicalSize } from "@tauri-apps/api/window";
import { debounce } from "lodash-es";
import { useRef } from "react";
import dayjs from "dayjs";
import { FlipTimeDown } from "../timer/FlipTimeDown";
import { TextClock } from "../../components/TextClock";
import { useConfig } from "../../hooks/useConfig";
import { FlipTimer } from "../../components/FlipTimer";

const ClockContainer = () => {
  const {
    isTop,
    isTimeDown,
    isSplit,
    isSetting,
    showSecond,
    isFlip,
    millionSecond,
    updateConfig,
    size,
  } = useConfig();

  const elRef = useRef<HTMLDivElement | null>(null);

  const handleContextMenu = debounce(async () => {
    const factor = await appWindow.scaleFactor();
    const size = (await appWindow.outerSize()).toLogical(factor);
    if (isSetting) {
      appWindow.setResizable(true);
      appWindow.setSize(
        new LogicalSize(size.width, elRef.current?.clientHeight || 200)
      );
    } else {
      appWindow.setResizable(false);
      appWindow.setSize(
        new LogicalSize(size.width, (elRef.current?.clientHeight || 200) + 300)
      );
    }
    console.log(dayjs(Date.now() + millionSecond).format("hh:mm:ss"));
    updateConfig({
      endTime: Date.now() + millionSecond,
      isSetting: !isSetting,
    });
  }, 400);

  return (
    <div
      ref={elRef}
      className="clock-container"
      style={isSetting ? { height: `${elRef.current?.clientHeight}px` } : {}}
    >
      {!isTimeDown && (
        <div className="clock">
          {isFlip ? (
            <FlipTimer
              isSplit={isSplit}
              showSecond={showSecond}
              key={`${isSplit} ${showSecond}`}
            />
          ) : (
            <TextClock showSecond={showSecond} key={`${showSecond}`} />
          )}
        </div>
      )}
      {isTimeDown && (
        <div className="clock">
          {isFlip ? (
            <FlipTimeDown key={`${isSplit} ${showSecond}`} />
          ) : (
            <TextClock showSecond={showSecond} key={`${showSecond}`} />
          )}
        </div>
      )}
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
