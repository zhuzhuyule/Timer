export class SelfAdaptFontSize {
  private static instance: SelfAdaptFontSize;

  constructor() {}

  static getInstance() {
    if (!this.instance) {
      this.instance = new SelfAdaptFontSize();
    }
    return this.instance;
  }

  fontSize(targetDom: any, width: number = 0, height: number = 0) {
    const measureDom = document.createElement("span");

    targetDom.appendChild(measureDom);
    measureDom.innerHTML = targetDom.innerHTML;
    measureDom.style.position = "absolute";
    measureDom.style.opacity = "0";
    measureDom.style.padding = "0";
    measureDom.style.margin = "0";
    measureDom.style.left = "0";
    measureDom.style.top = "0";

    let fontSize = 10;
    while (fontSize < 1000) {
      fontSize += 2;
      measureDom.style.fontSize = `${fontSize}px`;

      if (
        measureDom.offsetWidth >= width ||
        measureDom.offsetHeight >= height
      ) {
        targetDom.style.fontSize = `${fontSize - 7}px`;
        targetDom.removeChild(measureDom);
        break;
      }
    }
  }
}
