import {PlusOutlined} from '@ant-design/icons';
import {Space, Tag} from 'antd';
import {useState} from 'react';
import dayjs from 'dayjs';
import {useConfig} from '../hooks/useConfig';

const TimeTags = ({time}: { time: number }) => {
  const {timeTags, updateConfig} = useConfig();
  const handleClose = (removedTag: number) => {
    const newTags = timeTags.filter((tag) => tag !== removedTag);
    updateConfig({timeTags: [...newTags]});
  };

  const handleAddTag = () => {
    if (!timeTags.includes(time)) {
      updateConfig({timeTags: [...timeTags, time ]});
    }
  };

  return (
    <Space wrap>
      {timeTags.map((tag, i) => (
        <Tag
          className="time-tag"
          key={tag}
          closable
          onClick={() => {
            updateConfig({millionSecond: tag, isTimeDown: true});
          }}
          onClose={() => handleClose(tag)}
        >
          {dayjs('2000').
            add(tag, 'millisecond').
            format('H时m分s秒').
            replace(/^0时0分|^0时/g, '')}
        </Tag>
      ))}
      {timeTags.length < 10 && (
        <Tag className="time-tag" key={'new'} onClick={() => handleAddTag()}>
          <PlusOutlined/>{' '}
          {dayjs('2000').
            add(time, 'millisecond').
            format('H时m分s秒').
            replace(/^0时0分|^0时/g, '')}
        </Tag>
      )}
    </Space>
  );
};

export default TimeTags;
