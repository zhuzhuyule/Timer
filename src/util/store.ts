import { Store } from "tauri-plugin-store-api";
import { IConfig } from "../types";

const store = new Store(".settings.dat");

const CONFIG_KEY = "config";

export default {
  readConfig: () => store.get<IConfig>(CONFIG_KEY),
  updateConfig: (config: IConfig) => store.set(CONFIG_KEY, config),
};
