import './styles.scss';
import DatosPersonales from '../../../assets/img/datos-personales.png';

const Terms = ({ register, formState:{ errors } }) => {
  return (
    <div className='personal-data'>
      <div className='personal-data__container-img'>
        <img className='personal-data__img' src={DatosPersonales} alt=''/>
      </div>
      <div className='personal-data__container'>
        <h4 className='personal-data__title'>Datos Personales</h4>
        <p className='personal-data__description'>En Rimac velamos por proteger la información de nuestros clientes, respetando la confidencialidad de sus datos. Ten por seguro que la información reunida será únicamente utilizada para mejorar nuestros servicios en Gestión de Riesgos:​</p>         
        <div className="control-checkbox">
          <input className='control-checkbox__checkbox' id="checkboxName1" type="checkbox" {...register('checkboxName1')}/>
          <label className='control-checkbox__label' htmlFor="checkboxName1">He leído y acepto los términos y condiciones de uso</label>
          {errors.checkboxName1 && <p>{errors.checkboxName1?.message}</p>}
        </div>
        <div className="control-checkbox">
          <input className='control-checkbox__checkbox' id="checkboxName2" type="checkbox" {...register('checkboxName2')}/>
          <label className='control-checkbox__label' htmlFor="checkboxName2">He leído y acepto los términos y condiciones de uso</label>
          {errors.checkboxName2 && <p>{errors.checkboxName2?.message}</p>}
        </div>
      </div>
    </div>
  )
};

export default Terms;