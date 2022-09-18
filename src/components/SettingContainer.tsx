import { UpOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, Slider, Space, Switch } from 'antd';
import CountDownTags from './CountDownTags';

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
  return (
    <div className="setting-container">
      <CountDownTags />
      <div className="one-line">
        <span>时:</span>
        <Slider className="slider" tooltip={{ open: false }} min={0} max={24} />
        <Switch
          defaultChecked
          checkedChildren="显示"
          unCheckedChildren="隐藏"
        />
      </div>
      <div className="one-line">
        <span>分:</span>
        <Slider className="slider" tooltip={{ open: false }} min={0} max={59} />
        <Switch
          defaultChecked
          checkedChildren="显示"
          unCheckedChildren="隐藏"
          disabled
        />
      </div>
      <div className="one-line">
        <span>秒:</span>
        <Slider className="slider" tooltip={{ open: false }} min={0} max={59} />
        <Switch
          defaultChecked
          checkedChildren="显示"
          unCheckedChildren="隐藏"
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
                    <span style={{ fontFamily: theme }}> 13:59:24</span>
                  </Space>
                ),
              }))}
            />
          }
        >
          <Button>
            <Space>
              字体
              <UpOutlined />
            </Space>
          </Button>
        </Dropdown>
        <Switch
          defaultChecked
          checkedChildren="时间"
          unCheckedChildren="倒计时"
        />
        <Switch
          defaultChecked
          checkedChildren="翻牌"
          unCheckedChildren="文本"
        />
        <Switch
          defaultChecked
          checkedChildren="单独"
          unCheckedChildren="合并"
        />
      </Space>
    </div>
  );
};
