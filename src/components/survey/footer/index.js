import { Button, Space } from 'antd';

import './styles.scss'
import LogoRimac from '../../../assets/img/logo-rimac.png';

const Footer = ({
  formStep = 0,
  handleGoBackStep = f=>f,
}) => {

  if(formStep === 13) return false;
  return (
    <div className={`footer footer--${formStep === 1 ? "start" : "accept"}`}>
      {formStep === 1 && (<Button className='footer__button--start' type="primary" size='large' htmlType='submit' block>Comenzar</Button>)}
      {formStep >= 2 && (
        <>
          <Space size='small'>
            {formStep > 2 && <Button className='footer__button--accept' type="primary" htmlType='button' onClick={handleGoBackStep}>Atrás</Button>}
            <Button className='footer__button--accept' type="primary" htmlType='submit'>{formStep === 12 ? 'Finalizar' : 'Siguiente'}</Button>
          </Space>
          <img className='footer__img' src={LogoRimac} alt='' height='34px' />
        </>
      )}
    </div>
  )
};

export default Footer;