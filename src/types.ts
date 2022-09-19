export interface IConfig {
  millionSecond: number;
  endTime: number;
  timeTags: number[];
  isTop?: boolean;
  isSetting?: boolean;
  isFlip?: boolean;
  isSplit?: boolean;
  isTimeDown?: boolean;
  showSecond?: boolean;
  size?: {
    height?: number;
    width?: number;
  };
  position?: {
    left?: number;
    top?: number;
  };
  updateConfig?: (config: Omit<IConfig, "updateConfig">) => void;
}
