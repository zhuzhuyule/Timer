import React, { useEffect } from "react";
import Tick from "@pqina/flip";
import "@pqina/flip/dist/flip.min.css";
import { useTick } from "../hooks/useTick";
import { useConfig } from "../hooks/useConfig";

interface IFlipClock {
  isSplit?: boolean;
  showSecond?: boolean;
}

export const FlipTimer: React.FC<IFlipClock> = () => {
  const { tickRef, updateValue } = useTick();
  const { showSecond, isSplit } = useConfig();

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
