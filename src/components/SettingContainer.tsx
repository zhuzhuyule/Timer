import {UpOutlined} from '@ant-design/icons';
import {Button, Dropdown, Menu, Slider, Space, Switch} from 'antd';
import TimeTags from './TimeTags';
import {useConfig} from '../hooks/useConfig';
import {useState} from 'react';
import dayjs from 'dayjs';

const FRONTS = [
  'Cunia',
  'Normal',
  'Normal Thin',
  'Light',
  'Pixel',
  'LED',
  'LED Bold',
  'Faster One',
  'Jellee',
];

export const SettingContainer = () => {
  const {isSplit, isFlip, showSecond, isTimeDown, updateConfig} = useConfig();
  const [time, setTime] = useState(dayjs('2000'));

  return (
    <div className="setting-container">
      <TimeTags time={time.toDate().getTime() - dayjs('2000').toDate().getTime()} />
      <div className="one-line">
        <span>时:</span>
        <Slider className="slider" tooltip={{open: false}} min={0} max={24}
                value={time.hour()} onChange={hour => {
          setTime(time.set('hour', hour));
        }}/>
        <Switch
          defaultChecked
          checkedChildren="自动"
          unCheckedChildren="显示"
        />
      </div>
      <div className="one-line">
        <span>分:</span>
        <Slider className="slider" tooltip={{open: false}} min={0} max={59} value={time.minute()} onChange={min => {
          setTime(time.set('minute', min));
        }}/>
        <Switch
          defaultChecked
          checkedChildren="显示"
          unCheckedChildren="隐藏"
          disabled
        />
      </div>
      <div className="one-line">
        <span>秒:</span>
        <Slider className="slider" tooltip={{open: false}} min={0} max={59} value={time.second()} onChange={second => {
          setTime(time.set('second', second));
        }}/>
        <Switch
          checked={showSecond}
          checkedChildren="显示"
          unCheckedChildren="隐藏"
          onChange={(showSecond) => {
            updateConfig({showSecond});
          }}
        />
      </div>
      <Space>
        <Dropdown
          overlay={
            <Menu
              items={FRONTS.map((theme) => ({
                key: theme,
                label: (
                  <Space>
                    {theme}
                    <span style={{fontFamily: theme}}> 13:59:24</span>
                  </Space>
                ),
              }))}
            />
          }
        >
          <Button>
            <Space>
              字体
              <UpOutlined/>
            </Space>
          </Button>
        </Dropdown>
        <Switch
          checked={isTimeDown}
          checkedChildren="倒计时"
          unCheckedChildren="时间"
          onChange={(isTimeDown) => {
            updateConfig({isTimeDown});
          }}
        />
        <Switch
          checked={isFlip}
          checkedChildren="翻牌"
          unCheckedChildren="文本"
          onChange={(isFlip) => {
            updateConfig({isFlip});
          }}
        />
        {isFlip && <Switch
            checked={isSplit}
            checkedChildren="单独"
            unCheckedChildren="合并"
            onChange={(isSplit) => {
              updateConfig({isSplit});
            }}
        />}
      </Space>
    </div>
  );
};
