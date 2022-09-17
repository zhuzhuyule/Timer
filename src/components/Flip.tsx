import React from "react";
import "@pqina/flip/dist/flip.min.css";
import {useTick} from "../hooks/useTick";

interface IProps {
    value: any;
}

export const Flip: React.FC<IProps> = (props) => {
    const { tickRef } = useTick({
        value: props.value
    })

    return (
        <div ref={tickRef} className="tick">
            <div data-repeat="true" aria-hidden="true">
                <span data-view="flip" />
            </div>
        </div>
    );
}

