import React, {useState} from "react";

export const SettingContainer = () => {

    const [isSplit, setIsSplit] = useState(false);
    const [showSecond, setShowSecond] = useState(false);
    return (
        <div className="setting">
            <button onClick={() => {
                setIsSplit(!isSplit)
            }} >Split</button>
            <button onClick={() => {
                setShowSecond(!showSecond)
            }} >showSecond</button>
        </div>
    )
}
