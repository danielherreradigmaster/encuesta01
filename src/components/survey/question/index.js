import { Alert } from 'antd';

const Question = ({ 
  step = 0,
  formStep = 0, 
  title = '',
  description = '',
  questionValue = '',
  children,
}) => {
  return (
    <div className={`${formStep === step ? "block" : "hidden"} question`}>
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

export default Question;