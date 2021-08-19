import { Alert } from 'antd';
import './styles.scss';

const Wrapper = ({
  title = '',
  description = '',
  questionValue = '',
  children,
}) => {
  return (
    <div className='question'>
      <div className='question__container'>
        <div className='question__header'>
          {title && (<Alert className='question__header-title' message={title}/>)}
          <p className='question__header-content'>{description}</p>
          <h4 className='question__name'>{questionValue}</h4>
        </div>
        <div className='question__body'>
          <div className='question__answer'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Wrapper;