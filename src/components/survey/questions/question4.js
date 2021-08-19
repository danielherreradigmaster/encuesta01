import Wrapper from './wrapper';
import './styles.scss';

const Question4 = ({ register, formState:{ errors } }) => {
  return (
    <Wrapper
      title='Atributo 4: Apetito de la Gestión de Riesgos'
      description='Este atributo evalúa el nivel de conciencia en la relación riesgo-oportunidad, la responsabilidad por el riesgo, la definición de tolerancias al riesgo y si la organización es eficaz para cerrar la brecha entre el riesgo potencial y el real.'
      questionValue='¿Cuál es la opción que mejor se adapta a tu organización respecto a la adopción de una Gestión de Riesgos Empresarial​?'
    >
      <div className="question__input-group">
        <input type="radio" id="someRadioId14" name="someGroupName4" value='someRadioId14' {...register('someGroupName4')}/>
        <label className='question__label' htmlFor="someRadioId14">a. La organización no ha formalizado su tolerancia ni apetito por el riesgo.​</label>
      </div>
      <div className="question__input-group">
        <input type="radio" id="someRadioId24" name="someGroupName4" value='someRadioId24' {...register('someGroupName4')}/>
        <label className='question__label' htmlFor="someRadioId24">b. La gestión del riesgo carece de una visión estratégica enfocada en riesgos. Se administra de una de dos maneras: como una forma de evitar los riesgos y cumplir con la Normativa o como la transferencia del riesgo a través de un seguro.</label>
      </div>
      <div className="question__input-group">
        <input type="radio" id="someRadioId34" name="someGroupName4" value='someRadioId34' {...register('someGroupName4')}/>
        <label className='question__label' htmlFor="someRadioId34">c. Solo los líderes de alto nivel entienden la gestión de riesgos para tomar decisiones. Cada área tiene su forma de definir y comparar riesgos.</label>
      </div>
      <div className="question__input-group">
        <input type="radio" id="someRadioId44" name="someGroupName4" value='someRadioId44' {...register('someGroupName4')}/>
        <label className='question__label' htmlFor="someRadioId44">d. Los supuestos de riesgo dentro de las decisiones de gestión se comunican claramente. Los riesgos y oportunidades son identificados, evaluados y gestionados de forma rutinaria en línea con las tolerancias al riesgo. Se cuantifica la brecha entre la tolerancia objetivo y real.</label>
      </div>
      <div className="question__input-group">
        <input type="radio" id="someRadioId54" name="someGroupName4" value='someRadioId54' {...register('someGroupName4')}/>
        <label className='question__label' htmlFor="someRadioId54">e. El apetito por el riesgo se considera en cada paso del proceso de ERM. La organización pronostica los efectos potenciales de la mitigación planificada frente a la tolerancia al riesgo como parte del proceso de gestión de riesgos empresariales.​​</label>
      </div>
      <div className="question__input-group">
        <input type="radio" id="someRadioId64" name="someGroupName4" value='someRadioId64' {...register('someGroupName4')}/>
        <label className='question__label' htmlFor="someRadioId64">f. El equipo de ERM define los niveles de tolerancia para todas las áreas. Un mecanismo compara e informa el riesgo evaluado real versus la tolerancia al riesgo. La gerencia prioriza la asignación de recursos en función de la brecha entre el apetito por el riesgo y el riesgo y la oportunidad evaluados.</label>
      </div>
      {errors.someGroupName4 && <p>{errors.someGroupName4.message}</p>}
    </Wrapper>
  )
};

export default Question4;