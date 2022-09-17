import React, {useEffect} from "react";
import Tick from "@pqina/flip";
import "@pqina/flip/dist/flip.min.css";
import {useTick} from "../hooks/useTick";

interface ITextClock {
    showSecond?: boolean;
}

export const TextClock: React.FC<ITextClock> = ({ showSecond = true }) => {
    const {tickRef, updateValue} = useTick()

    useEffect(() => {
        Tick.helper.interval(() => {
            const date = Tick.helper.date();
            updateValue({
                sep: ':',
                hours: date.getHours(),
                minutes: date.getMinutes(),
                seconds: date.getSeconds()
            });
        })
    }, [])

    return (
        <div ref={tickRef} className="tick">
            <div data-layout="horizontal fit" className="offset">
                <span data-view="text" data-key="hours" data-transform="pad(00)"></span>
                <span data-view="text" data-key="sep" className="tick-text-inline"></span>
                <span data-view="text" data-key="minutes" data-transform="pad(00)"></span>
                {showSecond && (
                    <>
                        <span data-view="text" data-key="sep" className="tick-text-inline"></span>
                        <span data-view="text" data-key="seconds" data-transform="pad(00)"></span>
                    </>
                )}

            </div>
        </div>
    );
}

