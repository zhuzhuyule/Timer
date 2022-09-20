import "./App.css";
import { useConfig } from "./hooks/useConfig";
import ClockContainer from "./modules/clock/ClockContainer";
import { SettingContainer } from "./modules/setting/SettingContainer";

const App = () => {
  const { isSetting } = useConfig();

  return (
    <div className={isSetting ? "setting" : ""}>
      <ClockContainer />
      <SettingContainer />
    </div>
  );
};

export default App;
