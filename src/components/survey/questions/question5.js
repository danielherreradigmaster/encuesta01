import Wrapper from './wrapper';
import './styles.scss';

const Question5 = ({ register, formState:{ errors } }) => {
  return (
    <Wrapper
      title='Atributo 5: Disciplina de Causa Raíz'
      description='Este atributo evalúa hasta qué punto una organización identifica el riesgo por fuente o causa raíz, en comparación con los síntomas y resultados que producen.​​'
      questionValue='¿Cuál es la opción que mejor se adapta a tu organización respecto a la adopción de una Gestión de Riesgos Empresarial​?'
    >
      <div className="question__input-group">
        <input type="radio" id="someRadioId15" name="someGroupName5" value='someRadioId15' {...register('someGroupName5')}/>
        <label className='question__label' htmlFor="someRadioId15">a. Los efectos de eventos de riesgo pueden identificarse, pero no vincularse a objetivos.​​</label>
      </div>
      <div className="question__input-group">
        <input type="radio" id="someRadioId25" name="someGroupName5" value='someRadioId25' {...register('someGroupName5')}/>
        <label className='question__label' htmlFor="someRadioId25">b. La frecuencia del riesgo no se rastrea ni conecta a un proceso. No rastrea formalmente las causas raíz en el proceso de gestión de riesgos.​</label>
      </div>
      <div className="question__input-group">
        <input type="radio" id="someRadioId35" name="someGroupName5" value='someRadioId35' {...register('someGroupName5')}/>
        <label className='question__label' htmlFor="someRadioId35">c. La relación de causa y efecto no está definida en la organización. Existe conciencia de la importancia de un enfoque de causa raíz, pero no forma parte del marco de gestión de riesgos.​</label>
      </div>
      <div className="question__input-group">
        <input type="radio" id="someRadioId45" name="someGroupName5" value='someRadioId45' {...register('someGroupName5')}/>
        <label className='question__label' htmlFor="someRadioId45">d. El enfoque de causa y efecto se entiende en la organización y es importante en cada paso del proceso de ERM. El marco de gestión de riesgos se organiza en torno a categorías de riesgo de causa raíz como personas internas, entorno externo, relaciones, sistemas y procesos.​</label>
      </div>
      <div className="question__input-group">
        <input type="radio" id="someRadioId55" name="someGroupName5" value='someRadioId55' {...register('someGroupName5')}/>
        <label className='question__label' htmlFor="someRadioId55">e. Se identifican, miden y gestionan las causas, más que los resultados. Cada área recopila información de riesgo y desempeño para identificar dependencias y la frecuencia de los indicadores de causa raíz rutinariamente.​</label>
      </div>
      <div className="question__input-group">
        <input type="radio" id="someRadioId65" name="someGroupName5" value='someRadioId65' {...register('someGroupName5')}/>
        <label className='question__label' htmlFor="someRadioId65">f. La organización utiliza eventos pasados propios o ajenos para definir categorías de causa raíz que le permitan prepararse para eventos futuros. La organización rastrea los eventos y la causa raíz al evaluar los costos-beneficios de las mejoras.​</label>
      </div>
    </Wrapper>
  )
};

export default Question5;