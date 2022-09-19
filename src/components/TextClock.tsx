import "@pqina/flip/dist/flip.min.css";

import dayjs from "dayjs";
import React, { useEffect, useRef, useState } from "react";

import { SelfAdaptFontSize } from "../util/fontsize";

interface ITextClock {
  showSecond?: boolean;
}

export const TextClock: React.FC<ITextClock> = ({ showSecond = true }) => {
  const [content, setContent] = useState("");

  const elRef = useRef<HTMLDivElement | null>(null);
  const fitRef = useRef(SelfAdaptFontSize.getInstance());

  useEffect(() => {
    const timer = setInterval(() => {
      const newDate = dayjs().format(showSecond ? "hh:mm:ss" : "hh:mm");
      if (content !== newDate) {
        setContent(newDate);
      }
    }, 500);
    return () => clearInterval(timer);
  }, [showSecond]);

  useEffect(() => {
    if (elRef.current) {
      fitRef.current.fontSize(
        elRef.current,
        elRef.current.clientWidth,
        elRef.current.parentElement?.clientHeight
      );
    }
  }, [
    elRef.current,
    elRef.current?.clientWidth,
    elRef.current?.parentElement?.clientHeight,
  ]);

  return (
    <div ref={elRef} className="tick">
      {content.split("").map((word, i) => {
        return (
          <span
            key={`${i}${word}`}
            className="word"
            style={{
              width: `${100 / content.length}%`,
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};
