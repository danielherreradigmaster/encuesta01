import './styles.scss'
import LogoRimac from '../../../assets/img/logo-rimac.png';

const Welcome = () => {
  return (
    <div className='welcome'>
      <img className='welcome__img' src={LogoRimac} alt=''/>
      <h2 className='welcome__title'>Encuesta de Nivel de Madurez en Gestión de Riesgos</h2>
      <p className='welcome__description'>
        <span>Desde RIMAC queremos ser tu aliado en la Gestión de Riesgos Empresarial - ERM. Con esta encuesta podrás conocer el Nivel de Madurez de tu empresa. Esta herramienta se encuentra basada en el Modelo de Madurez de Riesgo elaborado por Risk and Insurance Management Society, Inc. - RIMS.</span>
        <br/><br/>
        <span>Tu respuesta es muy valiosa y con ella podremos brindarte servicios acorde a tus necesidades.</span>
        <br/>
        <span>Gracias.</span>
      </p>
    </div>
  )
};

export default Welcome;