import { Button, Space } from 'antd';

import './styles.scss'
import LogoRimac from '../../../assets/img/logo-rimac.png';

const Footer = ({
  formStep = '',
  handleGoBackStep = f=>f,
  handleNextStep = f=>f,
}) => {

  if(formStep === 13) return false;
  return (
    <div className={`footer footer--${formStep === 1 ? "start" : "accept"}`}>
      {formStep === 1 && (<Button className='footer__button--start' type="primary" size='large' htmlType='button' block onClick={handleNextStep}>Comenzar</Button>)}
      {formStep === 2 && (
        <>
          <Space size='small'>
            <Button className='footer__button--accept' type="primary" htmlType='button' onClick={handleNextStep}>Siguiente</Button>
          </Space>
          <img className='footer__img' src={LogoRimac} alt='' height='34px' />
        </>
      )}
      {(formStep >2 && formStep < 12) && (
        <>
          <Space size='small'>
            <Button className='footer__button--accept' type="primary" htmlType='button' onClick={handleGoBackStep}>Atrás</Button>
            <Button className='footer__button--accept' type="primary" htmlType='button' onClick={handleNextStep}>Siguiente</Button>
          </Space>
          <img className='footer__img' src={LogoRimac} alt='' height='34px' />
        </>
      )}
      {formStep === 12 && (
        <>
          <Space size='small'>
            <Button className='footer__button--accept' type="primary" htmlType='button' onClick={handleGoBackStep}>Atrás</Button>
            <Button className='footer__button--accept' type="primary" htmlType='submit' /* onClick={handleNextStep} */>Finalizar</Button>
          </Space>
          <img className='footer__img' src={LogoRimac} alt='' height='34px' />
        </>
      )}
    </div>
  )
};

export default Footer;