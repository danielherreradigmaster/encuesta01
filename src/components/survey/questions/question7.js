import Wrapper from './wrapper';
import './styles.scss';

const Question7 = ({ register, formState:{ errors } }) => {
  return (
    <Wrapper
      title='Atributo 7: Gestión del desempeño'
      description='Este atributo determina el grado en que una Organización ejecuta sus visiones y estrategia.'
      questionValue='¿Cuál es la opción que mejor se adapta a tu organización respecto a la adopción de una Gestión de Riesgos Empresarial​?'
    >
      <div className="question__input-group">
        <input type="radio" id="someRadioId17" name="someGroupName7" value='someRadioId17' {...register('someGroupName7')}/>
        <label className='question__label' htmlFor="someRadioId17">a. No existe un marco formal de indicadores y mediciones para las metas y la gestión de la Organización.​​​​</label>
      </div>
      <div className="question__input-group">
        <input type="radio" id="someRadioId27" name="someGroupName7" value='someRadioId27' {...register('someGroupName7')}/>
        <label className='question__label' htmlFor="someRadioId27">b. Los objetivos estratégicos no están articulados con la primera línea de gerencia. Es posible que las decisiones para actuar sobre los riesgos no se rastreen ni se controlen de manera sistemática.​​</label>
      </div>
      <div className="question__input-group">
        <input type="radio" id="someRadioId37" name="someGroupName7" value='someRadioId37' {...register('someGroupName7')}/>
        <label className='question__label' htmlFor="someRadioId37">c. El proceso de gestión de riesgos empresariales es independiente de la estrategia y la planificación.​</label>
      </div>
      <div className="question__input-group">
        <input type="radio" id="someRadioId47" name="someGroupName7" value='someRadioId47' {...register('someGroupName7')}/>
        <label className='question__label' htmlFor="someRadioId47">d. Los criterios de gestión de riesgos son parte de la gestión evaluaciones de desempeño. Los colaboradores comprenden cómo el enfoque basado en el riesgo les ayuda a alcanzar sus metas.​</label>
      </div>
      <div className="question__input-group">
        <input type="radio" id="someRadioId57" name="someGroupName7" value='someRadioId57' {...register('someGroupName7')}/>
        <label className='question__label' htmlFor="someRadioId57">e. Los riesgos son altamente considerados como parte de planificación estratégica. Los empleados de todos los niveles utilizan un enfoque basado en el riesgo para lograr los objetivos.​​</label>
      </div>
      <div className="question__input-group">                
        <input type="radio" id="someRadioId67" name="someGroupName7" value='someRadioId67' {...register('someGroupName7')}/>
        <label className='question__label' htmlFor="someRadioId67">f. La evaluación y medición de la mejora del desempeño es parte de la cultura del riesgo. La organización mide la efectividad de gestionar las incertidumbres y aprovechar las oportunidades de riesgo con un enfoque claro, conciso, eficaz y comunicacional.​​</label>
      </div>
      {errors.someGroupName7 && <p>{errors.someGroupName7.message}</p>}
    </Wrapper>
  )
};

export default Question7;