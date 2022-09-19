import React from "react";
import "@pqina/flip/dist/flip.min.css";
import { useTick } from "../hooks/useTick";

interface IProps {
  value: any;
}

export const Text: React.FC<IProps> = (props) => {
  const { tickRef } = useTick({
    value: props.value,
  });

  return (
    <div ref={tickRef} className="tick">
      <span data-view="text" />
    </div>
  );
};
