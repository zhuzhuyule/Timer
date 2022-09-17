import React, {useState} from "react";
import "./App.css";
import {TextClock} from "./components/TextClock";


const App = () => {

    const [isSplit, setIsSplit] = useState(false);
    const [showSecond, setShowSecond] = useState(false);
    return (
        <>
            <div className="container">
                {/*<FlipClock isSplit={isSplit} showSecond={showSecond} key={`${isSplit} ${showSecond}`} />*/}
                <TextClock showSecond={showSecond} key={`${showSecond}`} />
            </div>
            <div data-tauri-drag-region className='mask'>
                <button onClick={() => {
                    setIsSplit(!isSplit)
                }} >Split</button>
                <button onClick={() => {
                    setShowSecond(!showSecond)
                }} >showSecond</button>
            </div>
        </>
    );
}

export default App;
