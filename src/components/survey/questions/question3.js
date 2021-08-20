import Wrapper from './wrapper';
import './styles.scss';

const Question3 = ({ register, formState:{ errors } }) => {
  return (
    <Wrapper
      title='Atributo 3: Administración del proceso de ERM'
      description='Este atributo mide el grado en que la organización ha adoptado una metodología de ERM a lo largo de su cultura y utiliza los pasos del proceso ERM para identificar, evaluar, mitigar y monitorear riesgos.'
      questionValue='¿Cuál es la opción que mejor se adapta a tu organización?'
    >
      <div className="question__input-group">
        <input type="radio" id="someRadioId13" name="someGroupName3" value='someRadioId13' {...register('someGroupName3')}/>
        <label className='question__label' htmlFor="someRadioId13">a. Hay poco reconocimiento de la importancia del proceso de ERM.​</label>
      </div>
      <div className="question__input-group">
        <input type="radio" id="someRadioId23" name="someGroupName3" value='someRadioId23' {...register('someGroupName3')}/>
        <label className='question__label' htmlFor="someRadioId23">b. La gestión es reactiva y es posible que ERM todavía no se considere un proceso. Por ello, no existen criterios estándar de evaluación de riesgos. Los roles y responsabilidades de riesgo son informales o inexistentes.​​</label>
      </div>
      <div className="question__input-group">
        <input type="radio" id="someRadioId33" name="someGroupName3" value='someRadioId33' {...register('someGroupName3')}/>
        <label className='question__label' htmlFor="someRadioId33">c. La gerencia es consciente de la necesidad de un proceso de ERM. Por ello cuentan con funciones y responsabilidades definidas. La mitigación de riesgos puede identificarse, pero no suele ejecutarse.​</label>
      </div>
      <div className="question__input-group">
        <input type="radio" id="someRadioId43" name="someGroupName3" value='someRadioId43' {...register('someGroupName3')}/>
        <label className='question__label' htmlFor="someRadioId43">d. La organización cuenta con un proceso de ERM que se adapta a las necesidades de las áreas del negocio. Cuentan con un equipo de Riesgos Empresariales y la alta dirección revisa activamente los planes de riesgo.​</label>
      </div>
      <div className="question__input-group">
        <input type="radio" id="someRadioId53" name="someGroupName3" value='someRadioId53' {...register('someGroupName3')}/>
        <label className='question__label' htmlFor="someRadioId53">e. La organización cuenta con una política y un equipo de ERM. Asimismo, la gerencia desarrolla y revisa los reportes de riesgo, en los que miden el progreso de ERM para las partes interesadas, incluida la Junta Directiva.​</label>
      </div>
      <div className="question__input-group">
        <input type="radio" id="someRadioId63" name="someGroupName3" value='someRadioId63' {...register('someGroupName3')}/>
        <label className='question__label' htmlFor="someRadioId63">f. La gestión de riesgos empresarial está integrada en todos los procesos y estrategias del negocio como una forma de alcanzar los objetivos. La organización utiliza un proceso de ERM que mejora la toma de decisiones y el desempeño.</label>
      </div>
    </Wrapper>
  )
};

export default Question3;