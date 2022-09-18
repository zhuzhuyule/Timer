import React from "react";
import "./App.css";
import ClockContainer from "./components/ClockContainer";
import {SettingContainer} from "./components/SettingContainer";
import {appWindow} from "@tauri-apps/api/window";


const App = () => {
    // appWindow.setDecorations(true)
    return (
        <div>
            <ClockContainer />
            <SettingContainer />
        </div>
    );
}

export default App;
