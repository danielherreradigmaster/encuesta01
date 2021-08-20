import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';


import './styles.scss'

const ThankYou = () => {          

  return (
    <div className='thank-you'>
      <div className="thank-you__wrapper">
        <h1 className='thank-you__title'>¡Gracias por tu respuesta!</h1>
        <p className='thank-you__description'>Nos pondremos en contacto contigo en las próximas semanas para informarte sobre tus resultados:</p>
        <Button style={{ width: '50%' }} type="primary" danger shape="round" icon={<DownloadOutlined />}>
          Download
        </Button>
      </div>
    </div>
  )
};

export default ThankYou;