import {useEffect, useRef} from "react";
import Tick from "@pqina/flip";

interface IOptions {
    value?: any
}

export  const useTick = (options?: IOptions) => {
    const { value } = options || { value: 0};
    const tickRef = useRef<HTMLDivElement | null>(null);
    const tickInstanceRef = useRef<any>();

    useEffect(() => {
        tickInstanceRef.current = Tick.DOM.create(tickRef.current, {
            value
        });
        console.log(tickRef.current)
        return () => {
            if (tickRef.current)  Tick.DOM.destroy(tickRef.current);
        }
    }, []);

    useEffect(() => {
        if (!tickInstanceRef.current) return;
        tickInstanceRef.current.value = value;
    }, [value]);

    return {
        tickRef,
        updateValue: (value: { hours: number; seconds: number; minutes: number; sep: string }) => tickInstanceRef.current.value = value
    }
}
