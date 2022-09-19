import "./App.css";
import ClockContainer from "./components/ClockContainer";
import { SettingContainer } from "./components/SettingContainer";
import { useConfig } from "./hooks/useConfig";

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
