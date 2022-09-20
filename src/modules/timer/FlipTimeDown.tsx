import React, { useEffect } from "react";
import Tick from "@pqina/flip";
import "@pqina/flip/dist/flip.min.css";
import dayjs from "dayjs";
import { useTick } from "../../hooks/useTick";
import { useConfig } from "../../hooks/useConfig";

export const FlipTimeDown: React.FC = () => {
  const { tickRef, updateValue } = useTick();
  const { endTime, showSecond, isSplit, isSetting } = useConfig();

  useEffect(() => {
    if (isSetting) return;
    const timer = setInterval(() => {
      const offset = endTime - Date.now();
      const date = dayjs("2000").add(offset, "millisecond");
      if (offset > -1) {
        console.log(offset, date.format("hh:mm:ss EN"));
      }
      updateValue({
        sep: ":",
        hours: date.hour(),
        minutes: date.minute(),
        seconds: date.second(),
      });
    }, 500);
    return () => clearInterval(timer);
  }, [showSecond, endTime, isSetting]);

  const attributes = isSplit ? { "data-repeat": "true" } : {};

  return (
    <div ref={tickRef} className="tick">
      <div data-layout="horizontal fit" className="offset">
        <div {...attributes} data-key="hours" data-transform="pad(00)">
          <span data-view="flip"></span>
        </div>
        <span
          data-view="text"
          data-key="sep"
          className="tick-text-inline"
        ></span>
        <div {...attributes} data-key="minutes" data-transform="pad(00)">
          <span data-view="flip"></span>
        </div>
        {showSecond && (
          <>
            <span
              data-view="text"
              data-key="sep"
              className="tick-text-inline"
            ></span>
            <div {...attributes} data-key="seconds" data-transform="pad(00)">
              <span data-view="flip"></span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
