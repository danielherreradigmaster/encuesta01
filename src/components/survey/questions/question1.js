import Wrapper from './wrapper';
import './styles.scss';

const Question1 = ({ register, formState:{ errors } }) => {
  return (
    <Wrapper
      title='Atributo 1: Adopción de una Gestión de Riesgos Empresarial'
      description='Este atributo mide la cultura de riesgos de la organización y considera el grado de apoyo a nivel ejecutivo o de la alta dirección para la gestión de riesgos empresariales (ERM, por las siglas en inglés de Enterprise Risk Management).'
      questionValue='¿Cuál es la opción que mejor se adapta a tu organización respecto a la adopción de una Gestión de Riesgos Empresarial​?'
    >
      <div className="question__input-group">
        <input type="radio" id="someRadioId11" value='someRadioId11' {...register('someGroupName1')}/>
        <label className='question__label' htmlFor="someRadioId11">a. La organización no ha reconocido la necesidad de tener un proceso de ERM.​</label>
      </div>
      <div className="question__input-group">
        <input type="radio" id="someRadioId21" value='someRadioId21' {...register('someGroupName1')}/>
        <label className='question__label' htmlFor="someRadioId21">b. La cultura organizacional tiene poco compromiso con la gestión de riesgos. La metodología de gestión de riesgos no está estandarizada dentro de la organización, cada área la trabaja de forma independiente. La gestión de riesgos está basada en eventos pasados.​</label>
      </div>
      <div className="question__input-group">
        <input type="radio" id="someRadioId31" value='someRadioId31' {...register('someGroupName1')}/>
        <label className='question__label' htmlFor="someRadioId31">c. La organización ha establecido  una política, un proceso estandarizado y un responsable para la gestión de riesgos empresariales. La gestión de riesgos considera riesgos futuros.​</label>
      </div>
      <div className="question__input-group">
        <input type="radio" id="someRadioId41" value='someRadioId41' {...register('someGroupName1')}/>
        <label className='question__label' htmlFor="someRadioId41">d. La alta dirección es consciente de la ERM. Los responsables de cada proceso asumen su riesgos y oportunidades y las reportan a la alta dirección. La gestión de riesgos crea y evalúa escenarios con visión futura.​</label>
      </div>
      <div className="question__input-group">
        <input type="radio" id="someRadioId51" value='someRadioId51' {...register('someGroupName1')}/>
        <label className='question__label' htmlFor="someRadioId51">e. Todos los niveles de la organización entienden los problemas de gestión de riesgos y llevan a cabo sus respectivos planes. La alta dirección espera que los riesgos sean tomados en cuenta para la toma de decisiones ante nuevas oportunidades. Los responsables de cada proceso asumen sus riesgos y oportunidades dentro de la planificación, con una comunicación frecuente y efectiva sobre riesgos.​</label>
      </div>
      <div className="question__input-group">
        <input type="radio" id="someRadioId61" value='someRadioId61' {...register('someGroupName1')}/>
        <label className='question__label' htmlFor="someRadioId61">f. La evaluación del riesgo es sistemática, está integrada en cada función empresarial y se mejora constantemente. El patrocinio de la alta dirección es fuerte y considera la gestión de riesgos para la toma de decisión diaria.​</label>
      </div>
    </Wrapper>
  )
};

export default Question1;