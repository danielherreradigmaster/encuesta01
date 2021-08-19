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
          <input className='control-input__input' type="text" id='email' name="email" autoComplete="off" {...register('email')}/>
          <label htmlFor="email" className="control-input__label">
            <span className="control-input__content-name">
              Correo electrónico
            </span>
          </label>
        </div>
        {errors.email && <p>{errors.email.message}</p>}

        <div className="control-input">
          <input className='control-input__input' type="text" id='fullname' name="fullname" autoComplete="off" {...register('fullname')}/>
          <label htmlFor="fullname" className="control-input__label">
            <span className="control-input__content-name">
              Nombres y Apellidos
            </span>
          </label>
        </div>
        {errors.fullname && <p>{errors.fullname.message}</p>}

        <div className="control-input">
          <input className='control-input__input' type="text" id='company' name="company" autoComplete="off" {...register('company')}/>
          <label htmlFor="company" className="control-input__label">
            <span className="control-input__content-name">
              Empresa 
            </span>
          </label>
        </div>
        {errors.company && <p>{errors.company.message}</p>}

        <div className="control-input">
          <input className='control-input__input' type="text" id='position' name="position" autoComplete="off" {...register('position')}/>
          <label htmlFor="position" className="control-input__label">
            <span className="control-input__content-name">
              Cargo
            </span>
          </label>
        </div>
        {errors.position && <p>{errors.position.message}</p>}
      </div>
    </div>
  )
};

export default PersonalData;