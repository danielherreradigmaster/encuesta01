import { useState } from 'react';
import Wrapper from './wrapper';
import './styles.scss';

const Question8 = ({ register, formState:{ errors } }) => {
  const [showInput, setShowInput] = useState(false);

  const handleInputOtros = (e) => {
    const { type, value } = e.target;
    if(value === 'someRadioId89' && type === 'radio') 
      setShowInput(_ => true);
    else if(type === 'radio') setShowInput(_ => false);
  };

  return (
    <Wrapper
      title=''
      description=''
      questionValue='¿En cuál de los siguientes atributos recomendados por RIMS te gustaría recibir servicios como valor agregado de Rimac?'
    >
      <div onChange={handleInputOtros}>
        <div className="question__input-group">
          <input type="radio" id="someRadioId18" name="someGroupName8" value='someRadioId18' {...register('someGroupName8')}/>
          <label className='question__label' htmlFor="someRadioId18">Atributo 1: Adopción de una Gestión de Riesgos Empresarial: mide la cultura de riesgos de la organización y considera el grado de apoyo de la alta dirección.​​​​</label>
        </div>
        <div className="question__input-group">
          <input type="radio" id="someRadioId28" name="someGroupName8" value='someRadioId28' {...register('someGroupName8')}/>
          <label className='question__label' htmlFor="someRadioId28">Atributo 2: Descubriendo riesgos: mide la calidad y alcance en la documentación de actividades de evaluación de riesgos y oportunidades.</label>
        </div>
        <div className="question__input-group">
          <input type="radio" id="someRadioId38" name="someGroupName8" value='someRadioId38' {...register('someGroupName8')}/>
          <label className='question__label' htmlFor="someRadioId38">Atributo 3: Administración del proceso de ERM: mide el grado de implementación y concientización en una metodología de ERM</label>
        </div>
        <div className="question__input-group">
          <input type="radio" id="someRadioId48" name="someGroupName8" value='someRadioId48' {...register('someGroupName8')}/>
          <label className='question__label' htmlFor="someRadioId48">Atributo 4: Apetito de la Gestión de Riesgos: evalúa el nivel de conciencia en la relación riesgo-oportunidad, la tolerancias al riesgo y si la organización es eficaz para cerrar la brecha entre el riesgo potencial y el real.​</label>
        </div>
        <div className="question__input-group">
          <input type="radio" id="someRadioId58" name="someGroupName8" value='someRadioId58' {...register('someGroupName8')}/>
          <label className='question__label' htmlFor="someRadioId58">Atributo 5: Disciplina de causa raíz: evalúa hasta qué punto una organización identifica el riesgo por fuente o causa raíz.​​</label>
        </div>
        <div className="question__input-group">
          <input type="radio" id="someRadioId68" name="someGroupName8" value='someRadioId68' {...register('someGroupName8')}/>
          <label className='question__label' htmlFor="someRadioId68">Atributo 6: Resiliencia y sostenibilidad empresarial: evalúa la medida en que la continuidad del negocio, la planificación operativa y la sostenibilidad se abordan con una metodología basada en riesgos.</label>
        </div>
        <div className="question__input-group">
          <input type="radio" id="someRadioId78" name="someGroupName8" value='someRadioId78' {...register('someGroupName8')}/>
          <label className='question__label' htmlFor="someRadioId78">Atributo 7: Gestión del desempeño: determina el grado en que una Organización ejecuta sus visiones y estrategia.</label>
        </div>
        <div className="question__input-group">
          <input type="radio" id="someRadioId88" name="someGroupName8" value='someRadioId88' {...register('someGroupName8')}/>
          <label className='question__label' htmlFor="someRadioId88">Ninguno</label>
        </div>
        {/* <div className='question__others'>
          {showInput && (
          <div className="question__others-input-wrap">
            <input className='question__others-input' type="text" {...register('otros')}/>
            {errors.otros && <div className='invalid-message'>{errors.otros.message}</div>}
          </div>)}
          <div className="question__input-group">
            <input type="radio" id="someRadioId89" name="someGroupName8" value='someRadioId89' {...register('someGroupName8')}/>
            <label className='question__label' htmlFor="someRadioId89">Otros:</label>
          </div>
        </div>  */}     
      </div>
    </Wrapper>
  )
};

export default Question8;