import Wrapper from './wrapper';
import './styles.scss';

const Question6 = ({ register, formState:{ errors } }) => {
  return (
    <Wrapper
      title='Atributo 6: Resiliencia y sostenibilidad empresarial'
      description='Este atributo evalúa la medida en que la continuidad del negocio, la planificación operativa y otras actividades de sostenibilidad se abordan con una metodología basada en riesgos.​'
      questionValue='¿Cuál es la opción que mejor se adapta a tu organización respecto a la adopción de una Gestión de Riesgos Empresarial​?'
    >
      <div className="question__input-group">
        <input type="radio" id="someRadioId16" name="someGroupName6" value='someRadioId16' {...register('someGroupName6')}/>
        <label className='question__label' htmlFor="someRadioId16">a. La resiliencia y la sostenibilidad están orientados a recuperación de activos e infraestructura de TI.​​​</label>
      </div>
      <div className="question__input-group">
        <input type="radio" id="someRadioId26" name="someGroupName6" value='someRadioId26' {...register('someGroupName6')}/>
        <label className='question__label' htmlFor="someRadioId26">b. La gerencia es consciente de los riesgos relacionados con la resiliencia y se centra en la infraestructura más que en el core del negocio. La respuesta a grandes eventos es reactiva. Las áreas de la organización no consideran las necesidades integrales del negocio para evitar riesgos.​</label>
      </div>
      <div className="question__input-group">
        <input type="radio" id="someRadioId36" name="someGroupName6" value='someRadioId36' {...register('someGroupName6')}/>
        <label className='question__label' htmlFor="someRadioId36">c. La organización reconoce que la resiliencia es un tema que debe considerarse en cada paso del proceso de ERM, y no solo en la mitigación.​</label>
      </div>
      <div className="question__input-group">
        <input type="radio" id="someRadioId46" name="someGroupName6" value='someRadioId46' {...register('someGroupName6')}/>
        <label className='question__label' htmlFor="someRadioId46">d. La resiliencia y la sostenibilidad se consideran en cada paso del proceso de ERM. Los riesgos de la organización incluyen geografía, tecnología disruptiva, competidores, liderazgo y cambios ambientales, con informes y control por parte de la alta dirección.</label>
      </div>
      <div className="question__input-group">
        <input type="radio" id="someRadioId56" name="someGroupName6" value='someRadioId56' {...register('someGroupName6')}/>
        <label className='question__label' htmlFor="someRadioId56">e. Un enfoque integral de la resiliencia considera los aspectos de las personas, externos, relaciones, sistemas y procesos. La resiliencia y la sostenibilidad son parte del proceso de ERM y la continuidad del negocio como mitigación.​</label>
      </div>
      <div className="question__input-group">
        <input type="radio" id="someRadioId66" name="someGroupName6" value='someRadioId66' {...register('someGroupName6')}/>
        <label className='question__label' htmlFor="someRadioId66">f. Todos los temas se enmarcan en el contexto de la continuidad de los servicios a todas las partes interesadas. La sostenibilidad no es un estado final alcanzable; más bien, es característico de un sistema dinámico y en evolución.​</label>
      </div>
    </Wrapper>
  )
};

export default Question6;