import React from 'react';
import { IConfig } from '../types';
import { confirm } from '@tauri-apps/api/dialog';

let inputText = '';

const format = (text: string) => {
  let formatText = '';
  for (let index = text.length - 1; index > -1; index--) {
    const char = text[index];
    if (char === ':') {
      if (formatText.length == 1) {
        formatText = char + formatText.padStart(2, '0');
      } else if (formatText.length > 3) {
        formatText = char + formatText.padStart(5, '0');
      }
    } else if (Number(char) < 6) {
      if (formatText.length == 2 || formatText.length == 5) {
        formatText = char + ':' + formatText;
      } else {
        formatText = char + formatText;
      }
    } else {
      if (
        formatText.length == 1 ||
        formatText.length == 4 ||
        formatText.length == 6
      ) {
        formatText = char + ':0' + formatText;
      } else if (formatText.length == 2) {
        formatText = char + ':00:' + formatText;
      } else if (formatText.length == 5) {
        formatText = char + ':' + formatText;
      } else {
        formatText = char + formatText;
      }
    }
  }
  return formatText;
};

export const listenerKeyboard =
  (getConfig: () => IConfig) => async (event: KeyboardEvent) => {
    const config = getConfig();
    const exec = (title: string, fn: () => void) => {
      Promise.resolve(
        event.shiftKey || confirm('', { title, type: 'error' })
      ).then((isYes) => isYes && fn());
    };

    switch (event.code) {
      case 'Enter':
      case 'Space':
        // config.updateConfig(config.)
        break;
      case 'KeyR':
        {
          exec('是否重置时间?', () => {
            // config.updateConfig({
            // })
          });
        }
        break;
      case 'KeyF':
      case 'KeyT':
        console.log(config.isFlip);
        config.updateConfig({
          isFlip: !config.isFlip,
        });
        break;
      case 'Backspace': {
        if (event.metaKey || event.ctrlKey) {
          inputText = '';
        } else {
          inputText = inputText.substring(0, inputText.length - 1);
        }
        break;
      }
      case 'Digit0':
      case 'Digit1':
      case 'Digit2':
      case 'Digit3':
      case 'Digit4':
      case 'Digit5':
      case 'Digit6':
      case 'Digit7':
      case 'Digit8':
      case 'Digit9': {
        const formatText = format(inputText + event.key);
        if (formatText.length < 9) {
          inputText += event.key;
        }
        break;
      }
      case 'Period':
      case 'Semicolon': {
        const formatText = format(inputText + event.key);
        if (formatText.length < 9 && !inputText.endsWith(':')) {
          inputText += ':';
        }
        break;
      }

      default:
        break;
    }
  };
