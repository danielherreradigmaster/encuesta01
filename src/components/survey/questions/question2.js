import Wrapper from './wrapper';
import './styles.scss';

const Question2 = ({ register, formState:{ errors } }) => {
  return (
    <Wrapper
      title='Atributo 2: Descubriendo riesgos'
      description='Este atributo mide la calidad y cobertura de penetración de las actividades de evaluación de riesgos en la documentación de riesgos y oportunidades.'
      questionValue='¿Cuál es la opción que mejor se adapta a tu organización respecto a la adopción de una Gestión de Riesgos Empresarial​?'
    >
      <div className="question__input-group">
        <input type="radio" id="someRadioId12" name="someGroupName2" value='someRadioId12' {...register('someGroupName2')}/>
        <label className='question__label' htmlFor="someRadioId12">a. La organización cree que conoce los riesgos más importantes a los que está expuesta, aunque probablemente exista poca documentación.​</label>
      </div>
      <div className="question__input-group">
        <input type="radio" id="someRadioId22" name="someGroupName2" value='someRadioId22' {...register('someGroupName2')}/>
        <label className='question__label' htmlFor="someRadioId22">b. La organización cuenta con un administrador de riesgos, que probablemente no cuenta con información real o actualizada.​</label>
      </div>
      <div className="question__input-group">
        <input type="radio" id="someRadioId32" name="someGroupName2" value='someRadioId32' {...register('someGroupName2')}/>
        <label className='question__label' htmlFor="someRadioId32">c. La gestión de riesgos incluye listas y discusiones sobre riesgos. Sin embargo, algunas áreas no comparten todos sus riesgos generando inconsistencias. Los indicadores de gestión de riesgos están basados en eventos pasados.</label>
      </div>
      <div className="question__input-group">
        <input type="radio" id="someRadioId42" name="someGroupName2" value='someRadioId42' {...register('someGroupName2')}/>
        <label className='question__label' htmlFor="someRadioId42">d. La organización cuenta con criterios de evaluación de riesgos estandarizados. Los responsables de cada proceso desarrollan una lista de sus respectivos riesgos y los gestionan. La mitigación de riesgos está integrada con evaluaciones para monitorear su efectividad.​</label>
      </div>
      <div className="question__input-group">
        <input type="radio" id="someRadioId52" name="someGroupName2" value='someRadioId52' {...register('someGroupName2')}/>
        <label className='question__label' htmlFor="someRadioId52">e. La organización cuenta con criterios de evaluación de riesgos estandarizados. Los responsables de cada proceso gestionan constantemente una lista creciente de riesgos para luego evaluarlos.Los indicadores de riesgo críticos para sus áreas se revisan periódicamente en colaboración con el equipo de gestión de riesgos.</label>
      </div>
      <div className="question__input-group">
        <input type="radio" id="someRadioId62" name="someGroupName2" value='someRadioId62' {...register('someGroupName2')}/>
        <label className='question__label' htmlFor="someRadioId62">f. Los responsables de cada área revisan y mejoran regularmente los indicadores de riesgo que se les adapta mejor. Una estructura de informes rutinaria y oportuna dirige los riesgos y las oportunidades a la alta dirección.</label>
      </div>
      {errors.someGroupName2 && <p>{errors.someGroupName2.message}</p>}
    </Wrapper>
  )
};

export default Question2;