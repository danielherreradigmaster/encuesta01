import { useState } from 'react';
import { Alert } from 'antd';
import { Button } from 'antd';
import {
  PlusOutlined,
} from '@ant-design/icons';
import { Modal } from 'antd';

import './styles.scss';



const Wrapper2 = ({
  title = '',
  description = '',
  questionValue = '',
  children,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  return (
    <div className='question'>
      <div className='question__container'>
        <div className='question__header'>
          <Alert className='question__header-title' message={title}/>
          <h4 className='question__name'>{questionValue}</h4>
          <Button className='masinfo' danger shape="round" icon={<PlusOutlined />} size={'small'} onClick={showModal}>
            Mas info
          </Button>
        </div>
        <div className='question__body'>
          <div className='question__answer'>
            {children}
          </div>
        </div>
      </div>
      <Modal footer={null} closable={false} visible={isModalVisible}>
        <div className='question__modal'>
          <div><p>{description}</p></div>
          <Button type="primary" onClick={handleOk}>ok</Button>
        </div>
      </Modal>
    </div>
  )
};

export default Wrapper2;