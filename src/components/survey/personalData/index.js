import './styles.scss';
import DatosPersonales from '../../../assets/img/datos-personales.png';

const PersonalData = ({ register, formState:{ errors } }) => {
  return (
    <div className='personal-data'>
      <div className='personal-data__container-img'>
        <img className='personal-data__img' src={DatosPersonales} alt=''/>
      </div>
      <div className='personal-data__container'>
        <div className="control-input">
          <input  id="email" className="control-input__input" name="email" type="text" placeholder="Correo electrónico" autoComplete="off" {...register('email')}/>
          <label  htmlFor="email" className="control-input__label" data-content="Correo electrónico">
            <span className="control-input__content-name">Correo electrónico</span>        
          </label>
          {errors.email && <div className='invalid-message'>{errors.email.message}</div>}
        </div>
        <div className="control-input">
          <input className='control-input__input' type="text" id='fullname' name="fullname" placeholder="Nombres y Apellidos" autoComplete="off" {...register('fullname')}/>
          <label htmlFor="fullname" className="control-input__label" data-content="Nombres y Apellidos">
            <span className="control-input__content-name">Nombres y Apellidos</span>
          </label>
        </div>
        {errors.fullname && <div className='invalid-message'>{errors.fullname.message}</div>}
        <div className="control-input">
          <input className='control-input__input' type="text" id='company' name="company" placeholder="Empresa" autoComplete="off" {...register('company')}/>
          <label htmlFor="company" className="control-input__label" data-content="Empresa">
            <span className="control-input__content-name">Empresa</span>
          </label>
        </div>
        {errors.company && <div className='invalid-message'>{errors.company.message}</div>}
        <div className="control-input">
          <input className='control-input__input' type="text" id='position' name="position" placeholder="Cargo" autoComplete="off" {...register('position')}/>
          <label htmlFor="position" className="control-input__label" data-content="Cargo">
            <span className="control-input__content-name">Cargo</span>
          </label>
        </div>
        {errors.position && <div className='invalid-message'>{errors.position.message}</div>}
      </div>
    </div>
  )
};

export default PersonalData;