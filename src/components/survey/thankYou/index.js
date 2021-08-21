import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';


import './styles.scss'

const ThankYou = () => {          

  return (
    <div className='thank-you'>
      <div className="thank-you__wrapper">
        <h1 className='thank-you__title'>¡Gracias por tu respuesta!</h1>
        <p className='thank-you__description'>Para conocer los resultados, descarga tu informe aquí:</p>
        <Button style={{ width: '50%' }} type="primary" danger shape="round" icon={<DownloadOutlined />}>
          Descargar
        </Button>
      </div>
    </div>
  )
};

export default ThankYou;