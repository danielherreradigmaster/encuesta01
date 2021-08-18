import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Alert, Button, Progress, Space } from 'antd';

import SurveyFooter from '../../components/survey/footer';
import ThankYou from '../../components/survey/thankYou';
import Welcome from '../../components/survey/welcome';
import Question from '../../components/survey/question';
import LogoRimac from '../../assets/img/logo-rimac.png';
import DatosPersonales from '../../assets/img/datos-personales.png';
import './styles.scss';

const TOTAL_STEPS = 9;


const IndexPage2 = () => {
  const [formStep, setFormStep] = useState(1);
  const [percent, setPercent] = useState((1/TOTAL_STEPS)*100);
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty, touchedFields },    
  } = useForm();

  const handleNextStep = () => {
    setFormStep(cur => cur + 1);
    setPercent(_ => (formStep/TOTAL_STEPS)*100);
  }

  const handleGoBackStep = () => {
    setFormStep(cur => cur - 1);
    setPercent(_ => (formStep/TOTAL_STEPS)*100);
  }

  const onSubmit = (values) => {
    console.log('superchuspito');
    console.log(JSON.stringify(values, null, 2))
    //handleStepCompletion()
  }

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);


  return (
    <div className="survey">
      <div  className='survey__body'>
        <form onSubmit={handleSubmit(onSubmit)}>
          {formStep === 1 && (
            <Welcome />
          )}
          {formStep >= 2 && (
            <div className={`${formStep === 2 ? "block" : "hidden"} personal-data`}>
              <div className='personal-data__container-img'>
                <img className='personal-data__img' src={DatosPersonales} alt=''/>
              </div>
              <div className='personal-data__container'>
                <h4 className='personal-data__title'>Datos Personales</h4>
                <p className='personal-data__description'>En Rimac velamos por proteger la información de nuestros clientes, respetando la confidencialidad de sus datos. Ten por seguro que la información reunida será únicamente utilizada para mejorar nuestros servicios en Gestión de Riesgos:​</p>         
                <div className="control-checkbox">
                  <input className='control-checkbox__checkbox' id="checkboxName1" value='checkboxName1' type="checkbox" {...register('checkboxName1', {required: true})}/>
                  <label className='control-checkbox__label' htmlFor="checkboxName1">He leído y acepto los términos y condiciones de uso</label>
                </div>
                <div className="control-checkbox">
                  <input className='control-checkbox__checkbox' id="checkboxName2" value='checkboxName2' type="checkbox" {...register('checkboxName2', {required: true})}/>
                  <label className='control-checkbox__label' htmlFor="checkboxName2">He leído y acepto los términos y condiciones de uso</label>
                </div>
              </div>
            </div>
          )}
          {formStep >= 3 && (
            <div className={`${formStep === 3 ? "block" : "hidden"} personal-data`}>
              <div className='personal-data__container-img'>
                <img className='personal-data__img' src={DatosPersonales} alt=''/>
              </div>
              <div className='personal-data__container'>
                <div className="control-input">
                  <input className='control-input__input' type="text" id='email' name="email" autoComplete="off" required {...register('email', {required: true})}/>
                  <label htmlFor="email" className="control-input__label">
                    <span className="control-input__content-name">
                      Correo electrónico
                    </span>
                  </label>
                </div>

                <div className="control-input">
                  <input className='control-input__input' type="text" id='fullname' name="fullname" autoComplete="off" required {...register('fullname', {required: true})}/>
                  <label htmlFor="fullname" className="control-input__label">
                    <span className="control-input__content-name">
                      Nombres y Apellidos
                    </span>
                  </label>
                </div>

                <div className="control-input">
                  <input className='control-input__input' type="text" id='company' name="company" autoComplete="off" required {...register('company', {required: true})}/>
                  <label htmlFor="company" className="control-input__label">
                    <span className="control-input__content-name">
                      Empresa 
                    </span>
                  </label>
                </div>

                <div className="control-input">
                  <input className='control-input__input' type="text" id='position' name="position" autoComplete="off" required {...register('position', {required: true})}/>
                  <label htmlFor="position" className="control-input__label">
                    <span className="control-input__content-name">
                      Cargo
                    </span>
                  </label>
                </div>
              </div>
            </div>
          )}
          {formStep >= 4 && (
            <div className={`${formStep === 4 ? "flex" : "hidden"} evaluation-start`}>
              <div className='evaluation-start__content'>
                <h1 className='evaluation-start__title'>Evaluación del nivel de madurez</h1>
                <p className='evaluation-start__description'>A continuación te presentamos 7 preguntas para que puedas conocer tu nivel de madurez según la Metodología de RIMS.</p>
                <p className='evaluation-start__required'>Todas las preguntas son obligatorias *</p>
              </div>
            </div>
          )}
          {formStep >= 5 && (
            <Question
              step={5}
              formStep={formStep}
              title='Atributo 1: Adopción de una Gestión de Riesgos Empresarial'
              description='Este atributo mide la cultura de riesgos de la organización y considera el grado de apoyo a nivel ejecutivo o de la alta dirección para la gestión de riesgos empresariales (ERM, por las siglas en inglés de Enterprise Risk Management).'
              questionValue='¿Cuál es la opción que mejor se adapta a tu organización respecto a la adopción de una Gestión de Riesgos Empresarial​?'
            >
              <div className="question__input-group">
                <input type="radio" id="someRadioId11" name="someGroupName1" value='someRadioId11' {...register('someGroupName1', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId11">a. La organización no ha reconocido la necesidad de tener un proceso de ERM.​</label>
              </div>
              <div className="question__input-group">
                <input type="radio" id="someRadioId21" name="someGroupName1" value='someRadioId21' {...register('someGroupName1', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId21">b. La cultura organizacional tiene poco compromiso con la gestión de riesgos. La metodología de gestión de riesgos no está estandarizada dentro de la organización, cada área la trabaja de forma independiente. La gestión de riesgos está basada en eventos pasados.​</label>
              </div>
              <div className="question__input-group">
                <input type="radio" id="someRadioId31" name="someGroupName1" value='someRadioId31' {...register('someGroupName1', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId31">c. La organización ha establecido  una política, un proceso estandarizado y un responsable para la gestión de riesgos empresariales. La gestión de riesgos considera riesgos futuros.​</label>
              </div>
              <div className="question__input-group">
                <input type="radio" id="someRadioId41" name="someGroupName1" value='someRadioId41' {...register('someGroupName1', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId41">d. La alta dirección es consciente de la ERM. Los responsables de cada proceso asumen su riesgos y oportunidades y las reportan a la alta dirección. La gestión de riesgos crea y evalúa escenarios con visión futura.​</label>
              </div>
              <div className="question__input-group">
                <input type="radio" id="someRadioId51" name="someGroupName1" value='someRadioId51' {...register('someGroupName1', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId51">e. Todos los niveles de la organización entienden los problemas de gestión de riesgos y llevan a cabo sus respectivos planes. La alta dirección espera que los riesgos sean tomados en cuenta para la toma de decisiones ante nuevas oportunidades. Los responsables de cada proceso asumen sus riesgos y oportunidades dentro de la planificación, con una comunicación frecuente y efectiva sobre riesgos.​</label>
              </div>
              <div className="question__input-group">
                <input type="radio" id="someRadioId61" name="someGroupName1" value='someRadioId61' {...register('someGroupName1', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId61">f. La evaluación del riesgo es sistemática, está integrada en cada función empresarial y se mejora constantemente. El patrocinio de la alta dirección es fuerte y considera la gestión de riesgos para la toma de decisión diaria.​</label>
              </div>
            </Question>            
          )}          
          {formStep >= 6 && (
            <Question
              step={6}
              formStep={formStep}
              title='Atributo 2: Descubriendo riesgos'
              description='Este atributo mide la calidad y cobertura de penetración de las actividades de evaluación de riesgos en la documentación de riesgos y oportunidades.'
              questionValue='¿Cuál es la opción que mejor se adapta a tu organización respecto a la adopción de una Gestión de Riesgos Empresarial​?'
            >
              <div className="question__input-group">
                <input type="radio" id="someRadioId12" name="someGroupName2" value='someRadioId12' {...register('someGroupName2', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId12">a. La organización cree que conoce los riesgos más importantes a los que está expuesta, aunque probablemente exista poca documentación.​</label>
              </div>
              <div className="question__input-group">
                <input type="radio" id="someRadioId22" name="someGroupName2" value='someRadioId22' {...register('someGroupName2', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId22">b. La organización cuenta con un administrador de riesgos, que probablemente no cuenta con información real o actualizada.​</label>
              </div>
              <div className="question__input-group">
                <input type="radio" id="someRadioId32" name="someGroupName2" value='someRadioId32' {...register('someGroupName2', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId32">c. La gestión de riesgos incluye listas y discusiones sobre riesgos. Sin embargo, algunas áreas no comparten todos sus riesgos generando inconsistencias. Los indicadores de gestión de riesgos están basados en eventos pasados.</label>
              </div>
              <div className="question__input-group">
                <input type="radio" id="someRadioId42" name="someGroupName2" value='someRadioId42' {...register('someGroupName2', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId42">d. La organización cuenta con criterios de evaluación de riesgos estandarizados. Los responsables de cada proceso desarrollan una lista de sus respectivos riesgos y los gestionan. La mitigación de riesgos está integrada con evaluaciones para monitorear su efectividad.​</label>
              </div>
              <div className="question__input-group">
                <input type="radio" id="someRadioId52" name="someGroupName2" value='someRadioId52' {...register('someGroupName2', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId52">e. La organización cuenta con criterios de evaluación de riesgos estandarizados. Los responsables de cada proceso gestionan constantemente una lista creciente de riesgos para luego evaluarlos.Los indicadores de riesgo críticos para sus áreas se revisan periódicamente en colaboración con el equipo de gestión de riesgos.</label>
              </div>
              <div className="question__input-group">
                <input type="radio" id="someRadioId62" name="someGroupName2" value='someRadioId62' {...register('someGroupName2', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId62">f. Los responsables de cada área revisan y mejoran regularmente los indicadores de riesgo que se les adapta mejor. Una estructura de informes rutinaria y oportuna dirige los riesgos y las oportunidades a la alta dirección.</label>
              </div>
            </Question>              
          )}
          {formStep >= 7 && (
            <Question
              step={7}
              formStep={formStep}
              title='Atributo 3: Administración del proceso de ERM'
              description='Este atributo mide el grado en que la organización ha adoptado una metodología de ERM a lo largo de su cultura y utiliza los pasos del proceso ERM para identificar, evaluar, mitigar y monitorear riesgos.'
              questionValue='¿Cuál es la opción que mejor se adapta a tu organización?'
            >
              <div className="question__input-group">
                <input type="radio" id="someRadioId13" name="someGroupName3" value='someRadioId13' {...register('someGroupName3', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId13">a. Hay poco reconocimiento de la importancia del proceso de ERM.​</label>
              </div>
              <div className="question__input-group">
                <input type="radio" id="someRadioId23" name="someGroupName3" value='someRadioId23' {...register('someGroupName3', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId23">b. La gestión es reactiva y es posible que ERM todavía no se considere un proceso. Por ello, no existen criterios estándar de evaluación de riesgos. Los roles y responsabilidades de riesgo son informales o inexistentes.​​</label>
              </div>
              <div className="question__input-group">
                <input type="radio" id="someRadioId33" name="someGroupName3" value='someRadioId33' {...register('someGroupName3', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId33">c. La gerencia es consciente de la necesidad de un proceso de ERM. Por ello cuentan con funciones y responsabilidades definidas. La mitigación de riesgos puede identificarse, pero no suele ejecutarse.​</label>
              </div>
              <div className="question__input-group">
                <input type="radio" id="someRadioId43" name="someGroupName3" value='someRadioId43' {...register('someGroupName3', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId43">d. La organización cuenta con un proceso de ERM que se adapta a las necesidades de las áreas del negocio. Cuentan con un equipo de Riesgos Empresariales y la alta dirección revisa activamente los planes de riesgo.​</label>
              </div>
              <div className="question__input-group">
                <input type="radio" id="someRadioId53" name="someGroupName3" value='someRadioId53' {...register('someGroupName3', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId53">e. La organización cuenta con una política y un equipo de ERM. Asimismo, la gerencia desarrolla y revisa los reportes de riesgo, en los que miden el progreso de ERM para las partes interesadas, incluida la Junta Directiva.​</label>
              </div>
              <div className="question__input-group">
                <input type="radio" id="someRadioId63" name="someGroupName3" value='someRadioId63' {...register('someGroupName3', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId63">f. La gestión de riesgos empresarial está integrada en todos los procesos y estrategias del negocio como una forma de alcanzar los objetivos. La organización utiliza un proceso de ERM que mejora la toma de decisiones y el desempeño.</label>
              </div>
            </Question>            
          )}
          {formStep >= 8 && (
            <Question
              step={8}
              formStep={formStep}
              title='Atributo 4: Apetito de la Gestión de Riesgos'
              description='Este atributo evalúa el nivel de conciencia en la relación riesgo-oportunidad, la responsabilidad por el riesgo, la definición de tolerancias al riesgo y si la organización es eficaz para cerrar la brecha entre el riesgo potencial y el real.'
              questionValue='¿Cuál es la opción que mejor se adapta a tu organización respecto a la adopción de una Gestión de Riesgos Empresarial​?'
            >
              <div className="question__input-group">
                <input type="radio" id="someRadioId14" name="someGroupName4" value='someRadioId14' {...register('someGroupName4', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId14">a. La organización no ha formalizado su tolerancia ni apetito por el riesgo.​</label>
              </div>
              <div className="question__input-group">
                <input type="radio" id="someRadioId24" name="someGroupName4" value='someRadioId24' {...register('someGroupName4', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId24">b. La gestión del riesgo carece de una visión estratégica enfocada en riesgos. Se administra de una de dos maneras: como una forma de evitar los riesgos y cumplir con la Normativa o como la transferencia del riesgo a través de un seguro.</label>
              </div>
              <div className="question__input-group">
                <input type="radio" id="someRadioId34" name="someGroupName4" value='someRadioId34' {...register('someGroupName4', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId34">c. Solo los líderes de alto nivel entienden la gestión de riesgos para tomar decisiones. Cada área tiene su forma de definir y comparar riesgos.</label>
              </div>
              <div className="question__input-group">
                <input type="radio" id="someRadioId44" name="someGroupName4" value='someRadioId44' {...register('someGroupName4', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId44">d. Los supuestos de riesgo dentro de las decisiones de gestión se comunican claramente. Los riesgos y oportunidades son identificados, evaluados y gestionados de forma rutinaria en línea con las tolerancias al riesgo. Se cuantifica la brecha entre la tolerancia objetivo y real.</label>
              </div>
              <div className="question__input-group">
                <input type="radio" id="someRadioId54" name="someGroupName4" value='someRadioId54' {...register('someGroupName4', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId54">e. El apetito por el riesgo se considera en cada paso del proceso de ERM. La organización pronostica los efectos potenciales de la mitigación planificada frente a la tolerancia al riesgo como parte del proceso de gestión de riesgos empresariales.​​</label>
              </div>
              <div className="question__input-group">
                <input type="radio" id="someRadioId64" name="someGroupName4" value='someRadioId64' {...register('someGroupName4', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId64">f. El equipo de ERM define los niveles de tolerancia para todas las áreas. Un mecanismo compara e informa el riesgo evaluado real versus la tolerancia al riesgo. La gerencia prioriza la asignación de recursos en función de la brecha entre el apetito por el riesgo y el riesgo y la oportunidad evaluados.</label>
              </div>
            </Question>            
          )}
          {formStep >= 9 && (
            <Question
              step={9}
              formStep={formStep}
              title='Atributo 5: Disciplina de Causa Raíz'
              description='Este atributo evalúa hasta qué punto una organización identifica el riesgo por fuente o causa raíz, en comparación con los síntomas y resultados que producen.​​'
              questionValue='¿Cuál es la opción que mejor se adapta a tu organización respecto a la adopción de una Gestión de Riesgos Empresarial​?'
            >
              <div className="question__input-group">
                <input type="radio" id="someRadioId15" name="someGroupName5" value='someRadioId15' {...register('someGroupName5', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId15">a. Los efectos de eventos de riesgo pueden identificarse, pero no vincularse a objetivos.​​</label>
              </div>
              <div className="question__input-group">
                <input type="radio" id="someRadioId25" name="someGroupName5" value='someRadioId25' {...register('someGroupName5', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId25">b. La frecuencia del riesgo no se rastrea ni conecta a un proceso. No rastrea formalmente las causas raíz en el proceso de gestión de riesgos.​</label>
              </div>
              <div className="question__input-group">
                <input type="radio" id="someRadioId35" name="someGroupName5" value='someRadioId35' {...register('someGroupName5', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId35">c. La relación de causa y efecto no está definida en la organización. Existe conciencia de la importancia de un enfoque de causa raíz, pero no forma parte del marco de gestión de riesgos.​</label>
              </div>
              <div className="question__input-group">
                <input type="radio" id="someRadioId45" name="someGroupName5" value='someRadioId45' {...register('someGroupName5', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId45">d. El enfoque de causa y efecto se entiende en la organización y es importante en cada paso del proceso de ERM. El marco de gestión de riesgos se organiza en torno a categorías de riesgo de causa raíz como personas internas, entorno externo, relaciones, sistemas y procesos.​</label>
              </div>
              <div className="question__input-group">
                <input type="radio" id="someRadioId55" name="someGroupName5" value='someRadioId55' {...register('someGroupName5', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId55">e. Se identifican, miden y gestionan las causas, más que los resultados. Cada área recopila información de riesgo y desempeño para identificar dependencias y la frecuencia de los indicadores de causa raíz rutinariamente.​</label>
              </div>
              <div className="question__input-group">
                <input type="radio" id="someRadioId65" name="someGroupName5" value='someRadioId65' {...register('someGroupName5', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId65">f. La organización utiliza eventos pasados propios o ajenos para definir categorías de causa raíz que le permitan prepararse para eventos futuros. La organización rastrea los eventos y la causa raíz al evaluar los costos-beneficios de las mejoras.​</label>
              </div>
            </Question>            
          )}
          {formStep >= 10 && (
            <Question
              step={10}
              formStep={formStep}
              title='Atributo 6: Resiliencia y sostenibilidad empresarial'
              description='Este atributo evalúa la medida en que la continuidad del negocio, la planificación operativa y otras actividades de sostenibilidad se abordan con una metodología basada en riesgos.​'
              questionValue='¿Cuál es la opción que mejor se adapta a tu organización respecto a la adopción de una Gestión de Riesgos Empresarial​?'
            >
              <div className="question__input-group">
                <input type="radio" id="someRadioId16" name="someGroupName6" value='someRadioId16' {...register('someGroupName6', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId16">a. La resiliencia y la sostenibilidad están orientados a recuperación de activos e infraestructura de TI.​​​</label>
              </div>
              <div className="question__input-group">
                <input type="radio" id="someRadioId26" name="someGroupName6" value='someRadioId26' {...register('someGroupName6', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId26">b. La gerencia es consciente de los riesgos relacionados con la resiliencia y se centra en la infraestructura más que en el core del negocio. La respuesta a grandes eventos es reactiva. Las áreas de la organización no consideran las necesidades integrales del negocio para evitar riesgos.​</label>
              </div>
              <div className="question__input-group">
                <input type="radio" id="someRadioId36" name="someGroupName6" value='someRadioId36' {...register('someGroupName6', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId36">c. La organización reconoce que la resiliencia es un tema que debe considerarse en cada paso del proceso de ERM, y no solo en la mitigación.​</label>
              </div>
              <div className="question__input-group">
                <input type="radio" id="someRadioId46" name="someGroupName6" value='someRadioId46' {...register('someGroupName6', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId46">d. La resiliencia y la sostenibilidad se consideran en cada paso del proceso de ERM. Los riesgos de la organización incluyen geografía, tecnología disruptiva, competidores, liderazgo y cambios ambientales, con informes y control por parte de la alta dirección.</label>
              </div>
              <div className="question__input-group">
                <input type="radio" id="someRadioId56" name="someGroupName6" value='someRadioId56' {...register('someGroupName6', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId56">e. Un enfoque integral de la resiliencia considera los aspectos de las personas, externos, relaciones, sistemas y procesos. La resiliencia y la sostenibilidad son parte del proceso de ERM y la continuidad del negocio como mitigación.​</label>
              </div>
              <div className="question__input-group">
                <input type="radio" id="someRadioId66" name="someGroupName6" value='someRadioId66' {...register('someGroupName6', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId66">f. Todos los temas se enmarcan en el contexto de la continuidad de los servicios a todas las partes interesadas. La sostenibilidad no es un estado final alcanzable; más bien, es característico de un sistema dinámico y en evolución.​</label>
              </div>
            </Question>            
          )}
          {formStep >= 11 && (
            <Question
              step={11}
              formStep={formStep}
              title='Atributo 7: Gestión del desempeño'
              description='Este atributo determina el grado en que una Organización ejecuta sus visiones y estrategia.'
              questionValue='¿Cuál es la opción que mejor se adapta a tu organización respecto a la adopción de una Gestión de Riesgos Empresarial​?'
            >
              <div className="question__input-group">
                <input type="radio" id="someRadioId17" name="someGroupName7" value='someRadioId17' {...register('someGroupName7', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId17">a. No existe un marco formal de indicadores y mediciones para las metas y la gestión de la Organización.​​​​</label>
              </div>
              <div className="question__input-group">
                <input type="radio" id="someRadioId27" name="someGroupName7" value='someRadioId27' {...register('someGroupName7', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId27">b. Los objetivos estratégicos no están articulados con la primera línea de gerencia. Es posible que las decisiones para actuar sobre los riesgos no se rastreen ni se controlen de manera sistemática.​​</label>
              </div>
              <div className="question__input-group">
                <input type="radio" id="someRadioId37" name="someGroupName7" value='someRadioId37' {...register('someGroupName7', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId37">c. El proceso de gestión de riesgos empresariales es independiente de la estrategia y la planificación.​</label>
              </div>
              <div className="question__input-group">
                <input type="radio" id="someRadioId47" name="someGroupName7" value='someRadioId47' {...register('someGroupName7', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId47">d. Los criterios de gestión de riesgos son parte de la gestión evaluaciones de desempeño. Los colaboradores comprenden cómo el enfoque basado en el riesgo les ayuda a alcanzar sus metas.​</label>
              </div>
              <div className="question__input-group">
                <input type="radio" id="someRadioId57" name="someGroupName7" value='someRadioId57' {...register('someGroupName7', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId57">e. Los riesgos son altamente considerados como parte de planificación estratégica. Los empleados de todos los niveles utilizan un enfoque basado en el riesgo para lograr los objetivos.​​</label>
              </div>
              <div className="question__input-group">                
                <input type="radio" id="someRadioId67" name="someGroupName7" value='someRadioId67' {...register('someGroupName7', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId67">f. La evaluación y medición de la mejora del desempeño es parte de la cultura del riesgo. La organización mide la efectividad de gestionar las incertidumbres y aprovechar las oportunidades de riesgo con un enfoque claro, conciso, eficaz y comunicacional.​​</label>
              </div>
            </Question>            
          )}
          {formStep >= 12 && (
            <Question
              step={12}
              formStep={formStep}
              title=''
              description=''
              questionValue='¿En cuál de los siguientes atributos recomendados por RIMS te gustaría recibir servicios como valor agregado de Rimac?'
            >
              <div className="question__input-group">
                <input type="radio" id="someRadioId18" name="someGroupName8" value='someRadioId18' {...register('someGroupName8', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId18">Atributo 1: Adopción de una Gestión de Riesgos Empresarial: mide la cultura de riesgos de la organización y considera el grado de apoyo de la alta dirección.​​​​</label>
              </div>
              <div className="question__input-group">
                <input type="radio" id="someRadioId28" name="someGroupName8" value='someRadioId28' {...register('someGroupName8', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId28">Atributo 2: Descubriendo riesgos: mide la calidad y alcance en la documentación de actividades de evaluación de riesgos y oportunidades.</label>
              </div>
              <div className="question__input-group">
                <input type="radio" id="someRadioId38" name="someGroupName8" value='someRadioId38' {...register('someGroupName8', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId38">Atributo 3: Administración del proceso de ERM: mide el grado de implementación y concientización en una metodología de ERM</label>
              </div>
              <div className="question__input-group">
                <input type="radio" id="someRadioId48" name="someGroupName8" value='someRadioId48' {...register('someGroupName8', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId48">Atributo 4: Apetito de la Gestión de Riesgos: evalúa el nivel de conciencia en la relación riesgo-oportunidad, la tolerancias al riesgo y si la organización es eficaz para cerrar la brecha entre el riesgo potencial y el real.​</label>
              </div>
              <div className="question__input-group">
                <input type="radio" id="someRadioId58" name="someGroupName8" value='someRadioId58' {...register('someGroupName8', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId58">Atributo 5: Disciplina de causa raíz: evalúa hasta qué punto una organización identifica el riesgo por fuente o causa raíz.​​</label>
              </div>
              <div className="question__input-group">
                <input type="radio" id="someRadioId68" name="someGroupName8" value='someRadioId68' {...register('someGroupName8', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId68">Atributo 6: Resiliencia y sostenibilidad empresarial: evalúa la medida en que la continuidad del negocio, la planificación operativa y la sostenibilidad se abordan con una metodología basada en riesgos.</label>
              </div>
              <div className="question__input-group">
                <input type="radio" id="someRadioId78" name="someGroupName8" value='someRadioId78' {...register('someGroupName8', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId78">Atributo 7: Gestión del desempeño: determina el grado en que una Organización ejecuta sus visiones y estrategia.</label>
              </div>
              <div className="question__input-group">
                <input type="radio" id="someRadioId88" name="someGroupName8" value='someRadioId88' {...register('someGroupName8', {required: true})}/>
                <label className='question__label' htmlFor="someRadioId88">Ninguno</label>
              </div>
              <div className="invalid-feedback">{errors.someGroupName8?.message}</div>
              {/* <div className='question__others'>
                <div className="question__others-input-wrap">
                  <input className='question__others-input' type="text" {...register('someGroupName8')}/>
                </div>
                <div className="question__input-group">
                  <input type="radio" id="someRadioId89" name="someGroupName8" value='someRadioId89' {...register('someGroupName8', {required: true})}/>
                  <label className='question__label' htmlFor="someRadioId89">Otros:</label>
                </div>
              </div> */}
            </Question>            
          )}
          {formStep >= 13 && (
            <ThankYou />
          )}
          <SurveyFooter 
            formStep={formStep}
            handleGoBackStep={handleGoBackStep}
            handleNextStep={handleNextStep}
          />
        </form>
      </div>   
    </div>
  )
}

export default IndexPage2;