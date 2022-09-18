import { PlusOutlined } from '@ant-design/icons';
import { Space, Tag } from 'antd';
import { useState } from 'react';

const CountDownTags = () => {
  const [tags, setTags] = useState(['5分', '6分', '8分30秒']);

  const handleClose = (removedTag: string) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setTags(newTags);
  };

  const handleInputConfirm = () => {
    setTags([...tags, '1']);
  };

  return (
    <Space wrap>
      {tags.map((tag) => (
        <Tag
          className="time-tag"
          key={tag}
          closable
          onClose={() => handleClose(tag)}
        >
          {tag}
        </Tag>
      ))}
      {tags.length < 10 && (
        <Tag className="time-tag" onClick={handleInputConfirm}>
          <PlusOutlined /> 添加时间
        </Tag>
      )}
    </Space>
  );
};

export default CountDownTags;
