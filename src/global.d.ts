type IFn = () => any;

declare module "@pqina/flip" {
  export default {
    supported: boolean,
    options: {
      setConstant: IFn,
      setPreset: IFn,
    },
    helper: {
      date: IFn,
      duration: IFn,
      interval: IFn,
    },
    data: {
      poll: IFn,
      request: IFn,
    },
    DOM: {
      create: IFn,
      destroy: IFn,
      find: IFn,
      parse: IFn,
    },
    count: {
      up: IFn,
      schedule: IFn,
      down: IFn,
    },
    plugin: {
      add: IFn,
      addEasingFunction: IFn,
      addFont: IFn,
      addTransform: IFn,
      addTransition: IFn,
      addView: IFn,
    },
  };
}

declare module "@pqina/tick" {
  export default {
    supported: boolean,
    options: {
      setConstant: IFn,
      setPreset: IFn,
    },
    helper: {
      date: IFn,
      duration: IFn,
      interval: IFn,
    },
    data: {
      poll: IFn,
      request: IFn,
    },
    DOM: {
      create: IFn,
      destroy: IFn,
      find: IFn,
      parse: IFn,
    },
    count: {
      up: IFn,
      schedule: IFn,
      down: IFn,
    },
    plugin: {
      add: IFn,
      addEasingFunction: IFn,
      addFont: IFn,
      addTransform: IFn,
      addTransition: IFn,
      addView: IFn,
    },
  };
}
